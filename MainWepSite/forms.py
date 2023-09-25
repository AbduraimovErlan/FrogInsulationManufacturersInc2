from django import forms
from MainWepSite.models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'description', 'price', 'sku', 'stock_quantity']  # и другие поля, если они есть
