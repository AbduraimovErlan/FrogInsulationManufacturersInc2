from django.urls import path
from . import views
from .views import CustomerOrderDetailView, OperatorOrderDetailView, BaseOrderListView, OperatorOrderListView, \
    WarehouseOrderListView, CanceledOrderListView

app_name = 'orders'  # только если вы используете пространство имен

urlpatterns = [
    path('create_order/', views.create_order, name='create_order'),
    path('order/<int:order_id>/', CustomerOrderDetailView.as_view(), name='customer_order_detail'),
    path('operator/order/<int:order_id>/', OperatorOrderDetailView.as_view(), name='operator_order_detail'),



    path('order_list/', BaseOrderListView.as_view(), name='base_order_list'),
    path('operator_orders/', OperatorOrderListView.as_view(), name='operator_order_list'),
    path('take_order/<int:order_id>/', views.take_order, name='take_order'),
    path('own_orders/', views.own_operator_order_list, name='own_operator_order_list'),
    path('process_order/<int:order_id>/', views.process_order, name='process_order'),

    path('warehouse_orders/', WarehouseOrderListView.as_view(), name='warehouse_order_list'),
    path('pass_to_warehouse/<int:order_id>/', views.pass_order_to_warehouse, name='pass_order_to_warehouse'),
    path('cancel_order/<int:order_id>/', views.cancel_order, name='cancel_order'),
    path('canceled_orders/', CanceledOrderListView.as_view(), name='canceled_order_list'),
    path('order/<int:order_id>/return-to-processing/', views.return_order_to_processing_view, name='return_order_to_processing'),

    path('release_order/<int:order_id>/', views.release_order, name='release_order'),

]

