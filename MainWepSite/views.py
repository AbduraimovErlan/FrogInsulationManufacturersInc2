from .models import Product, Category, Brand, Order
from .models import ProductImage  # Импортируйте ваши модели
from django.shortcuts import render, redirect, get_object_or_404
from .models import OrderItem
from django.http import JsonResponse
from django.db.models import Q


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
    main_image = ProductImage.objects.filter(product=product, is_main=True).first()
    context = {'product': product, 'main_image': main_image}
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

        return redirect('order_detail', order_id=new_order.id)

    return render(request, 'create_order.html')




def add_to_cart(request, product_id):
    product = get_object_or_404(Product, id=product_id)

    # Получаем текущую корзину из сессии
    cart = request.session.get('cart', {})

    # Если товар уже в корзине, увеличиваем количество
    if product_id in cart:
        cart[product_id] += 1
    else:
        # Добавляем товар в корзину
        cart[product_id] = 1

    # Сохраняем корзину обратно в сессию
    request.session['cart'] = cart

    return JsonResponse({'status': 'OK'})




# Детали заказа
def order_detail(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    return render(request, 'order_detail.html', {'order': order})


# Список всех заказов
def order_list(request):
    orders = Order.objects.all()
    return render(request, 'order_list.html', {'orders': orders})




