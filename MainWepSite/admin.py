from django.contrib import admin
from django.contrib import admin
from .models import Product, Category, Brand, ProductSpecification, ProductImage, Wishlist, \
    Review, Comment, Cart, CartItem, ProductViewLog, ProductPurchaseLog, ProductSize, Color, Size


@admin.register(Size)
class SizeAdmin(admin.ModelAdmin):
    list_display = ['value']

@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    list_display = ['name']
@admin.register(ProductSize)
class ProductSizeAdmin(admin.ModelAdmin):
    list_display = ['product', 'size', 'size_price', 'size_sku']

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'sku', 'price', 'stock_quantity', 'category', 'brand',)
    search_fields = ('name', 'sku', 'category__name', 'brand__name')
    prepopulated_fields = {'slug': ('name',)}
    list_filter = ('category', 'brand')  # новое поле
    readonly_fields = ('sales_count', 'rating')  # новое поле


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)
    prepopulated_fields = {'slug': ('name',)}

class BrandAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)
    prepopulated_fields = {'slug': ('name',)}




# Регистрация моделей и их админ-классов
admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Brand, BrandAdmin)
admin.site.register(ProductSpecification)
admin.site.register(ProductImage)
admin.site.register(Wishlist)

admin.site.register(Review)
admin.site.register(Comment)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(ProductViewLog)
admin.site.register(ProductPurchaseLog)

