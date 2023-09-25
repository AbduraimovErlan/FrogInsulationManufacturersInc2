from django.test import TestCase

# Create your tests here.



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


def index(request):
    # Получение значения параметра 'search' из GET-запроса (если он есть)
    search_query = request.GET.get('search', '')

    # Если есть поисковый запрос, фильтруем продукты по имени
    if search_query:
        products = Product.objects.filter(name__icontains=search_query)
    else:
        # В противном случае, выводим все продукты
        products = Product.objects.all()

    # Загружаем все категории и бренды из базы данных
    categories = Category.objects.all()
    brands = Brand.objects.all()

    # Фильтрация продуктов по категории и бренду
    category_slug = request.GET.get('category', None)
    brand_slug = request.GET.get('brand', None)

    # Получение параметров 'filter_category' и 'filter_brand' из GET-запроса (по умолчанию '0')
    filter_category = request.GET.get('filter_category', '0')
    filter_brand = request.GET.get('filter_brand', '0')

    # Если параметр 'filter_category' равен '1' и указан слаг категории, фильтруем продукты по категории
    if filter_category == '1' and category_slug:
        products = products.filter(category__slug=category_slug)

    # Если параметр 'filter_brand' равен '1' и указан слаг бренда, фильтруем продукты по бренду
    if filter_brand == '1' and brand_slug:
        products = products.filter(brand__slug=brand_slug)

    # Выводим фильтры и результаты на главной странице
    return render(request, 'index.html', {
        'products': products,  # Список отфильтрованных продуктов
        'categories': categories,  # Список всех категорий
        'brands': brands,  # Список всех брендов
    })




def product_detail(request, slug):
    # Получение объекта продукта по его slug, или возврат страницы 404, если продукт не найден
    product = get_object_or_404(Product, slug=slug)

    # Определение главного изображения продукта
    if product.image:
        main_image = product.image
    else:
        # Если у продукта нет указанного главного изображения, попытаемся найти его в ProductImage
        main_image_obj = ProductImage.objects.filter(product=product, is_main=True).first()
        if main_image_obj:  # Если есть указанное главное изображение в ProductImage
            main_image = main_image_obj.image
        else:
            # Если главное изображение не указано, выберем первое изображение из ProductImage (если оно существует)
            first_image_obj = ProductImage.objects.filter(product=product).first()
            main_image = first_image_obj.image if first_image_obj else None

    # Получение дополнительных изображений, исключая главное изображение
    additional_images = ProductImage.objects.filter(product=product).exclude(image=main_image)

    # Получение вариантов продукта
    variants = product.variants.all()

    # Создание контекста для передачи данных в шаблон 'product_detail.html'
    context = {
        'product': product,  # Основной объект продукта
        'main_image': main_image,  # Главное изображение продукта
        'additional_images': additional_images,  # Дополнительные изображения продукта
        'variants': variants,  # Варианты продукта
    }

    # Отображение страницы с информацией о продукте
    return render(request, 'product_detail.html', context)

def category_detail(request, slug):
    # Получение объекта категории по его slug, или возврат страницы 404, если категория не найдена
    category = get_object_or_404(Category, slug=slug)

    # Получение продуктов, связанных с данной категорией
    products = Product.objects.filter(category=category)

    # Отображение страницы с информацией о категории и связанных продуктах
    return render(request, 'category_detail.html', {'category': category, 'products': products})



def brand_detail(request, slug):
    # Получение объекта бренда по его slug, или возврат страницы 404, если бренд не найден
    brand = get_object_or_404(Brand, slug=slug)

    # Получение продуктов, связанных с данным брендом
    products = Product.objects.filter(brand=brand)

    # Отображение страницы с информацией о бренде и связанных продуктах
    return render(request, 'brand_detail.html', {'brand': brand, 'products': products})


def view_cart(request):
    # Получение данных корзины из сессии
    cart = request.session.get('cart', {})
    cart_items = []  # Список для хранения элементов корзины
    total_price = 0  # Общая стоимость товаров в корзине

    # Перебор товаров в корзине
    for product_id, item_data in cart.items():
        try:
            product_id = int(product_id)
            product = Product.objects.get(id=product_id)

            # Проверка наличия 'variant_id' в 'item_data' перед его получением
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
                # Если вариант не выбран, используется основной продукт
                variant = product
                attributes = []  # Основной продукт не имеет атрибутов
                price = product.price

            total_price += price * quantity  # Расчет общей стоимости для данного товара
            cart_items.append({
                'product': product,
                'variant': variant,
                'attributes': attributes,
                'quantity': quantity,
                'total': price * quantity  # Общая стоимость данного товара
            })
        except (ValueError, Product.DoesNotExist, ProductVariant.DoesNotExist):
            # Обработка случаев, когда товар с указанным ID не существует или был удален
            messages.warning(request, f"Товар с ID {product_id} был удален или не существует.")
            del cart[str(product_id)]  # Удаление недопустимого элемента из корзины

    request.session['cart'] = cart  # Обновление корзины в сессии

    # Отображение страницы с информацией о корзине и элементах корзины
    return render(request, 'view_cart.html', {
        'cart_items': cart_items,
        'total_price': total_price  # Общая стоимость всех товаров в корзине
    })


def remove_from_cart(request, product_id):
    # Получаем текущее состояние корзины из сессии
    cart = request.session.get('cart', {})

    # Проверяем, существует ли товар с указанным product_id в корзине
    if str(product_id) in cart:
        # Если товар существует, удаляем его из корзины
        del cart[str(product_id)]
        # Обновляем состояние корзины в сессии
        request.session['cart'] = cart
        # Выводим сообщение об успешном удалении товара
        messages.success(request, "Товар успешно удален из корзины.")
    else:
        # Если товар не найден в корзине, выводим сообщение об ошибке
        messages.error(request, "Товар не найден в корзине.")

    # Перенаправляем пользователя на страницу просмотра корзины
    return redirect('MainWepSite:view_cart')



def update_cart_quantity(request, product_id):
    if request.method == "POST":
        try:
            # Получаем новое количество товаров из POST-запроса
            quantity = int(request.POST.get('quantity', 1))

            # Проверяем, что количество товаров больше нуля
            if quantity <= 0:
                messages.error(request, "Количество товаров должно быть больше нуля.")
            else:
                # Получаем текущее состояние корзины из сессии
                cart = request.session.get('cart', {})
                # Проверяем, существует ли товар с указанным product_id в корзине
                if str(product_id) in cart:
                    # Обновляем количество товаров в корзине
                    cart[str(product_id)] = quantity
                    # Обновляем состояние корзины в сессии
                    request.session['cart'] = cart
                    # Выводим сообщение об успешном обновлении количества товаров
                    messages.success(request, "Количество товаров в корзине обновлено успешно.")
                else:
                    # Если товар не найден в корзине, выводим сообщение об ошибке
                    messages.error(request, "Товар не найден в корзине.")

        except ValueError:
            # Если введено неверное количество товаров (например, не целое число),
            # выводим сообщение об ошибке
            messages.error(request, "Неверное количество товаров.")

    # Перенаправляем пользователя на страницу просмотра корзины
    return redirect('MainWepSite:view_cart')


def _add_product_to_session_cart(request, product_id, quantity, variant_id=None):
    # Получаем текущее состояние корзины из сессии
    cart = request.session.get('cart', {})

    if str(product_id) in cart:
        # Если товар уже есть в корзине, увеличиваем количество
        cart_item = cart[str(product_id)]
        cart_item['quantity'] += quantity
        if variant_id:
            cart_item['variant_id'] = variant_id
    else:
        # Если товара нет в корзине, создаем новую запись
        cart_item = {'quantity': quantity}
        if variant_id:
            cart_item['variant_id'] = variant_id

    # Обновляем состояние корзины в сессии
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
                # Если вариант не выбран, используем основной продукт
                variant = product

            # Вызываем функцию _add_product_to_session_cart для добавления товара в корзину
            _add_product_to_session_cart(request, variant.id, quantity, variant_id)

            # Перенаправляем пользователя на страницу просмотра корзины
            return redirect('MainWepSite:view_cart')
        except (ValueError, Product.DoesNotExist, ProductVariant.DoesNotExist):
            messages.error(request, "Товар не найден")
            return redirect('MainWepSite:view_cart')


# Добавление товара в корзину без перенаправления
def just_add_to_cart(request, product_id):
    try:
        product = get_object_or_404(Product, id=product_id)
        quantity = int(request.POST.get('quantity', 1))

        # Вызываем функцию _add_product_to_session_cart для добавления товара в корзину
        _add_product_to_session_cart(request, product_id, quantity)

        # Перенаправляем пользователя обратно на предыдущую страницу
        return redirect(request.META['HTTP_REFERER'])
    except ValueError:
        return HttpResponseBadRequest("Неверное количество товаров")
    except Product.DoesNotExist:
        messages.error(request, "Товар не найден")
        return redirect(request.META['HTTP_REFERER'])


def create_order(request):
    if request.method == "POST":
        # Получаем данные о клиенте из формы
        customer_name = request.POST.get('customer_name')
        customer_email = request.POST.get('customer_email')
        customer_phone = request.POST.get('customer_phone')

        # Создаем новый заказ
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

            # Создаем запись о товаре в заказе
            order_item = OrderItem(
                order=new_order,
                product=product,
                quantity=quantity,
                price=product.price  # Предположим, у Product есть поле price
            )
            order_item.save()

        # Очищаем корзину в сессии после оформления заказа
        request.session['cart'] = {}

        # Перенаправляем пользователя на страницу с деталями заказа
        return redirect('MainWepSite:order_detail', order_id=new_order.id)

    # Если запрос не является POST-запросом, отображаем страницу создания заказа
    return render(request, 'templates_for_orders/create_order.html')


# Детали заказа
def order_detail(request, order_id):
    # Получаем объект заказа или возвращаем страницу с ошибкой 404, если заказ не найден
    order = get_object_or_404(Order, id=order_id)

    # Получаем все товары, связанные с этим заказом
    order_items = OrderItem.objects.filter(order=order)

    # Создаем пустой список для хранения информации о товарах в заказе
    items = []

    # Проходимся по товарам в заказе и создаем словарь с информацией о каждом товаре
    for item in order_items:
        items.append({
            'product': item.product,  # Объект товара
            'quantity': item.quantity,  # Количество товара в заказе
            'total': item.product.price * item.quantity  # Общая стоимость товара в заказе
        })

    # Отправляем информацию о заказе и его товарах на страницу order_detail.html для отображения
    return render(request, 'order_detail.html', {'order': order, 'items': items})



def order_list(request):
    # Получаем список всех заказов
    orders = Order.objects.all()

    # Отправляем список заказов на страницу order_list.html для отображения
    return render(request, 'order_list.html', {'orders': orders})



from django.http import JsonResponse


def like_product(request, product_id):
    # Получаем объект товара или возвращаем 404 ошибку, если товар не найден
    product = get_object_or_404(Product, id=product_id)

    # Получаем или создаем список желаний пользователя
    wishlist, created = Wishlist.objects.get_or_create(user=request.user)

    # Проверяем, находится ли товар уже в списке желаний
    if product in wishlist.products.all():
        # Если товар уже в списке желаний, то удаляем его
        wishlist.remove_product(product)
        # Уменьшаем количество "лайков" у товара на 1
        product.likes -= 1
        # Сохраняем изменения товара
        product.save()
        # Устанавливаем переменную liked в False, чтобы указать, что товар был удален из списка желаний
        liked = False
    else:
        # Если товар не находится в списке желаний, то добавляем его
        wishlist.add_product(product)
        # Увеличиваем количество "лайков" у товара на 1
        product.likes += 1
        # Сохраняем изменения товара
        product.save()
        # Устанавливаем переменную liked в True, чтобы указать, что товар был добавлен в список желаний
        liked = True

    # Возвращаем JSON-ответ, содержащий информацию о действии пользователя
    return JsonResponse({'liked': liked, 'total_likes': product.likes})


# Просмотр списка желаний
def wishlist_view(request):
    # Получаем список желаний для текущего пользователя
    wishlist = Wishlist.objects.get(user=request.user)
    # Получаем все товары в списке желаний
    products = wishlist.products.all()
    # Отправляем список товаров в шаблон для отображения
    return render(request, 'wishlist.html', {'products': products})

# Удаление товара из списка желаний
def remove_from_wishlist(request, product_id):
    # Получаем объект товара или возвращаем 404 ошибку, если товар не найден
    product = get_object_or_404(Product, id=product_id)
    # Получаем список желаний текущего пользователя
    wishlist = Wishlist.objects.get(user=request.user)
    # Удаляем товар из списка желаний
    wishlist.remove_product(product)
    # После удаления товара, перенаправляем пользователя обратно на страницу списка желаний
    return redirect('MainWepSite:wishlist_view')  # Здесь замените 'MainWepSite:wishlist_view' на соответствующий URL-путь к представлению списка желаний
