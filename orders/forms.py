from django import forms
from .models import OrderItem, Order
from MainWepSite.models import Product

class OrderForm(forms.Form):
    customer_name = forms.CharField(max_length=100)
    customer_email = forms.EmailField()
    customer_phone = forms.CharField(max_length=15)
    # Другие поля, если необходимо



class OrderItemForm(forms.ModelForm):
    order = forms.ModelChoiceField(
        queryset=Order.objects.all(),
        widget=forms.HiddenInput(),
        required=True
    )
    product = forms.ModelChoiceField(
        queryset=Product.objects.all(),
        label="Product",
        widget=forms.Select(attrs={'class': 'form-control'}),
        required=True
    )
    quantity = forms.IntegerField(
        label="Quantity",
        widget=forms.NumberInput(attrs={'class': 'form-control', 'min': '1'}),
        required=True
    )
    price = forms.DecimalField(
        label="Price",
        widget=forms.NumberInput(attrs={'class': 'form-control', 'step': '0.01'}),
        required=True
    )
    order_sku = forms.CharField(
        label="Order SKU",
        widget=forms.TextInput(attrs={'class': 'form-control'}),
        required=False
    )

    class Meta:
        model = OrderItem
        fields = ['order', 'product', 'quantity', 'price', 'order_sku']

    def clean(self):
        cleaned_data = super().clean()
        # Дополнительные проверки и валидации можно добавить здесь
        return cleaned_data

    def save(self, commit=True):
        instance = super().save(commit=False)
        # Дополнительные операции сохранения можно добавить здесь
        if commit:
            instance.save()
        return instance








