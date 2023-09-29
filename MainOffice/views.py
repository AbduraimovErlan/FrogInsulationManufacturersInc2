from .models import President, OperationalManager, AccountsReceivableManager, AccountsReceivable,\
    AccountsPayable
from django.views.generic.edit import CreateView
from django.views.generic.list import ListView
from django.urls import reverse_lazy
from django.views.generic.edit import UpdateView
from django.views.generic.edit import DeleteView
from .forms import PresidentForm, OperationalManagerForm, AccountsReceivableManagerForm, AccountsReceivableForm, \
    AccountsPayableForm
from django.contrib.auth.views import LoginView
from django.urls import reverse
from django.views.generic.edit import FormView
from django.urls import reverse_lazy
from .forms import (
    PresidentForm, OperationalManagerForm, AccountsReceivableManagerForm,
    AccountsReceivableForm, AccountsPayableForm
)
from django.contrib.auth.forms import UserCreationForm


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






class BaseLoginView(LoginView):
    template_name = 'templates_for_office/login.html'

    def get_success_url(self):
        return reverse("users:user_list")


class PresidentLoginView(BaseLoginView):

    def get_success_url(self):
        return reverse("president:list")

class OperationalManagerLoginView(BaseLoginView):
    pass

class AccountsReceivableManagerLoginView(BaseLoginView):
    pass

class AccountsReceivableLoginView(BaseLoginView):
    pass

class AccountsPayableLoginView(BaseLoginView):
    pass






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





from django.contrib.auth.forms import UserCreationForm

class EmployeeRegistrationView(FormView):
    template_name = 'templates_for_office/register.html'
    success_url = reverse_lazy('MainOffice:all_employees_list')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["user_form"] = UserCreationForm()
        context["employee_form"] = self.get_form()
        return context

    def post(self, request, *args, **kwargs):
        user_form = UserCreationForm(request.POST)
        employee_form = self.get_form_class()(request.POST)

        if user_form.is_valid() and employee_form.is_valid():
            user = user_form.save()
            employee = employee_form.save(commit=False)
            employee.user = user
            employee.save()
            return self.form_valid(employee_form)
        else:
            return self.form_invalid(employee_form)

    def get_form_class(self):
        role = self.request.POST.get('role', 'president')
        if role == "president":
            return PresidentForm
        elif role == "operational_manager":
            return OperationalManagerForm
        elif role == "accounts_receivable_manager":
            return AccountsReceivableManagerForm
        elif role == "accounts_receivable":
            return AccountsReceivableForm
        elif role == "accounts_payable":
            return AccountsPayableForm




