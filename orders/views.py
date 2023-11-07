from _decimal import InvalidOperation

from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from django.views.generic import ListView, View
from decimal import Decimal
from django.contrib.auth.decorators import login_required
from MainOffice.models import OperationalManager, President, AccountsReceivableManager, AccountsReceivable, \
    AccountsPayable
from Warehouse1.models import Driver, WarehouseSupervisor
from orders.forms import OrderForm, OrderItemForm, OrderItemFormSize
from orders.models import Order, OrderStatus, OrderStatusHistory, OrderItem, Notification
from MainWepSite.models import Product, ProductSize, Size
from django.contrib import messages
from django.http import JsonResponse, HttpResponseRedirect


def create_order(request):
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            order = form.save()

            cart = request.session.get('cart', {})
            total_price = Decimal(0)

            for sku, item_data in cart.items():
                try:
                    product_id = item_data['product_id']
                    product = Product.objects.get(id=product_id)
                    product_size = ProductSize.objects.get(product=product, size_sku=sku)  # Получаем размер продукта по SKU
                    price_at_time_of_purchase = Decimal(item_data['price'])
                    quantity = item_data['quantity']
                    total_price += price_at_time_of_purchase * quantity

                    order_item = OrderItem(
                        order=order,
                        product=product,
                        product_size=product_size,  # Указываем размер продукта
                        quantity=quantity,
                        price_at_time_of_purchase=price_at_time_of_purchase,
                        order_sku=sku,
                    )
                    order_item.save()

                except (Product.DoesNotExist, ProductSize.DoesNotExist) as e:
                    messages.warning(request, str(e))
                    del cart[sku]

            request.session['cart'] = {}
            return redirect('orders:customer_order_detail', order_id=order.id)

    else:
        form = OrderForm()

    return render(request, 'templates_for_orders/create_order.html', {'form': form})


class BaseOrderDetailView(View):
    template_name = 'templates_for_orders/base_order_detail.html'

    def get(self, request, order_id):
        self.order = get_object_or_404(Order, id=order_id)
        order_items = OrderItem.objects.filter(order=self.order)
        context = self.get_context_data(order=self.order, order_items=order_items)
        return render(request, self.template_name, context)

    def get_context_data(self, **kwargs):
        return kwargs


class CustomerOrderDetailView(BaseOrderDetailView):
    template_name = 'templates_for_orders/customer_order_detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        order_items = OrderItem.objects.filter(order=self.order)
        items = []

        for item in order_items:
            items.append({
                'id': item.id,
                'product': item.product,
                'quantity': item.quantity,
                'unit_price': item.price_at_time_of_purchase,  # добавлено
                'total': item.get_total_price(),
                'order_sku': item.order_sku,
                'product_number': item.product_size.product_number,  # добавлено
                'package_type': item.product_size.get_package_type_display(),  # добавлено
                'size': item.product_size.size.value  # добавлено
            })

        status_history = OrderStatusHistory.objects.filter(order=self.order).order_by('-timestamp')
        context['items'] = items
        context['status_history'] = status_history

        # Добавляем новую информацию о заказе
        context['address_line1'] = self.order.address_line1
        context['address_line2'] = self.order.address_line2
        context['city'] = self.order.city
        context['state'] = self.order.state
        context['country'] = self.order.country
        context['postal_code'] = self.order.postal_code
        context['additional_info'] = self.order.additional_info
        context['total_amount'] = self.order.get_total_amount()


        return context



class OperatorOrderDetailView(BaseOrderDetailView):
    template_name = 'templates_for_orders/operator_order_detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        order_items = OrderItem.objects.filter(order=self.order)
        items = []

        for item in order_items:
            items.append({
                'id': item.id,
                'product': item.product,
                'quantity': item.quantity,
                'unit_price': item.price_at_time_of_purchase,  # добавлено
                'total': item.get_total_price(),
                'order_sku': item.order_sku,
                'product_number': item.product_size.product_number,  # добавлено
                'package_type': item.product_size.get_package_type_display(),  # добавлено
                'size': item.product_size.size.value  # добавлено
            })


        context['items'] = items
        context['status_choices'] = OrderStatus.choices  # Добавляем список статусов в контекст

        # Добавляем новую информацию о заказе
        context['address_line1'] = self.order.address_line1
        context['address_line2'] = self.order.address_line2
        context['city'] = self.order.city
        context['state'] = self.order.state
        context['country'] = self.order.country
        context['postal_code'] = self.order.postal_code
        context['additional_info'] = self.order.additional_info
        context['total_amount'] = self.order.get_total_amount()

        return context

    def post(self, request, order_id):
        self.order = get_object_or_404(Order, id=order_id)
        new_status = request.POST.get('status')
        if new_status in [choice[0] for choice in OrderStatus.choices]:
            if new_status == OrderStatus.OPERATOR_REVIEW:
                self.order.process_in_office(request.user)
            else:
                self.order.change_status(new_status)
            messages.success(request, f"Order status changed to {new_status}.")
        return redirect('orders:operator_order_detail', order_id=self.order.id)

@login_required
def edit_order_address(request, order_id, source="operator"):
    order = get_object_or_404(Order, id=order_id)

    if request.method == "POST":
        form = OrderForm(request.POST, instance=order)
        if form.is_valid():
            form.save()
            messages.success(request, "Order address updated successfully.")

            if source == 'warehouse':
                return redirect('orders:warehouse_order_detail', order_id=order.id)
            elif source == 'driver':
                return redirect('orders:driver_order_detail', order_id=order.id)
            else:  # по умолчанию 'operator'
                return redirect('orders:operator_order_detail', order_id=order.id)

    else:
        form = OrderForm(instance=order)

    return render(request, 'templates_for_orders/edit_order_address.html', {'form': form, 'order': order})

@login_required
def edit_order_item(request, order_id, source):
    order_item = get_object_or_404(OrderItem, id=order_id)

    if request.method == "POST":
        # Updating quantity for OrderItem
        try:
            new_quantity = int(request.POST.get('quantity'))
            order_item.quantity = new_quantity
        except ValueError:
            messages.error(request, "Invalid quantity value.")
            return render(request, 'templates_for_orders/edit_order_item.html', {'order_item': order_item})

        # Updating size_price for associated ProductSize
        try:
            new_size_price = Decimal(request.POST.get('size_price'))
            order_item.product_size.size_price = new_size_price
            order_item.product_size.save()
        except (ValueError, InvalidOperation):
            messages.error(request, "Invalid size_price value.")
            return render(request, 'templates_for_orders/edit_order_item.html', {'order_item': order_item})

        order_item.save()
        messages.success(request, "Order item updated successfully.")

        if source == 'warehouse':
            return redirect('orders:warehouse_order_detail', order_id=order_item.order.id)
        elif source == 'driver':
            return redirect('orders:driver_order_detail', order_id=order_item.order.id)
        else:  # Default to operator
            return redirect('orders:operator_order_detail', order_id=order_item.order.id)

    context = {
        'order_item': order_item
    }

    return render(request, 'templates_for_orders/edit_order_item.html', context)











@login_required
def delete_order_item(request, order_id):
    order_item = get_object_or_404(OrderItem, id=order_id)

    if request.method == "POST":
        order_item.delete()
        messages.success(request, "Order item deleted successfully.")

        # Возврат на предыдущую страницу
        referer = request.META.get('HTTP_REFERER')
        return HttpResponseRedirect(referer)





@login_required
def return_order_to_processing_view(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    if order.status == OrderStatus.CANCELED:
        order.change_status(OrderStatus.RECEIVED)
        messages.success(request, "Заказ возвращен к оператору для обработки.")
    return redirect('orders:operator_order_list')

@login_required
def cancel_order(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    order.cancel_order()
    messages.success(request, "Заказ успешно отменен.")
    return redirect('orders:own_operator_order_list')


class CanceledOrderListView(ListView):
    model = Order
    template_name = 'templates_for_orders/canceled_order_list.html'

    def get_queryset(self):
        return Order.objects.filter(status=OrderStatus.CANCELED)


# Warehouse

@login_required
def pass_order_to_warehouse(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    if order.status != OrderStatus.OPERATOR_REVIEW:
        messages.error(request, "Заказ еще не обработан в офисе.")
        return redirect('orders:operator_order_detail', order_id=order.id)

    order.pass_to_warehouse()
    messages.success(request, "Заказ успешно передан на склад.")
    return redirect('orders:own_operator_order_list')






class BaseOrderListView(ListView):
    model = Order
    template_name = 'templates_for_orders/base_order_list.html'

    def get_queryset(self):
        return Order.objects.all()


class OperatorOrderListView(BaseOrderListView):
    template_name = 'templates_for_orders/operator_order_list.html'

    def get_queryset(self):
        return Order.objects.filter(status=OrderStatus.RECEIVED)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['loaded_drivers'] = Driver.objects.filter(truck_fully_loaded=True)
        context['all_drivers'] = Driver.objects.all()
        return context






class BaseAddProductView(View):

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, self.get_context_data())

    def get_context_data(self, **kwargs):
        context = {
            'order': self.order,
            'products': Product.objects.all(),
            'unique_package_types': ProductSize.objects.values_list('package_type', flat=True).distinct(),
            'product_number': ProductSize.objects.values_list('product_number', flat=True).distinct(),
            'size_sku': ProductSize.objects.values_list('size_sku', flat=True).distinct(),
            'size_price': ProductSize.objects.values_list('size_price', flat=True).distinct(),
        }
        context.update(kwargs)
        return context

    def dispatch(self, request, *args, **kwargs):
        self.order = get_object_or_404(Order, id=kwargs['order_id'])
        print(f"Заказ ID: {self.order.id} {self.order}")
        return super().dispatch(request, *args, **kwargs)

    def get_success_url(self):
        return self.request.path

    def post(self, request, *args, **kwargs):
        # Получите данные из request.POST напрямую
        product_id = request.POST.get('product')
        package_type = request.POST.get('packageType')
        product_number = request.POST.get('zeston')
        size_sku = request.POST.get('size_sku')
        size_id = request.POST.get('size_desc')  # предполагая, что поле 'value' Size является уникальным
        quantity = request.POST.get('quantity')

        # Валидация (это просто базовая валидация; вы можете добавить больше в зависимости от ваших требований)
        if not all([product_id, package_type, product_number, size_sku, size_id, quantity]):
            messages.error(request, "Пожалуйста, заполните все поля.")
            return render(request, self.template_name, self.get_context_data())

        # Проверка на уникальность SKU в сессии
        session_key = f'order_skus_{self.order.id}'
        session_skus = request.session.get(session_key, [])
        if size_sku in session_skus:
            messages.error(request,
                           "Продукт с таким SKU уже существует в этом заказе. Пожалуйста, попробуйте использовать другой SKU.")
            return render(request, self.template_name, self.get_context_data())

        # Если SKU не найден в сессии, добавляем его туда
        session_skus.append(size_sku)
        request.session[session_key] = session_skus

        # Получение объекта ProductSize на основе size_sku
        try:
            product_size = ProductSize.objects.get(size_sku=size_sku)
        except ProductSize.DoesNotExist:
            messages.error(request, "Продукт с таким SKU не найден.")
            return render(request, self.template_name, self.get_context_data())

        # Создайте объект OrderItem напрямую
        order_item = OrderItem(
            order=self.order,
            product_id=product_id,
            product_size_id=product_size.id,
            quantity=quantity
        )

        order_item.save()

        print(f"Товар {order_item.product} успешно добавлен к заказу {order_item.order.id}!")
        messages.success(request, "Товар успешно добавлен к заказу!")
        return redirect(self.get_success_url())


class NewOrderCallView(BaseAddProductView):
    template_name = 'templates_for_orders/new_order_call_add_product.html'

    def get_success_url(self):
        return reverse('orders:new_order_call_add_product', kwargs={'order_id': self.order.id})


class EditOrderCallView(BaseAddProductView):
    template_name = 'templates_for_orders/edit_order_call_add_product.html'

    def get_success_url(self):
        source = self.kwargs.get('source', 'operator')  # теперь по умолчанию используем 'operator'

        if source == 'warehouse':
            return reverse('orders:warehouse_order_detail', kwargs={'order_id': self.order.id})
        elif source == 'driver':
            return reverse('orders:driver_order_detail', kwargs={'order_id': self.order.id})
        elif source == 'operator':
            return reverse('orders:operator_order_detail', kwargs={'order_id': self.order.id})
        else:
            # Если не удалось определить источник, можете вернуть редирект на какую-либо стандартную страницу
            return reverse('orders:own_operator_order_list')



# Update this method to fetch the details from ProductSize, not Product:
from django.http import JsonResponse
from django.http import JsonResponse




def update_based_on_package_call(request, package_type):
    data = {
        'product_numbers': list(ProductSize.objects.filter(package_type=package_type).values_list('product_number', flat=True)),
        'size_skus': list(ProductSize.objects.filter(package_type=package_type).values_list('size_sku', flat=True)),
        'size_descs': list(ProductSize.objects.filter(package_type=package_type).values_list('size__value', flat=True))
    }
    return JsonResponse(data)

def update_based_on_product_number_call(request, package_type, product_number):
    data = {
        'size_skus': list(ProductSize.objects.filter(package_type=package_type, product_number=product_number).values_list('size_sku', flat=True)),
        'size_descs': list(ProductSize.objects.filter(package_type=package_type, product_number=product_number).values_list('size__value', flat=True))
    }
    return JsonResponse(data)

def update_based_on_sku_call(request, package_type, product_number, size_sku):
    data = {
        'product_numbers': list(ProductSize.objects.filter(package_type=package_type, product_number=product_number, size_sku=size_sku).values_list('product_number', flat=True)),
        'size_skus': list(ProductSize.objects.filter(package_type=package_type, product_number=product_number, size_sku=size_sku).values_list('size_sku', flat=True)),
        'size_descs': list(ProductSize.objects.filter(package_type=package_type, product_number=product_number, size_sku=size_sku).values_list('size__value', flat=True))
    }
    return JsonResponse(data)



def update_based_on_size_call(request, package_type, product_number, size_sku, size_value):
    data = {
        'product_numbers': list(ProductSize.objects.filter(package_type=package_type, product_number=product_number, size_sku=size_sku, size__value=size_value).values_list('product_number', flat=True)),
        'size_skus': list(ProductSize.objects.filter(package_type=package_type, product_number=product_number, size_sku=size_sku, size__value=size_value).values_list('size_sku', flat=True)),
        'size_descs': list(ProductSize.objects.filter(package_type=package_type, product_number=product_number, size_sku=size_sku, size__value=size_value).values_list('size__value', flat=True))
    }
    return JsonResponse(data)











from django.urls import reverse
@login_required
def operator_create_order(request):
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            order = form.save()
            # Создание нового ключа сессии для этого заказа
            request.session[f'order_skus_{order.id}'] = []
            messages.success(request, "Заказ успешно создан!")
            return redirect(reverse('orders:product_list_order', kwargs={'order_id': order.id}))
    else:
        form = OrderForm()

    return render(request, 'templates_for_orders/create_order.html', {'form': form})






from django.shortcuts import get_object_or_404, render, redirect
from django.views.generic import ListView, DetailView
from django.urls import reverse

# Список продуктов
class ProductListView(ListView):
    model = Product
    template_name = 'templates_for_orders/product_list_order.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Допустим, order_id приходит из URL, вы должны убедиться, что он захватывается в URLconf.
        context['order_id'] = self.kwargs.get('order_id')
        return context

# Представление деталей продукта с упаковкой "boxed"
class ProductDetailViewBoxed(DetailView):
    model = Product
    template_name = 'templates_for_orders/product_detail_order_boxed.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        product = get_object_or_404(Product, slug=self.kwargs.get('slug'))
        context['product'] = product
        context['sizes'] = product.sizes.all()
        context['colors'] = product.colors.all()
        context['product_sizes'] = ProductSize.objects.filter(product=product, package_type='bx')

        # Add order_id to the context
        order_id = self.kwargs.get('order_id')  # Assume that order_id is passed as a URL parameter
        context['order_id'] = order_id

        return context


# Представление деталей продукта с упаковкой "single"
class ProductDetailViewSingle(DetailView):
    model = Product
    template_name = 'templates_for_orders/product_detail_order_single.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        product = get_object_or_404(Product, slug=self.kwargs.get('slug'))
        context['product'] = product
        context['sizes'] = product.sizes.all()
        context['colors'] = product.colors.all()
        context['product_sizes'] = ProductSize.objects.filter(product=product, package_type='each')

        # Add order_id to the context
        order_id = self.kwargs.get('order_id')  # Assume that order_id is passed as a URL parameter
        context['order_id'] = order_id

        return context



# views.py

def add_product_to_order(request, product_id, size_id, order_id):
    product = get_object_or_404(Product, pk=product_id)
    product_size = get_object_or_404(ProductSize, pk=size_id)
    order = get_object_or_404(Order, pk=order_id)

    if request.method == 'POST':
        form = OrderItemFormSize(request.POST)
        if form.is_valid():
            quantity = form.cleaned_data.get('quantity')
            OrderItem.objects.create(
                order=order,
                product=product,
                product_size=product_size,
                quantity=quantity,
                price_at_time_of_purchase=product_size.size_price
            )
            messages.success(request, "Продукт успешно добавлен к заказу!")

            return redirect(reverse('orders:order_detail', kwargs={'order_id': order.id}))

    else:
        form = OrderItemFormSize(initial={'product_size': product_size.id})

    return render(request, 'templates_for_orders/add_product_to_order.html', {
        'form': form,
        'product': product,
        'product_size': product_size,
        'order': order
    })



@login_required
def process_order(request, order_id):
    order = get_object_or_404(Order, id=order_id)

    # Ваш код для обработки заказа здесь.

    messages.success(request, "Заказ успешно обработан.")
    return redirect('orders:own_operator_order_list')



@login_required
def take_order(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    user = request.user

    # Проверка, является ли пользователь сотрудником офиса
    is_office_employee = (
            President.objects.filter(user=user).exists() or
            OperationalManager.objects.filter(user=user).exists() or
            AccountsReceivableManager.objects.filter(user=user).exists() or
            AccountsReceivable.objects.filter(user=user).exists() or
            AccountsPayable.objects.filter(user=user).exists()
    )

    if is_office_employee:
        if OperationalManager.objects.filter(user=user).exists():
            order.operational_manager = OperationalManager.objects.get(user=user)
            order.change_status(OrderStatus.OPERATOR_REVIEW)  # Изменение статуса заказа
            order.save()
        elif President.objects.filter(user=user).exists():
            order.president = President.objects.get(user=user)
            order.change_status(OrderStatus.OPERATOR_REVIEW)  # Изменение статуса заказа
            order.save()
        elif AccountsReceivableManager.objects.filter(user=user).exists():
            order.accounts_receivable_manager = AccountsReceivableManager.objects.get(user=user)
            order.change_status(OrderStatus.OPERATOR_REVIEW)  # Изменение статуса заказа
            order.save()
        elif AccountsReceivable.objects.filter(user=user).exists():
            order.accounts_receivable = AccountsReceivable.objects.get(user=user)
            order.change_status(OrderStatus.OPERATOR_REVIEW)  # Изменение статуса заказа
            order.save()
        elif AccountsPayable.objects.filter(user=user).exists():
            order.accountsPayable = AccountsPayable.objects.get(user=user)
            order.change_status(OrderStatus.OPERATOR_REVIEW)  # Изменение статуса заказа
            order.save()

        # Добавьте аналогичные условия для других типов сотрудников
        messages.success(request, "Вы взяли этот заказ!")

        if order.driver:
            Notification.objects.create(
                user=order.driver.user,
                message=f"Оператор {user.username} взял заказ #{order.id}."
            )
    else:
        messages.error(request, "Вы не являетесь сотрудником офиса.")

    return redirect('orders:own_operator_order_list')
@login_required
def own_operator_order_list(request):
    user = request.user
    # Получаем все заказы, связанные с текущим пользователем, имеющие статус OPERATOR_REVIEW
    if OperationalManager.objects.filter(user=user).exists():
        orders = Order.objects.filter(
            operational_manager=OperationalManager.objects.get(user=user),
            status=OrderStatus.OPERATOR_REVIEW
        )
    elif President.objects.filter(user=user).exists():
        orders = Order.objects.filter(
            president=President.objects.get(user=user),
            status=OrderStatus.OPERATOR_REVIEW
        )
    elif AccountsReceivableManager.objects.filter(user=user).exists():
        orders = Order.objects.filter(
            accounts_receivable_manager=AccountsReceivableManager.objects.get(user=user),
            status=OrderStatus.OPERATOR_REVIEW
        )
    elif AccountsReceivable.objects.filter(user=user).exists():
        orders = Order.objects.filter(
            accounts_receivable=AccountsReceivable.objects.get(user=user),
            status=OrderStatus.OPERATOR_REVIEW
        )
    elif AccountsPayable.objects.filter(user=user).exists():
        orders = Order.objects.filter(
            accounts_payable=AccountsPayable.objects.get(user=user),
            status=OrderStatus.OPERATOR_REVIEW
        )
    else:
        orders = []
    return render(request, 'templates_for_orders/own_operator_order_list.html', {'orders': orders})


@login_required
def release_order(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    user = request.user

    # Проверяем, является ли пользователь оператором этого заказа
    if (
        order.operational_manager and order.operational_manager.user == user or
        order.president and order.president.user == user or
        order.accounts_receivable_manager and order.accounts_receivable_manager.user == user or
        order.accounts_receivable and order.accounts_receivable.user == user or
        order.accounts_payable and order.accounts_payable.user == user
    ):
        # Устанавливаем все поля операторов как None и меняем статус на "Получен"
        order.operational_manager = None
        order.president = None
        order.accounts_receivable_manager = None
        order.accounts_receivable = None
        order.accounts_payable = None
        order.change_status(OrderStatus.RECEIVED)
        order.save()
        messages.success(request, "Заказ возвращен в общий список.")
    else:
        messages.error(request, "Вы не можете вернуть этот заказ, так как он не связан с вами.")

    return redirect('orders:operator_order_list')



@login_required
def release_order_to_supervisor(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    user = request.user

    # Проверяем, является ли пользователь оператором этого заказа
    if (
        order.driver and order.driver.user == user
    ):
        # Устанавливаем все поля операторов как None и меняем статус на "Получен"
        order.driver = None
        order.change_status(OrderStatus.WAREHOUSE_PROCESSING)
        order.save()
        messages.success(request, "Заказ возвращен в общий список SuperVisor.")
    else:
        messages.error(request, "Вы не можете вернуть этот заказ, так как он не связан с вами.")

    return redirect('orders:warehouse_order_list')




@login_required
def warehouse_order_list(request):
    user = request.user


    # Проверяем, является ли пользователь одним из сотрудников офиса
    office_roles = [
        OperationalManager, President, AccountsReceivableManager,
        AccountsReceivable, AccountsPayable, WarehouseSupervisor
    ]
    is_office_employee = any(role.objects.filter(user=user).exists() for role in office_roles)


    if is_office_employee or Driver.objects.filter(user=user).exists():
        orders = Order.objects.filter(status=OrderStatus.WAREHOUSE_PROCESSING)
    else:
        orders = []

    drivers = Driver.objects.all()


    return render(request, 'templates_for_warehouse/warehouse_order_list.html', {'orders': orders, 'drivers': drivers})



@login_required
def supervisor_take_order_back(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    user = request.user

    # Проверка, является ли пользователь супервайзером
    is_supervisor = WarehouseSupervisor.objects.filter(user=user).exists()

    if is_supervisor:
        # Проверяем, был ли заказ у водителя
        if order.driver:
            driver_user = order.driver.user  # Сохраняем атрибут user
            order.driver = None
            order.change_status(OrderStatus.WAREHOUSE_PROCESSING)
            order.save()

            Notification.objects.create(
                user=driver_user,  # Используем сохраненный ранее атрибут user
                message=f"Супервайзер {user.username} забрал заказ #{order.id}."
            )

            messages.success(request, "Вы забрали заказ у водителя!")
        else:
            messages.error(request, "Этот заказ не привязан к водителю.")
    else:
        messages.error(request, "Вы не являетесь супервайзером.")

    return redirect('orders:warehouse_order_list')





from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required


@login_required
def warehouse_order_detail(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    order_items = OrderItem.objects.filter(order=order)

    items = []
    for item in order_items:
        items.append({
            'id': item.id,
            'product': item.product,
            'quantity': item.quantity,
            'unit_price': item.price_at_time_of_purchase,  # добавлено
            'total': item.price_at_time_of_purchase * item.quantity,
            'order_sku': item.order_sku,
            'product_number': item.product_size.product_number,  # добавлено
            'package_type': item.product_size.get_package_type_display(),  # добавлено
            'size': item.product_size.size.value  # добавлено
        })

    drivers = Driver.objects.all()

    if request.method == 'POST':
        selected_driver_id = request.POST.get('driver')
        selected_driver = get_object_or_404(Driver, id=selected_driver_id)

        order.driver = selected_driver

        # Изменяем статус заказа на DELIVERY используя метод change_status
        order.change_status(OrderStatus.DELIVERY)

        messages.success(request, f"Заказ {order.id} был назначен водителю {selected_driver.user.username}.")
        return redirect('orders:warehouse_order_list')

    context = {
        'order': order,
        'items': items,
        'drivers': drivers,
        'address_line1': order.address_line1,
        'address_line2': order.address_line2,
        'city': order.city,
        'state': order.state,
        'country': order.country,
        'postal_code': order.postal_code,
        'additional_info': order.additional_info,
        'total_amount': order.get_total_amount()
    }

    return render(request, 'templates_for_warehouse/warehouse_order_detail.html', context)


@login_required
def driver_order_list(request, driver_id):
    user = request.user

    # Список ролей, которым разрешен доступ
    allowed_roles = [
        WarehouseSupervisor, President, OperationalManager,
        AccountsReceivableManager, AccountsReceivable, AccountsPayable
    ]

    has_access = False
    for role in allowed_roles:
        if role.objects.filter(user=user).exists():
            has_access = True
            break

    if not has_access:
        messages.error(request, "Доступ запрещен!")
        return redirect('Warehouse1:all_employees_warehouse_list')

    driver = get_object_or_404(Driver, id=driver_id)
    orders = Order.objects.filter(
        driver=driver,
        status__in=[OrderStatus.TRUCK_LOADING, OrderStatus.DELIVERY]
    )

    return render(request, 'templates_for_warehouse/driver_orders.html', {'orders': orders, 'driver': driver})




from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages


@login_required
def order_detail(request, order_id):
    user = request.user

    # Список ролей, которым разрешен доступ
    allowed_roles = [
        WarehouseSupervisor, President, OperationalManager,
        AccountsReceivableManager, AccountsReceivable, AccountsPayable
    ]

    has_access = False
    for role in allowed_roles:
        if role.objects.filter(user=user).exists():
            has_access = True
            break

    if not has_access:
        messages.error(request, "Доступ запрещен!")
        return redirect('Warehouse1:all_employees_warehouse_list')

    order = get_object_or_404(Order, id=order_id)
    order_items = order.items.all()

    items = [
        {
            'id': item.id,
            'product': item.product,
            'quantity': item.quantity,
            'unit_price': item.price_at_time_of_purchase,  # добавлено
            'total': item.price_at_time_of_purchase * item.quantity,
            'order_sku': item.order_sku,
            'product_number': item.product_size.product_number,  # добавлено
            'package_type': item.product_size.get_package_type_display(),  # добавлено
            'size': item.product_size.size.value  # добавлено
        } for item in order_items
    ]

    drivers = Driver.objects.all()

    context = {
        'order': order,
        'items': items,
        'address_line1': order.address_line1,
        'address_line2': order.address_line2,
        'city': order.city,
        'state': order.state,
        'country': order.country,
        'postal_code': order.postal_code,
        'additional_info': order.additional_info,
        'total_amount': order.get_total_amount(),
        'drivers': drivers  # Добавляем список водителей
    }

    return render(request, 'templates_for_warehouse/order_detail.html', context)


@login_required
def own_driver_order_list(request):
    user = request.user

    # Проверяем, является ли пользователь одним из сотрудников офиса
    office_roles = [
        OperationalManager, President, AccountsReceivableManager,
        AccountsReceivable, AccountsPayable
    ]
    is_office_employee = any(role.objects.filter(user=user).exists() for role in office_roles)

    if is_office_employee:
        # Если пользователь является сотрудником офиса, показываем все заказы
        orders = Order.objects.filter(status__in=[OrderStatus.TRUCK_LOADING, OrderStatus.DELIVERY])
    elif Driver.objects.filter(user=user).exists():
        # Если пользователь является водителем, показываем только его заказы
        orders = Order.objects.filter(driver__user=user, status__in=[OrderStatus.TRUCK_LOADING, OrderStatus.DELIVERY])
    else:
        orders = []

    notifications = Notification.objects.filter(user=request.user, is_read=False)

    return render(request, 'templates_for_warehouse/own_driver_order_list.html',
                  {'orders': orders, 'notifications': notifications})




from django.shortcuts import get_object_or_404, render
from .models import Order, OrderItem

def DriverOrderDetailView(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    order_items = OrderItem.objects.filter(order=order)
    items = []

    for item in order_items:
        items.append({
            'id': item.id,
            'product': item.product,
            'quantity': item.quantity,
            'unit_price': item.price_at_time_of_purchase,  # добавлено
            'total': item.price_at_time_of_purchase * item.quantity,
            'order_sku': item.order_sku,
            'product_number': item.product_size.product_number,  # добавлено
            'package_type': item.product_size.get_package_type_display(),  # добавлено
            'size': item.product_size.size.value  # добавлено
        })

    context = {
        'order': order,
        'items': items,
        'address_line1': order.address_line1,
        'address_line2': order.address_line2,
        'city': order.city,
        'state': order.state,
        'country': order.country,
        'postal_code': order.postal_code,
        'additional_info': order.additional_info,
        'total_amount': order.get_total_amount(),
    }

    return render(request, 'templates_for_warehouse/driver_order_detail.html', context)



@login_required
def pass_order_to_driver(request, order_id):
    order = get_object_or_404(Order, id=order_id)

    if order.status != OrderStatus.WAREHOUSE_PROCESSING:
        messages.error(request, "Заказ еще не обработан на складе.")
        return redirect('orders:warehouse_order_detail', order_id=order.id)

    order.pass_to_driver()

    messages.success(request, "Заказ успешно передан водителю.")


    return redirect('orders:own_driver_order_list')



def mark_as_loaded_driver(request, order_id):
    order = get_object_or_404(Order, pk=order_id)
    if request.method == "POST":
        # Меняем статус на противоположный при каждом отправлении формы
        order.is_loaded = not order.is_loaded
        if order.is_loaded:
            order.loaded_at = timezone.now()
        else:
            order.loaded_at = None
        order.save()
    return redirect('orders:own_driver_order_list') # или куда вам нужно


@login_required
def mark_as_loaded_supervisor(request, order_id, driver_id):
    user = request.user

    # Убедитесь, что пользователь действительно супервайзер
    if not WarehouseSupervisor.objects.filter(user=user).exists():
        messages.error(request, "Доступ запрещен!")
        return redirect('Warehouse1:all_employees_warehouse_list')  # или куда-то еще

    order = get_object_or_404(Order, pk=order_id)

    if request.method == "POST":
        # Меняем статус на противоположный при каждом отправлении формы
        order.is_loaded = not order.is_loaded
        if order.is_loaded:
            order.loaded_at = timezone.now()
        else:
            order.loaded_at = None
        order.save()

    return redirect('orders:driver_order', driver_id=driver_id)


@login_required
def mark_truck_as_fully_loaded_driver(request):
    user = request.user
    driver = get_object_or_404(Driver, user=user)

    # Проверьте, все ли заказы водителя помечены как загруженные
    driver_orders_not_loaded = Order.objects.filter(driver=driver, is_loaded=False)
    if driver_orders_not_loaded.exists():
        messages.error(request, "Есть заказы, которые еще не загружены!")
        return redirect('orders:own_driver_order_list')

        # Обновите статус truck_fully_loaded для текущего водителя
    driver.truck_fully_loaded = True
    driver.save()


    # Если все заказы загружены, пометьте каждый из них как "Трак полностью загружен"
    # и измените статус заказа на DELIVERY
    # Если все заказы загружены, измените статус заказа на DELIVERY
    for order in Order.objects.filter(driver=driver, status=OrderStatus.TRUCK_LOADING):
        order.change_status(OrderStatus.DELIVERY)
        # order.save()


    messages.success(request, "Трак помечен как полностью загруженный и все заказы отправлены на доставку.")
    return redirect('orders:own_driver_order_list')



@login_required
def mark_truck_as_fully_loaded_supervisor(request, driver_id):
    user = request.user

    # Убедитесь, что пользователь действительно супервайзер
    if not WarehouseSupervisor.objects.filter(user=user).exists():
        messages.error(request, "Доступ запрещен!")
        return redirect('Warehouse1:all_employees_warehouse_list')  # или куда-то еще

    driver = get_object_or_404(Driver, id=driver_id)

    # Проверьте, все ли заказы водителя помечены как загруженные
    driver_orders_not_loaded = Order.objects.filter(driver=driver, is_loaded=False)
    if driver_orders_not_loaded.exists():
        messages.error(request, "Есть заказы, которые еще не загружены!")
        return redirect('orders:driver_order', driver_id=driver_id)  # редирект на страницу заказов водителя

    # Обновите статус truck_fully_loaded для выбранного водителя
    driver.truck_fully_loaded = True
    driver.save()

    # Если все заказы загружены, пометьте каждый из них как "Трак полностью загружен"
    for order in Order.objects.filter(driver=driver, status=OrderStatus.TRUCK_LOADING):
        order.change_status(OrderStatus.DELIVERY)

    messages.success(request, f"Трак водителя {driver.user.username} помечен как полностью загруженный и все его заказы отправлены на доставку.")
    return redirect('orders:driver_order', driver_id=driver_id)  # редирект на страницу заказов водителя


from django.shortcuts import render

def current_user(request):
    return render(request, 'ForMainWepSite/base.html', {'user': request.user})
















