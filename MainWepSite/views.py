from .models import Product, Category, Brand, Order, Wishlist, ProductVariant
from .models import ProductImage  # Импортируйте ваши модели
from django.shortcuts import render, redirect, get_object_or_404
from .models import OrderItem
from django.db.models import Q
from django.shortcuts import get_object_or_404, redirect
from django.urls import reverse
from django.shortcuts import render
from django.contrib import messages
from django.http import HttpResponseBadRequest
# Удаление товара из корзины
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.http import HttpResponseBadRequest
from .models import Product, ProductVariant


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


# Добавлено brands


def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)

    # Если у продукта есть главное изображение, используем его
    if product.image:
        main_image = product.image
    else:
        main_image_obj = ProductImage.objects.filter(product=product, is_main=True).first()
        if main_image_obj:  # Если есть указанное главное изображение в ProductImage
            main_image = main_image_obj.image
        else:  # Если главное изображение не указано, выберем первое изображение из ProductImage
            first_image_obj = ProductImage.objects.filter(product=product).first()
            main_image = first_image_obj.image if first_image_obj else None

    # Получение дополнительных изображений (исключая главное)
    additional_images = ProductImage.objects.filter(product=product).exclude(image=main_image)

    variants = product.variants.all()
    print(variants)

    context = {
        'product': product,
        'main_image': main_image,
        'additional_images': additional_images,
        'variants': variants,
    }

    return render(request, 'product_detail.html', context)

# Страница категории
def category_detail(request, slug):
    category = get_object_or_404(Category, slug=slug)  # Изменено
    products = Product.objects.filter(category=category)
    return render(request, 'category_detail.html', {'category': category, 'products': products})

# Страница бренда
def brand_detail(request, slug):  # Добавлено
    brand = get_object_or_404(Brand, slug=slug)  # Добавлено
    products = Product.objects.filter(brand=brand)  # Добавлено
    return render(request, 'brand_detail.html', {'brand': brand, 'products': products})  # Добавлено
# Страница заказа
# Просмотр содержимого корзины
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Product, ProductVariant


def view_cart(request):
    cart = request.session.get('cart', {})
    cart_items = []
    total_price = 0

    for product_id, item_data in cart.items():
        try:
            product_id = int(product_id)
            product = Product.objects.get(id=product_id)

            # Проверьте наличие 'variant_id' в 'item_data' перед получением его
            if 'variant_id' in item_data:
                variant_id = item_data['variant_id']
            else:
                variant_id = None

            quantity = item_data['quantity']

            if variant_id:
                variant = ProductVariant.objects.get(id=variant_id)
                attributes = variant.attributes.all()
                price = variant.price
            else:
                # Если вариант не выбран, используйте основной продукт
                variant = product
                attributes = []  # основной продукт не имеет атрибутов
                price = product.price

            total_price += price * quantity
            cart_items.append({
                'product': product,
                'variant': variant,
                'attributes': attributes,
                'quantity': quantity,
                'total': price * quantity
            })
        except (ValueError, Product.DoesNotExist, ProductVariant.DoesNotExist):
            messages.warning(request, f"Товар с ID {product_id} был удален или не существует.")
            del cart[str(product_id)]  # Remove invalid item from cart

    request.session['cart'] = cart  # Update cart in session

    return render(request, 'view_cart.html', {
        'cart_items': cart_items,
        'total_price': total_price
    })


# Удаление товара из корзины
def remove_from_cart(request, product_id):
    cart = request.session.get('cart', {})

    if str(product_id) in cart:
        del cart[str(product_id)]
        request.session['cart'] = cart
        messages.success(request, "Товар успешно удален из корзины.")
    else:
        messages.error(request, "Товар не найден в корзине.")

    return redirect('MainWepSite:view_cart')

# Обновление количества товара в корзине
def update_cart_quantity(request, product_id):
    if request.method == "POST":
        try:
            quantity = int(request.POST.get('quantity', 1))

            if quantity <= 0:
                messages.error(request, "Количество товаров должно быть больше нуля.")
            else:
                cart = request.session.get('cart', {})
                if str(product_id) in cart:
                    cart[str(product_id)] = quantity
                    request.session['cart'] = cart
                    messages.success(request, "Количество товаров в корзине обновлено успешно.")
                else:
                    messages.error(request, "Товар не найден в корзине.")

        except ValueError:
            messages.error(request, "Неверное количество товаров.")

    return redirect('MainWepSite:view_cart')

def _add_product_to_session_cart(request, product_id, quantity, variant_id=None):
    cart = request.session.get('cart', {})

    if str(product_id) in cart:
        cart_item = cart[str(product_id)]
        cart_item['quantity'] += quantity
        if variant_id:
            cart_item['variant_id'] = variant_id
    else:
        cart_item = {'quantity': quantity}
        if variant_id:
            cart_item['variant_id'] = variant_id

    cart[str(product_id)] = cart_item
    request.session['cart'] = cart








# Добавление товара в корзину
def add_to_cart(request, product_id):
    if request.method == "POST":
        try:
            product = get_object_or_404(Product, id=product_id)
            variant_id = request.POST.get('product_variant')
            quantity = int(request.POST.get('quantity', 1))

            if variant_id:
                variant = get_object_or_404(ProductVariant, id=variant_id)
            else:
                # Если вариант не выбран, используйте основной продукт
                variant = product

            _add_product_to_session_cart(request, variant.id, quantity, variant_id)  # Передайте variant_id
            return redirect('MainWepSite:view_cart')
        except (ValueError, Product.DoesNotExist, ProductVariant.DoesNotExist):
            messages.error(request, "Товар не найден")
            return redirect('MainWepSite:view_cart')


# Добавление товара в корзину без перенаправления
def just_add_to_cart(request, product_id):
    try:
        product = get_object_or_404(Product, id=product_id)
        quantity = int(request.POST.get('quantity', 1))
        _add_product_to_session_cart(request, product_id, quantity)
        return redirect(request.META['HTTP_REFERER'])
    except ValueError:
        return HttpResponseBadRequest("Неверное количество товаров")
    except Product.DoesNotExist:
        messages.error(request, "Товар не найден")
        return redirect(request.META['HTTP_REFERER'])







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
                price=product.price  # Предположим, у Product есть поле price
            )
            order_item.save()

        # Очищаем корзину в сессии
        request.session['cart'] = {}

        return redirect('MainWepSite:order_detail', order_id=new_order.id)

    return render(request, 'create_order.html')










# Детали заказа
def order_detail(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    order_items = OrderItem.objects.filter(order=order)

    items = []
    for item in order_items:
        items.append({
            'product': item.product,
            'quantity': item.quantity,
            'total': item.product.price * item.quantity
        })

    return render(request, 'order_detail.html', {'order': order, 'items': items})



# Список всех заказов
def order_list(request):
    orders = Order.objects.all()
    return render(request, 'order_list.html', {'orders': orders})


from django.http import JsonResponse


def like_product(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    wishlist, created = Wishlist.objects.get_or_create(user=request.user)

    if product in wishlist.products.all():
        # Если товар уже в списке желаний, то удаляем его
        wishlist.remove_product(product)
        product.likes -= 1
        product.save()
        liked = False
    else:
        # Добавляем товар в список желаний и увеличиваем количество "лайков"
        wishlist.add_product(product)
        product.likes += 1
        product.save()
        liked = True

    return JsonResponse({'liked': liked, 'total_likes': product.likes})

def wishlist_view(request):
    wishlist = Wishlist.objects.get(user=request.user)
    products = wishlist.products.all()
    return render(request, 'wishlist.html', {'products': products})



from django.shortcuts import redirect


def remove_from_wishlist(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    wishlist = Wishlist.objects.get(user=request.user)
    wishlist.remove_product(product)
    return redirect('MainWepSite:wishlist_view')  # замените 'path_to_some_view' на соответствующий путь

