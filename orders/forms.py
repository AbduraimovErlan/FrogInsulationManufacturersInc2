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




class OrderItemForm(forms.ModelForm):
    package_type = forms.ChoiceField(choices=ProductSize.PACKAGE_CHOICES, widget=forms.Select(attrs={'id': 'packageType'}))
    size_sku = forms.ModelChoiceField(queryset=ProductSize.objects.all().values_list('size_sku', flat=True).distinct(),
                                      widget=forms.Select(attrs={'id': 'size_sku'}))
    product_number = forms.ModelChoiceField(
        queryset=ProductSize.objects.all().values_list('product_number', flat=True).distinct(),
        widget=forms.Select(attrs={'id': 'zeston'}))
    size = forms.ModelChoiceField(
        queryset=Size.objects.all(),
        widget=forms.Select(attrs={'id': 'size_desc'}))

    class Meta:
        model = OrderItem
        fields = ['package_type', 'product_number', 'size_sku', 'size', 'quantity']

    def clean(self):
        cleaned_data = super().clean()
        # Вы можете добавить дополнительную валидацию здесь, если это необходимо
        return cleaned_data













