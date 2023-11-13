from django.urls import path
from . import views

app_name = 'MainWepSite'  # только если вы используете пространство имен

urlpatterns = [
    path('', views.index, name='index'),  # Эта строка указывает, что корневой URL будет обрабатываться функцией index
    path('product/<slug:slug>/', views.product_detail, name='product_detail'),

    # path('api/get_product_by_sku/<str:sku>/', views.get_product_by_sku, name='get_product_by_sku'),



path('update_based_on_package/<int:product_id>/<str:package_type>/', views.update_based_on_package, name='update_based_on_package'),
path('update_based_on_product_number/<int:product_id>/<zeston>/<str:package_type>/', views.update_based_on_product_number, name='update_based_on_product_number'),
path('update_based_on_sku/<int:product_id>/<str:size_sku>/', views.update_based_on_sku, name='update_based_on_sku'),
path('update_based_on_size_and_package/<int:product_id>/<size_desc>/<str:package_type>/', views.update_based_on_size_and_package, name='update_based_on_size_and_package'),


    path('category.html/<slug:slug>/', views.category_detail, name='category_detail'),
    path('brand/<slug:slug>/', views.brand_detail, name='brand_detail'),


    path('cart/', views.view_cart, name='view_cart'),
    path('add_to_cart/<int:product_id>/', views.add_to_cart, name='add_to_cart'),
    path('remove_from_cart/(?P<sku>[\w-]+)/\\Z', views.remove_from_cart, name='remove_from_cart'),
    path('update_cart_quantity/(?P<sku>[\w-]+)/\\Z', views.update_cart_quantity, name='update_cart_quantity'),
    path('clear_cart/', views.clear_cart, name='clear_cart'),


]




