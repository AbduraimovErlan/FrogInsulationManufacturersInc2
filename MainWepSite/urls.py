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
    path('add_to_cart/<int:product_id>/', views.add_to_cart, name='add_to_cart'),
]






