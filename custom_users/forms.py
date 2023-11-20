from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import Client

class ClientRegistrationForm(UserCreationForm):
    class Meta:
        model = Client
        fields = ['username', 'email', 'customer_phone', 'customer_name', 'avatar', 'age', 'gender', 'password1', 'password2']

class ClientForm(forms.ModelForm):
    class Meta:
        model = Client
        fields = ['username', 'customer_name', 'customer_email', 'customer_phone', 'age', 'gender', 'avatar']
        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control'}),
            'customer_name': forms.TextInput(attrs={'class': 'form-control'}),
            'customer_email': forms.EmailInput(attrs={'class': 'form-control'}),
            'customer_phone': forms.TextInput(attrs={'class': 'form-control'}),
            'age': forms.NumberInput(attrs={'class': 'form-control'}),
            'gender': forms.Select(attrs={'class': 'form-control'}),
            'avatar': forms.FileInput(attrs={'class': 'form-control-file'}),
        }

    def clean_customer_email(self):
        email = self.cleaned_data.get('customer_email')
        if email and Client.objects.filter(customer_email=email).exclude(pk=self.instance.pk).exists():
            raise forms.ValidationError('A client with this email already exists.')
        return email

    def save(self, commit=True):
        client = super().save(commit=False)
        if commit:
            client.save()
        return client

