from django import forms
from .models import President, OperationalManager, AccountsReceivableManager, AccountsReceivable, AccountsPayable

MALE = 1
FEMALE = 2
OTHER = 3
GENDER_TYPE = (
    (MALE, 'MALE'),
    (FEMALE, 'FEMALE'),
    (OTHER, 'OTHER')
)

class BaseEmployeeForm(forms.ModelForm):
    email = forms.EmailField(required=True)
    phone_number = forms.CharField(required=True)
    age = forms.IntegerField(required=True)
    gender = forms.ChoiceField(choices=GENDER_TYPE, required=True)
    password1 = forms.CharField(label="Password", widget=forms.PasswordInput)
    password2 = forms.CharField(label="Confirm Password", widget=forms.PasswordInput)

    class Meta:
        fields = ['user', 'email', 'phone_number', 'age', 'gender', 'password1', 'password2']  # Общие поля для всех сотрудников

    def save(self, commit=True):
        user = super(BaseEmployeeForm, self).save(commit=False)
        user.email = self.cleaned_data['email']
        password = self.cleaned_data.get('password1')
        user.set_password(password)
        if commit:
            user.save()
        return user

    def clean(self):
        cleaned_data = super().clean()
        password1 = cleaned_data.get("password1")
        password2 = cleaned_data.get("password2")
        if password1 != password2:
            raise forms.ValidationError("The two password fields didn’t match.")
        return cleaned_data


class PresidentForm(BaseEmployeeForm):
    class Meta(BaseEmployeeForm.Meta):
        model = President

class OperationalManagerForm(BaseEmployeeForm):
    class Meta(BaseEmployeeForm.Meta):
        model = OperationalManager

class AccountsReceivableManagerForm(BaseEmployeeForm):
    class Meta(BaseEmployeeForm.Meta):
        model = AccountsReceivableManager

class AccountsReceivableForm(BaseEmployeeForm):
    class Meta(BaseEmployeeForm.Meta):
        model = AccountsReceivable

class AccountsPayableForm(BaseEmployeeForm):
    class Meta(BaseEmployeeForm.Meta):
        model = AccountsPayable
