from django import forms
from django.core.exceptions import ValidationError
from .models import Client, CompanyRepresentative, ClientLevel

class ClientForm(forms.ModelForm):
    company_password = forms.CharField(widget=forms.PasswordInput(), required=False, label='Пароль компании')
    confirm_company_password = forms.CharField(widget=forms.PasswordInput(), required=False, label='Подтвердите пароль компании')

    class Meta:
        model = Client
        fields = [
            'username', 'first_name', 'last_name', 'email', 'phone_number', 'age',
            'gender', 'address', 'referrer', 'referral_program_active',
            'points_system_active', 'manual_level_set', 'is_company', 'company_password_hash',
            'current_level'
        ]
        widgets = {
            'company_password_hash': forms.PasswordInput(attrs={'readonly': True}),  # This should be readonly as we don't want direct editing
        }

    def __init__(self, *args, **kwargs):
        super(ClientForm, self).__init__(*args, **kwargs)
        optional_fields = ['points_system_active', 'manual_level_set']
        for field_name in optional_fields:
            self.fields[field_name].required = False

        # If manual level setting is false, make the current_level field readonly
        if not self.instance.manual_level_set:
            self.fields['current_level'].widget.attrs['readonly'] = True

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("company_password")
        confirm_password = cleaned_data.get("confirm_company_password")

        if cleaned_data.get("is_company"):
            if not password or not confirm_password:
                raise ValidationError("Пароль компании и подтверждение пароля обязательны для компаний.")
            if password != confirm_password:
                raise ValidationError("Пароли компании не совпадают.")

        return cleaned_data

    def save(self, commit=True):
        instance = super().save(commit=False)
        password = self.cleaned_data.get("company_password")
        if password:
            instance.set_company_password(password)
        if commit:
            instance.save()
        return instance



class CompanyRepresentativeForm(forms.ModelForm):
    class Meta:
        model = CompanyRepresentative
        fields = ['client', 'name', 'phone_number', 'email', 'representative_password_hash']
        widgets = {
            'representative_password_hash': forms.PasswordInput(),
        }

class ClientLevelForm(forms.ModelForm):
    class Meta:
        model = ClientLevel
        fields = ['name', 'required_points']
