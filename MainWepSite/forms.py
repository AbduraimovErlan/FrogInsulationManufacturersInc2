from django import forms
from .models import Product, ProductVariant

class AddToCartForm(forms.Form):
    product_id = forms.IntegerField(widget=forms.HiddenInput())
    variant_index = forms.IntegerField(required=False, widget=forms.HiddenInput())
    quantity = forms.IntegerField(initial=1, min_value=1)
