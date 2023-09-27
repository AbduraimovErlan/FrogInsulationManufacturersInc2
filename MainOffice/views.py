from .models import President, OperationalManager, AccountsReceivableManager, AccountsReceivable,\
    AccountsPayable
from django.views.generic.edit import CreateView
from django.views.generic.list import ListView
from django.urls import reverse_lazy
from django.views.generic.edit import UpdateView
from django.views.generic.edit import DeleteView
from .forms import PresidentForm, OperationalManagerForm, AccountsReceivableManagerForm, AccountsReceivableForm, \
    AccountsPayableForm


class BaseEmployeeCreateView(CreateView):
    template_name = 'templates_for_office/employee_create_update_form.html'
    success_url = reverse_lazy('MainOffice:all_employees_list')  # или любой другой соответствующий list-view


class PresidentCreateView(BaseEmployeeCreateView):
    model = President
    form_class = PresidentForm

class OperationalManagerCreateView(BaseEmployeeCreateView):
    model = OperationalManager
    form_class = OperationalManagerForm

class AccountsReceivableManagerCreateView(BaseEmployeeCreateView):
    model = AccountsReceivableManager
    form_class = AccountsReceivableManagerForm

class AccountsReceivableCreateView(BaseEmployeeCreateView):
    model = AccountsReceivable
    form_class = AccountsReceivableForm

class AccountsPayableCreateView(BaseEmployeeCreateView):
    model = AccountsPayable
    form_class = AccountsPayableForm


class BaseEmployeeListView(ListView):
    template_name = 'templates_for_office/employee_list.html'


class PresidentListView(BaseEmployeeListView):
    model = President

class OperationalManagerListView(BaseEmployeeListView):
    model = OperationalManager

class AccountsReceivableManagerListView(BaseEmployeeListView):
    model = AccountsReceivableManager

class AccountsReceivableListView(BaseEmployeeListView):
    model = AccountsReceivable

class AccountsPayableListView(BaseEmployeeListView):
    model = AccountsPayable


class BaseEmployeeUpdateView(UpdateView):
    template_name = 'templates_for_office/employee_create_update_form.html'
    success_url = reverse_lazy('MainOffice:all_employees_list')  # или любой другой соответствующий list-view

class PresidentUpdateView(BaseEmployeeUpdateView):
    model = President
    form_class = PresidentForm

class OperationalManagerUpdateView(BaseEmployeeUpdateView):
    model = OperationalManager
    form_class = OperationalManagerForm

class AccountsReceivableManagerUpdateView(BaseEmployeeUpdateView):
    model = AccountsReceivableManager
    form_class = AccountsReceivableManagerForm

class AccountsReceivableUpdateView(BaseEmployeeUpdateView):
    model = AccountsReceivable
    form_class = AccountsReceivableForm

class AccountsPayableUpdateView(BaseEmployeeUpdateView):
    model = AccountsPayable
    form_class = AccountsPayableForm


class BaseEmployeeDeleteView(DeleteView):
    template_name = 'templates_for_office/employee_confirm_delete.html'
    success_url = reverse_lazy('MainOffice:all_employees_list')  # или любой другой соответствующий list-view

class PresidentDeleteView(BaseEmployeeDeleteView):
    model = President

class OperationalManagerDeleteView(BaseEmployeeDeleteView):
    model = OperationalManager

class AccountsReceivableManagerDeleteView(BaseEmployeeDeleteView):
    model = AccountsReceivableManager

class AccountsReceivableDeleteView(BaseEmployeeDeleteView):
    model = AccountsReceivable

class AccountsPayableDeleteView(BaseEmployeeDeleteView):
    model = AccountsPayable



from django.views.generic import TemplateView

class AllEmployeesListView(TemplateView):
    template_name = "templates_for_office/all_employees_list.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['presidents'] = President.objects.all()
        context['operational_managers'] = OperationalManager.objects.all()
        context['accounts_receivable_managers'] = AccountsReceivableManager.objects.all()
        context['accounts_receivables'] = AccountsReceivable.objects.all()
        context['accounts_payables'] = AccountsPayable.objects.all()
        return context

