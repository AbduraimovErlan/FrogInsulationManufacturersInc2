from django.urls import path
from . import views

app_name = 'MainWepSite'  # только если вы используете пространство имен

urlpatterns = [
    path('', views.index, name='index'),  # Эта строка указывает, что корневой URL будет обрабатываться функцией index
    path('product/<slug:slug>/', views.product_detail, name='product_detail'),
    path('category/<slug:slug>/', views.category_detail, name='category_detail'),
    path('brand/<slug:slug>/', views.brand_detail, name='brand_detail'),
    path('create_order/', views.create_order, name='create_order'),
    path('order_list/', views.order_list, name='order_list'),
    path('order_detail/<int:order_id>/', views.order_detail, name='order_detail'),  # убедитесь, что имя указано правильно

    path('cart/', views.view_cart, name='view_cart'),
    path('add_to_cart/<int:product_id>/', views.add_to_cart, name='add_to_cart'),
    path('just_add_to_cart/<int:product_id>/', views.just_add_to_cart, name='just_add_to_cart'),
    path('remove_from_cart/<int:sku>/', views.remove_from_cart, name='remove_from_cart'),
    path('update_cart_quantity/<int:sku>/', views.update_cart_quantity, name='update_cart_quantity'),
    path('clear_cart/', views.clear_cart, name='clear_cart'),
]




