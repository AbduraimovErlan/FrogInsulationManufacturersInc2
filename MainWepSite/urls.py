from django.urls import path
from . import views

app_name = 'MainWepSite'

urlpatterns = [
    path('', views.index, name='index'),
    path('product/<slug:slug>/', views.product_detail, name='product_detail'),
    path('category/<slug:slug>/', views.category_detail, name='category_detail'),
    path('brand/<slug:slug>/', views.brand_detail, name='brand_detail'),
    path('create_order/', views.create_order, name='create_order'),
    path('order_list/', views.order_list, name='order_list'),
    path('order_detail/<int:order_id>/', views.order_detail, name='order_detail'),

# Добавление товара в корзину
    path('cart/add/<int:product_id>/', views.add_to_cart, name='add_to_cart'),
    # Просмотр содержимого корзины
    path('cart/view/', views.view_cart, name='view_cart'),

    # Удаление товара из корзины
    path('cart/remove/<int:product_id>/', views.remove_from_cart, name='remove_from_cart'),

    # Обновление количества товара в корзине
    path('cart/update_quantity/<int:product_id>/', views.update_cart_quantity, name='update_cart_quantity'),

    # Добавление товара в корзину и перенаправление на предыдущую страницу
    path('cart/just_add/<int:product_id>/', views.just_add_to_cart, name='just_add_to_cart'),

    path('like_product/<int:product_id>/', views.like_product, name='like_product'),
]

    # path('add_to_wishlist/<int:product_id>/', views.add_to_wishlist, name='add_to_wishlist'),
    # path('remove_from_wishlist/<int:product_id>/', views.remove_from_wishlist, name='remove_from_wishlist'),








