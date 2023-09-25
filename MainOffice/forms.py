from django import forms
from .models import President, OperationalManager, AccountsReceivableManager, AccountsReceivable, AccountsPayable

class BaseEmployeeForm(forms.ModelForm):
    class Meta:
        fields = ['user']  # Общие поля для всех сотрудников

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
