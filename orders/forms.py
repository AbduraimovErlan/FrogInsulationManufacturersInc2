from django import forms
from .models import OrderItem, Order
from MainWepSite.models import Product, ProductSize, Size


class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = [
            'customer_name', 'customer_email', 'customer_phone',
            'address_line1', 'address_line2', 'city', 'state', 'country',
            'postal_code', 'additional_info'
        ]
        widgets = {
            'customer_name': forms.TextInput(attrs={'class': 'form-control'}),
            'customer_email': forms.EmailInput(attrs={'class': 'form-control'}),
            'customer_phone': forms.TextInput(attrs={'class': 'form-control'}),
            'address_line1': forms.TextInput(attrs={'class': 'form-control'}),
            'address_line2': forms.TextInput(attrs={'class': 'form-control'}),
            'city': forms.TextInput(attrs={'class': 'form-control'}),
            'state': forms.TextInput(attrs={'class': 'form-control'}),
            'country': forms.TextInput(attrs={'class': 'form-control'}),
            'postal_code': forms.TextInput(attrs={'class': 'form-control'}),
            'additional_info': forms.Textarea(attrs={'class': 'form-control'}),
        }

















