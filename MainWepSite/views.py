from _decimal import Decimal
from django.contrib import messages
from .models import Product, Category, Brand, ProductSize, Size
from .models import ProductImage  # Импортируйте ваши модели
from django.shortcuts import render, redirect, get_object_or_404
from django.db.models import Q
from MainWepSite.models import Product, CartItem
from .models import ProductSize
from django.shortcuts import get_list_or_404
from django.http import JsonResponse


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
    category_slug = request.GET.get('category.html', None)
    brand_slug = request.GET.get('brand', None)
    filter_category = request.GET.get('filter_category', '0')  # по умолчанию '0'
    filter_brand = request.GET.get('filter_brand', '0')  # по умолчанию '0'

    if filter_category == '1' and category_slug:
        products = products.filter(category__slug=category_slug)

    if filter_brand == '1' and brand_slug:
        products = products.filter(brand__slug=brand_slug)

    print(f"filter_category = {filter_category}, category_slug = {category_slug}")
    print(f"filter_brand = {filter_brand}, brand_slug = {brand_slug}")

    return render(request, 'ForMainWepSite/index.html', {
        'products': products,
        'categories': categories,
        'brands': brands,
    })


def view_cart(request, size=None):
    cart = request.session.get('cart', {})
    cart_items = []
    total_price = 0
    skus_to_remove = []  # list to hold skus that should be removed

    for sku, item_data in list(cart.items()):
        try:
            product_id = item_data['product_id']
            product = Product.objects.get(id=product_id)

            # Используем SKU для получения объекта ProductSize
            product_size = ProductSize.objects.get(product=product, size_sku=sku)
            price = product_size.size_price
            sku_value = product_size.size_sku

            quantity = item_data['quantity']
            total_price += price * quantity

            cart_items.append({
                'product': product,
                'quantity': quantity,
                'price': price,
                'size': product_size.size.value,
                'total': price * quantity,
                'sku': sku_value,
                'product_number': item_data.get('product_number'),
                'package_type': item_data.get('package_type')
            })
        except Product.DoesNotExist:
            messages.warning(request, f"Product with SKU {sku} was removed or does not exist.")
            skus_to_remove.append(sku)
        except ProductSize.DoesNotExist:
            messages.warning(request, f"Product size with SKU {sku} not found for product {product.name}.")
            skus_to_remove.append(sku)

    for sku in skus_to_remove:  # Remove skus after iterating through the cart
        del cart[sku]

    request.session['cart'] = cart

    return render(request, 'ForMainWepSite/view_cart.html', {
        'cart_items': cart_items,
        'total_price': total_price
    })




def _add_product_to_session_cart(request, product_id, quantity, selected_package_type, selected_zeston, selected_sku, selected_size_desc):
    cart = request.session.get('cart', {})

    # Попытка получить продукт по ID
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        raise ValueError(f"Product with ID {product_id} does not exist.")

    # Попытка получить конкретный размер продукта на основе предоставленных параметров
    try:
        product_size = ProductSize.objects.get(product=product, package_type=selected_package_type,
                                               product_number=selected_zeston, size_sku=selected_sku,
                                               size__value=selected_size_desc)
        price = product_size.size_price
    except ProductSize.DoesNotExist:
        raise ValueError(f"Combination of product ID {product_id}, package type {selected_package_type}, zeston {selected_zeston}, size sku {selected_sku}, and size description {selected_size_desc} does not exist.")

    # Обновление или добавление продукта в корзину
    cart_data = {
        'product_id': product_id,
        'quantity': cart.get(selected_sku, {}).get('quantity', 0) + quantity,  # обновление количества, если продукт уже в корзине
        'price': str(price),
        'sku': selected_sku,
        'product_number': product_size.product_number,  # добавлено
        'package_type': selected_package_type,
        'zeston': selected_zeston,
        'size_desc': selected_size_desc
    }
    cart[selected_sku] = cart_data


    # Сохранение обновленной корзины в сессии
    request.session['cart'] = cart






# Add product to cart
def add_to_cart(request, product_id):
    if request.method == "POST":
        try:
            product = get_object_or_404(Product, id=product_id)
            quantity = int(request.POST.get('quantity', 1))
            selected_size_desc = request.POST.get('size_desc')
            selected_package_type = request.POST.get('packageType')
            selected_sku = request.POST.get('size_sku')
            selected_zeston = request.POST.get('zeston')

            # Проверим, существует ли сочетание
            product_size = ProductSize.objects.get(product=product, package_type=selected_package_type, product_number=selected_zeston, size_sku=selected_sku, size__value=selected_size_desc)


            _add_product_to_session_cart(request, product.id, quantity, selected_package_type, selected_zeston,
                                         selected_sku, selected_size_desc)
            return redirect('MainWepSite:view_cart')

        except ProductSize.MultipleObjectsReturned:
            messages.error(request, "Multiple matching product sizes found. Please contact.html support.")
            return redirect('MainWepSite:view_cart')
        except ValueError as e:
            messages.error(request, str(e))
            return redirect('MainWepSite:view_cart')
        except Product.DoesNotExist:
            messages.error(request, "Product not found.")
            return redirect('MainWepSite:index')
        except ProductSize.DoesNotExist:
            messages.error(request, "Selected product size or SKU combination does not exist.")
            return redirect('MainWepSite:view_cart')
    else:
        messages.warning(request, "Invalid request type.")
        return redirect('MainWepSite:view_cart')


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
    # print(f"SKU: {sku}")
    if request.method == "POST":
        cart = request.session.get('cart', {})

        try:
            # Получаем новое количество товаров из POST-запроса
            new_quantity = int(request.POST.get('quantity', 1))

            # Если sku не существует в корзине, выводим сообщение об ошибке
            sku_str = str(sku)
            if sku_str not in cart:
                messages.error(request, "Product not found in cart.")
                return redirect('MainWepSite:view_cart')

            # Проверяем, что количество товаров больше нуля
            if new_quantity <= 0:
                messages.error(request, "Quantity must be greater than zero.")
                return redirect('MainWepSite:view_cart')

            # Обновляем количество товаров в корзине
            cart[sku_str]['quantity'] = new_quantity


            # Обновляем состояние корзины в сессии
            request.session['cart'] = cart
            print(f"Cart after updating quantity: {cart}")


            # Выводим сообщение об успешном обновлении количества товаров
            messages.success(request, "Quantity updated successfully.")

        except ValueError:
            # Если введено неверное количество товаров (например, не целое число),
            # выводим сообщение об ошибке
            messages.error(request, "Invalid quantity.")


    return redirect('MainWepSite:view_cart')



def clear_cart(request):
    # Очистка корзины в сессии
    request.session['cart'] = {}
    messages.success(request, "Корзина была успешно очищена.")
    return redirect('MainWepSite:view_cart')




def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)
    main_image = product.main_image  # Получение главного изображения напрямую из продукта
    additional_images = product.images.all()  # Это дополнительные изображения
    product_sizes = ProductSize.objects.filter(product=product)  # Получаем все размеры для данного продукта

    unique_package_types = ProductSize.objects.filter(product=product).values_list('package_type', flat=True).distinct()

    context = {
        'product': product,
        'main_image': main_image,
        'additional_images': additional_images,
        'product_sizes': product_sizes,  # Добавляем размеры продукта в контекст
        'unique_package_types': unique_package_types

    }

    return render(request, 'ForMainWepSite/product_detail.html', context)






def update_based_on_package(request, product_id, package_type):
    sizes_p = get_list_or_404(ProductSize, product_id=product_id, package_type=package_type)
    sizes_data = [
        {
            "id": size.size.id,
            "value": size.size.value,
            "price": size.size_price,
            "sku": size.size_sku,
            "product_number": size.product_number,
            "package_type": size.package_type
        }
        for size in sizes_p
    ]
    return JsonResponse(sizes_data, safe=False)

def update_based_on_product_number(request, product_id, product_number, package_type):
    sizes_n = ProductSize.objects.filter(product_id=product_id, product_number=product_number, package_type=package_type)
    sizes_data = [
        {
            "id": size.size.id,
            "value": size.size.value,
            "price": size.size_price,
            "sku": size.size_sku,
            "product_number": size.product_number,
            "package_type": size.package_type
        }
        for size in sizes_n
    ]
    return JsonResponse(sizes_data, safe=False)

def update_based_on_sku(request, product_id, size_sku):
    sizes_s = ProductSize.objects.filter(product_id=product_id, size_sku=size_sku)
    sizes_data = [
        {
            "id": size.size.id,
            "value": size.size.value,
            "price": size.size_price,
            "sku": size.size_sku,
            "product_number": size.product_number,
            "package_type": size.package_type
        }
        for size in sizes_s
    ]
    return JsonResponse(sizes_data, safe=False)


def update_based_on_size(request, product_id, size_value):
    sizes_v = ProductSize.objects.filter(product_id=product_id, size__value=size_value)
    sizes_data = [
        {
            "id": size.size.id,
            "value": size.size.value,
            "price": size.size_price,
            "sku": size.size_sku,
            "product_number": size.product_number,
            "package_type": size.package_type
        }
        for size in sizes_v
    ]
    return JsonResponse(sizes_data, safe=False)


















# Страница категории
def category_detail(request, slug):
    category = get_object_or_404(Category, slug=slug)
    products = Product.objects.filter(category=category)
    return render(request, 'ForMainWepSite/category_detail.html', {'category.html': category, 'products': products})

# Страница бренда
def brand_detail(request, slug):
    brand = get_object_or_404(Brand, slug=slug)
    products = Product.objects.filter(brand=brand)
    return render(request, 'ForMainWepSite/brand_detail.html', {'brand': brand, 'products': products})











# @login_required
# def take_order_by_operational_manager(request, order_id):
#     order = get_object_or_404(Order, id=order_id)
#     employee = request.user.mainofficeemployee
#     if isinstance(employee, OperationalManager) and order.operational_manager is None:
#         order.operational_manager = employee
#         order.save()
#         messages.success(request, "Заказ успешно взят!")
#     else:
#         messages.warning(request, "Заказ уже взят другим менеджером или вы не являетесь операционным менеджером.")
#     return redirect('orders:operator_order_list')  # замените на ваш URL
#
#









