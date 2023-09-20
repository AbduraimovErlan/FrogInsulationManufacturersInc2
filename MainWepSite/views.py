from _decimal import Decimal

from django.contrib import messages

from .models import Product, Category, Brand, Order, ProductSize
from .models import ProductImage  # Импортируйте ваши модели
from django.shortcuts import render, redirect, get_object_or_404
from .models import OrderItem
from django.http import JsonResponse, HttpResponseBadRequest
from django.db.models import Q
from MainWepSite.models import Product, CartItem


# Главная страница
def index(request):
    search_query = request.GET.get('search', '')
    if search_query:
        products = Product.objects.filter(name__icontains=search_query)
    else:
        products = Product.objects.all()

    categories = Category.objects.all()
    brands = Brand.objects.all()

    # Фильтрация
    category_slug = request.GET.get('category', None)
    brand_slug = request.GET.get('brand', None)
    filter_category = request.GET.get('filter_category', '0')  # по умолчанию '0'
    filter_brand = request.GET.get('filter_brand', '0')  # по умолчанию '0'

    if filter_category == '1' and category_slug:
        products = products.filter(category__slug=category_slug)

    if filter_brand == '1' and brand_slug:
        products = products.filter(brand__slug=brand_slug)

    print(f"filter_category = {filter_category}, category_slug = {category_slug}")
    print(f"filter_brand = {filter_brand}, brand_slug = {brand_slug}")

    return render(request, 'index.html', {
        'products': products,
        'categories': categories,
        'brands': brands,
    })
def view_cart(request):
    cart = request.session.get('cart', {})
    cart_items = []
    total_price = 0

    # Создайте копию корзины для безопасной итерации
    for sku, item_data in list(cart.items()):
        try:
            # Проверка на наличие 'product_id' в данных корзины
            if 'product_id' not in item_data:
                product_id = int(sku)
            else:
                product_id = item_data['product_id']

            product = Product.objects.get(id=product_id)

            if 'size' in item_data:
                size = item_data['size']
                price = Decimal(item_data['price'])
            else:
                size = None
                price = product.price

            quantity = item_data['quantity']
            total_price += price * quantity

            cart_items.append({
                'product': product,
                'quantity': quantity,
                'size': size,
                'total': price * quantity
            })
        except Product.DoesNotExist:
            messages.warning(request, f"Product with SKU {sku} was removed or does not exist.")
            del cart[sku]

    request.session['cart'] = cart

    return render(request, 'view_cart.html', {
        'cart_items': cart_items,
        'total_price': total_price
    })


def _add_product_to_session_cart(request, product_id, quantity, selected_size=None):
    cart = request.session.get('cart', {})

    # Попытка получить продукт по ID
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        raise ValueError(f"Product with ID {product_id} does not exist.")

    # Определение SKU и цены на основе наличия размера
    if selected_size:
        try:
            product_size = ProductSize.objects.get(product=product, size__value=selected_size)
            sku = product_size.sku
            price = product_size.price
        except ProductSize.DoesNotExist:
            raise ValueError(f"Size {selected_size} for product {product_id} does not exist.")
    else:
        if hasattr(product, 'sku') and product.sku:
            sku = product.sku
            price = product.price
        else:
            raise ValueError("The product must either have a size selected or an SKU if no size is selected.")



    # Обновление или добавление продукта в корзину
    cart_data = {
        'product_id': product_id,
        'quantity': cart.get(sku, {}).get('quantity', 0) + quantity,  # обновление количества, если продукт уже в корзине
        'price': str(price)
    }
    if selected_size:
        cart_data['size'] = selected_size
    cart[sku] = cart_data

    # Сохранение обновленной корзины в сессии
    request.session['cart'] = cart



# Add product to cart
def add_to_cart(request, product_id):
    if request.method == "POST":
        try:
            product = get_object_or_404(Product, id=product_id)
            quantity = int(request.POST.get('quantity', 1))
            selected_size = request.POST.get('selected_size')

            if not selected_size:
                raise ValueError("Size not selected.")

            _add_product_to_session_cart(request, product.id, quantity, selected_size)
            return redirect('MainWepSite:view_cart')
        except ValueError as e:
            messages.error(request, str(e))
            return redirect('MainWepSite:view_cart')
        except Product.DoesNotExist:
            messages.error(request, "Product not found.")
            return redirect('MainWepSite:index')
    else:
        messages.warning(request, "Invalid request type.")
        return redirect('MainWepSite:view_cart')



# Add product to cart without redirecting
def just_add_to_cart(request, product_id):
    try:
        product = get_object_or_404(Product, id=product_id)
        quantity = int(request.POST.get('quantity', 1))

        # Call the _add_product_to_session_cart function to add product to cart
        _add_product_to_session_cart(request, product_id, quantity)

        # Redirect user back to the previous page
        return redirect(request.META['HTTP_REFERER'])
    except ValueError:
        return HttpResponseBadRequest("Invalid product quantity")
    except Product.DoesNotExist:
        messages.error(request, "Product not found.")
        return redirect(request.META['HTTP_REFERER'])


def remove_from_cart(request, sku):
    cart = request.session.get('cart', {})
    sku_str = str(sku)

    if sku_str in cart:
        del cart[sku_str]
        print(f"Updated cart after removal: {cart}")

        request.session['cart'] = cart
        messages.success(request, f"Product with SKU {sku_str} successfully removed from cart.")
    else:
        messages.error(request, f"Product with SKU {sku_str} not found in cart. Current cart items: {list(cart.keys())}")

    return redirect('MainWepSite:view_cart')



def update_cart_quantity(request, sku):
    if request.method == "POST":
        cart = request.session.get('cart', {})

        try:
            # Получаем новое количество товаров из POST-запроса
            new_quantity = int(request.POST.get('quantity', 1))

            # Если SKU не существует в корзине, выводим сообщение об ошибке
            if sku not in cart:
                messages.error(request, "Product not found in cart.")
                return redirect('MainWepSite:view_cart')

            # Проверяем, что количество товаров больше нуля
            if new_quantity <= 0:
                messages.error(request, "Quantity must be greater than zero.")
                return redirect('MainWepSite:view_cart')

            # Обновляем количество товаров в корзине
            cart[sku]['quantity'] = new_quantity
            print(f"Updated cart: {cart}")

            # Обновляем состояние корзины в сессии
            request.session['cart'] = cart

            # Выводим сообщение об успешном обновлении количества товаров
            messages.success(request, "Quantity updated successfully.")
        except ValueError:
            # Если введено неверное количество товаров (например, не целое число),
            # выводим сообщение об ошибке
            messages.error(request, "Invalid quantity.")

    return redirect('MainWepSite:view_cart')






def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)
    main_image = product.main_image  # Получение главного изображения напрямую из продукта
    additional_images = product.images.all()  # Это дополнительные изображения


    context = {'product': product, 'main_image': main_image, 'additional_images': additional_images}
    return render(request, 'product_detail.html', context)


# Страница категории
def category_detail(request, slug):
    category = get_object_or_404(Category, slug=slug)
    products = Product.objects.filter(category=category)
    return render(request, 'category_detail.html', {'category': category, 'products': products})

# Страница бренда
def brand_detail(request, slug):
    brand = get_object_or_404(Brand, slug=slug)
    products = Product.objects.filter(brand=brand)
    return render(request, 'brand_detail.html', {'brand': brand, 'products': products})

# Создание нового заказа
def create_order(request):
    if request.method == "POST":
        customer_name = request.POST.get('customer_name')
        customer_email = request.POST.get('customer_email')
        customer_phone = request.POST.get('customer_phone')

        new_order = Order(
            customer_name=customer_name,
            customer_email=customer_email,
            customer_phone=customer_phone,
        )
        new_order.save()

        # Получаем корзину из сессии
        cart = request.session.get('cart', {})

        # Добавляем элементы из корзины в заказ
        for product_id, quantity in cart.items():
            product = get_object_or_404(Product, id=product_id)
            order_item = OrderItem(
                order=new_order,
                product=product,
                quantity=quantity,
                price=product.price
            )
            order_item.save()

        # Очищаем корзину в сессии
        request.session['cart'] = {}

        return redirect('order_detail', order_id=new_order.id)

    return render(request, 'create_order.html')



# Детали заказа
def order_detail(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    return render(request, 'order_detail.html', {'order': order})

# Список всех заказов
def order_list(request):
    orders = Order.objects.all()
    return render(request, 'order_list.html', {'orders': orders})

