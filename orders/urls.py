from django.urls import path, register_converter

from . import views
from .views import CustomerOrderDetailView, OperatorOrderDetailView, BaseOrderListView, OperatorOrderListView, \
    CanceledOrderListView, DriverOrderDetailView, driver_order_list
from . import converters
from .views import ProductListView, ProductDetailViewBoxed, ProductDetailViewSingle

register_converter(converters.BoolConverter, 'bool')





app_name = 'orders'  # только если вы используете пространство имен

urlpatterns = [

    path('create_order/', views.create_order, name='create_order'),
    path('order/<int:order_id>/', CustomerOrderDetailView.as_view(), name='customer_order_detail'),
    path('operator/order/<int:order_id>/', OperatorOrderDetailView.as_view(), name='operator_order_detail'),

    path('edit_order_item/<int:order_id>/<str:source>/', views.edit_order_item, name='edit_order_item'),

    path('order_item/delete/<int:order_id>/', views.delete_order_item, name='delete_order_item'),




    path('edit_order_address/<int:order_id>/<str:source>/', views.edit_order_address, name='edit_order_address'),



    path('edit_order_call_add_product/<int:order_id>/<str:source>/', views.EditOrderCallView.as_view(), name='edit_order_call_add_product'),

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
    path('release_order_to_supervisor/<int:order_id>/', views.release_order_to_supervisor, name='release_order_to_supervisor'),

    path('warehouse_orders/', views.warehouse_order_list, name='warehouse_order_list'),
    path('warehouse_orders_d/<int:order_id>/', views.warehouse_order_detail, name='warehouse_order_detail'),
    path('pass_to_warehouse/<int:order_id>/', views.pass_order_to_warehouse, name='pass_order_to_warehouse'),
    path('supervisor_take_order/<int:order_id>/', views.supervisor_take_order_back, name='supervisor_take_order'),

    path('driver_orders/<int:driver_id>/', driver_order_list, name='driver_order'),
    path('order_detail/<int:order_id>/', views.order_detail, name='order_detail'),

    path('driver_orders/', views.own_driver_order_list, name='own_driver_order_list'),
    path('driver_order_detail/<int:order_id>/', DriverOrderDetailView, name='driver_order_detail'),
    path('pass_to_driver/<int:order_id>/', views.pass_order_to_driver, name='pass_order_to_driver'),
    path('driver_orders/<int:order_id>/mark_as_loaded/', views.mark_as_loaded_driver, name='mark_as_loaded'),
    path('supervisor_mark_as_loaded/<int:order_id>/<int:driver_id>/', views.mark_as_loaded_supervisor,
         name='mark_as_loaded_supervisor'),
    path('mark_truck_as_fully_loaded/', views.mark_truck_as_fully_loaded_driver, name='mark_truck_as_fully_loaded'),
    path('supervisor_mark_truck/<int:driver_id>/', views.mark_truck_as_fully_loaded_supervisor,
         name='mark_truck_as_fully_loaded_supervisor'),
    path('current_user/', views.current_user, name='current_user'),



    path('api/update_based_on_package_call/<str:package_type>/', views.update_based_on_package_call, name='update_based_on_package_call'),
    path('api/update_based_on_product_number_call/<str:package_type>/<str:product_number>/', views.update_based_on_product_number_call,
         name='update_based_on_product_number_call'),
    path('api/update_based_on_sku_call/<str:package_type>/<str:product_number>/<str:size_sku>/', views.update_based_on_sku_call,
         name='update_based_on_sku_call'),

    path('api/update_based_on_size_call/<str:package_type>/<str:product_number>/<str:size_sku>/<str:size_value>/', views.update_based_on_size_call, name='update_based_on_size_call'),



# path('products_order_call/<int:order_id>/add_product/', ProductListView.as_view(), name='product_list_order'),
#     path('product/<slug:slug>/boxed/<int:order_id>/', views.ProductDetailViewBoxed.as_view(),
#          name='product_detail_boxed'),
#     path('product/<slug:slug>/single/<int:order_id>/', views.ProductDetailViewSingle.as_view(), name='product_detail_single'),
#     path('add-product-to-order/<int:product_id>/<int:size_id>/<int:order_id>/', views.add_product_to_order, name='add_product_to_order'),


    path('products_order/<int:order_id>/', ProductListView.as_view(), name='product_list_order'),
    path('products_order/<slug:slug>/boxed/<int:order_id>/', ProductDetailViewBoxed.as_view(),
         name='product_detail_boxed'),

    path('products_order/<slug:slug>/single/<int:order_id>/', ProductDetailViewSingle.as_view(),
         name='product_detail_single'),

    path('add_product/<int:product_id>/<int:size_id>/<int:order_id>/', views.add_product_to_order,
         name='add_product_to_order'),

]
