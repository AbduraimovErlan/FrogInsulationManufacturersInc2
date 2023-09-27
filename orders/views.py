from django.contrib import messages
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.views.generic import ListView, View
from django import forms
from decimal import Decimal
from django.contrib.auth.decorators import login_required
from MainOffice.models import OperationalManager, President, AccountsReceivableManager, AccountsReceivable, \
    AccountsPayable
from Warehouse1.models import Driver
from orders.forms import OrderItemForm, OrderForm
from orders.models import Order, OrderStatus, OrderStatusHistory, OrderItem
from MainWepSite.models import Product

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
                    size = item_data.get('size', None)
                    price = Decimal(item_data['price'])
                    quantity = item_data['quantity']
                    total_price += price * quantity

                    order_item = OrderItem(
                        order=order,
                        product=product,
                        quantity=quantity,
                        price=price,
                        order_sku=item_data['sku'],
                    )
                    if size:
                        order_item.size = size
                    order_item.save()

                except Product.DoesNotExist:
                    messages.warning(request, f"Product with SKU {sku} was removed or does not exist.")
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
                'total': item.price * item.quantity,
                'order_sku': item.order_sku
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
                'total': item.price * item.quantity,
                'order_sku': item.order_sku
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
def edit_order_address(request, order_id):
    order = get_object_or_404(Order, id=order_id)

    if request.method == "POST":
        form = OrderForm(request.POST, instance=order)
        if form.is_valid():
            form.save()
            messages.success(request, "Order address updated successfully.")
            return redirect('orders:operator_order_detail', order_id=order.id)
    else:
        form = OrderForm(instance=order)

    return render(request, 'templates_for_orders/edit_order_address.html', {'form': form, 'order': order})


@login_required
def edit_order_item(request, order_id):
    order_item = get_object_or_404(OrderItem, id=order_id)

    if request.method == "POST":
        form = OrderItemForm(request.POST, instance=order_item)
        if form.is_valid():
            form.save()
            messages.success(request, "Order item updated successfully.")
            return redirect('orders:operator_order_detail', order_id=order_item.order.id)
    else:
        form = OrderItemForm(instance=order_item)

    return render(request, 'templates_for_orders/edit_order_item.html', {'form': form, 'order_item': order_item})

@login_required
def delete_order_item(request, order_id):
    order_item = get_object_or_404(OrderItem, id=order_id)
    order = order_item.order.id

    if request.method == "POST":
        order_item.delete()
        messages.success(request, "Order item deleted successfully.")
        return redirect('orders:operator_order_detail', order_id=order)

@login_required
def return_order_to_processing_view(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    if order.status == OrderStatus.CANCELED:
        order.change_status(OrderStatus.RECEIVED)
        messages.success(request, "Заказ возвращен к оператору для обработки.")
    return redirect('orders:operator_orders')

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




@login_required
def pass_order_to_warehouse(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    if order.status != OrderStatus.OPERATOR_REVIEW:
        messages.error(request, "Заказ еще не обработан в офисе.")
        return redirect('orders:operator_order_detail', order_id=order.id)

    order.pass_to_warehouse()
    messages.success(request, "Заказ успешно передан на склад.")
    return redirect('orders:warehouse_order_list')


class WarehouseOrderListView(ListView):
    model = Order
    template_name = 'templates_for_warehouse/warehouse_order_list.html'

    def get_queryset(self):
        return Order.objects.filter(status=OrderStatus.WAREHOUSE_PROCESSING)



class BaseOrderListView(ListView):
    model = Order
    template_name = 'templates_for_orders/base_order_list.html'

    def get_queryset(self):
        return Order.objects.all()


class OperatorOrderListView(BaseOrderListView):
    template_name = 'templates_for_orders/operator_order_list.html'

    def get_queryset(self):
        # Получаем все заказы со статусом "Получен"
        return Order.objects.filter(status=OrderStatus.RECEIVED)



from django.views.generic.edit import FormView

class BaseAddProductView(FormView):
    form_class = OrderItemForm

    def dispatch(self, request, *args, **kwargs):
        self.order = get_object_or_404(Order, id=kwargs['order_id'])
        return super().dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        order_item = form.save(commit=False)
        order_item.order = self.order
        order_item.save()
        messages.success(self.request, "Товар успешно добавлен к заказу!")
        return render(self.request, self.template_name, self.get_context_data(form=self.form_class()))

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['order'] = self.order
        return context

    def get_initial(self):
        initial = super().get_initial()
        initial['order'] = self.order
        return initial

class NewOrderCallView(BaseAddProductView):
    template_name = 'templates_for_orders/new_order_call_add_product.html'

class EditOrderCallView(BaseAddProductView):
    template_name = 'templates_for_orders/edit_order_call_add_product.html'
    # Если вы хотите специфическую логику для этого класса, добавьте ее здесь







from django.http import JsonResponse

def get_product_details(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
        data = {
            'sku': product.sku,
            'price': str(product.price)  # Переводим Decimal в строку для JSON
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)


from django.urls import reverse

@login_required
def operator_create_order(request):
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            order = form.save()
            messages.success(request, "Заказ успешно создан!")
            # Перенаправляем на страницу добавления продукта к новому заказу
            return redirect(reverse('orders:new_order_call_add_product', kwargs={'order_id': order.id}))
    else:
        form = OrderForm()

    return render(request, 'templates_for_orders/create_order.html', {'form': form})




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
def own_driver_order_list(request):
    user = request.user

    # Проверяем, является ли пользователь одним из сотрудников офиса
    office_roles = [
        OperationalManager, President, AccountsReceivableManager,
        AccountsReceivable, AccountsPayable
    ]
    is_office_employee = any(role.objects.filter(user=user).exists() for role in office_roles)

    if is_office_employee or Driver.objects.filter(user=user).exists():
        orders = Order.objects.filter(status=OrderStatus.DELIVERY)
    else:
        orders = []

    return render(request, 'templates_for_warehouse/own_driver_order_list.html', {'orders': orders})


@login_required
def pass_order_to_driver(request, order_id):
    order = get_object_or_404(Order, id=order_id)

    if order.status != OrderStatus.WAREHOUSE_PROCESSING:
        messages.error(request, "Заказ еще не обработан на складе.")
        return redirect('orders:warehouse_order_detail', order_id=order.id)

    order.pass_to_driver()

    messages.success(request, "Заказ успешно передан водителю.")


    return redirect('orders:own_driver_order_list')
