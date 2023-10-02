from django.urls import path, register_converter
from . import views
from .views import CustomerOrderDetailView, OperatorOrderDetailView, BaseOrderListView, OperatorOrderListView, \
    CanceledOrderListView, DriverOrderDetailView
from . import converters

register_converter(converters.BoolConverter, 'bool')
from django.contrib.auth.views import LoginView
from django.contrib.auth.views import LogoutView




app_name = 'orders'  # только если вы используете пространство имен

urlpatterns = [

    path('create_order/', views.create_order, name='create_order'),
    path('order/<int:order_id>/', CustomerOrderDetailView.as_view(), name='customer_order_detail'),
    path('operator/order/<int:order_id>/', OperatorOrderDetailView.as_view(), name='operator_order_detail'),


    path('order_item/edit/<int:order_id>/', views.edit_order_item, name='edit_order_item'),
    path('order_item/delete/<int:order_id>/', views.delete_order_item, name='delete_order_item'),
    path('order/edit_address/<int:order_id>/', views.edit_order_address, name='edit_order_address'),

    path('new_order_call/<int:order_id>/add_product/', views.NewOrderCallView.as_view(),
         name='new_order_call_add_product'),
    path('edit_order_call/<int:order_id>/add_product/', views.EditOrderCallView.as_view(),
         name='edit_order_call_add_product'),

    path('api/get_product_details/<int:product_id>/', views.get_product_details, name='get_product_details'),
    path('operator_create_order/', views.operator_create_order, name='operator_create_order'),

    path('order_list/', BaseOrderListView.as_view(), name='base_order_list'),
    path('operator_orders/', OperatorOrderListView.as_view(), name='operator_order_list'),
    path('take_order/<int:order_id>/', views.take_order, name='take_order'),
    path('own_orders/', views.own_operator_order_list, name='own_operator_order_list'),

    path('process_order/<int:order_id>/', views.process_order, name='process_order'),

    path('cancel_order/<int:order_id>/', views.cancel_order, name='cancel_order'),
    path('canceled_orders/', CanceledOrderListView.as_view(), name='canceled_order_list'),
    path('order/<int:order_id>/return-to-processing/', views.return_order_to_processing_view, name='return_order_to_processing'),

    path('release_order/<int:order_id>/', views.release_order, name='release_order'),

    path('warehouse_orders/', views.warehouse_order_list, name='warehouse_order_list'),
    path('warehouse/order/<int:order_id>/', views.warehouse_order_detail, name='warehouse_order_detail'),
    path('pass_to_warehouse/<int:order_id>/', views.pass_order_to_warehouse, name='pass_order_to_warehouse'),

    path('driver_orders/', views.own_driver_order_list, name='own_driver_order_list'),
    path('driver_order_detail/<int:order_id>/', DriverOrderDetailView, name='driver_order_detail'),
    path('pass_to_driver/<int:order_id>/', views.pass_order_to_driver, name='pass_order_to_driver'),
    path('driver_orders/<int:order_id>/mark_as_loaded/', views.mark_as_loaded, name='mark_as_loaded'),
    path('orders/mark_truck_fully_loaded/', views.mark_truck_as_fully_loaded, name='mark_truck_as_fully_loaded'),
    path('current_user/', views.current_user, name='current_user'),
]

