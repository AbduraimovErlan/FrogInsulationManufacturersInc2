from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from .models import Client, CompanyRepresentative, ClientLevel
from .forms import ClientForm, CompanyRepresentativeForm, ClientLevelForm



class ClientListView(ListView):
    model = Client
    template_name = 'client_list.html'  # название вашего шаблона
    context_object_name = 'clients'

class ClientCreateView(CreateView):
    model = Client
    form_class = ClientForm
    template_name = 'client_form.html'
    success_url = reverse_lazy('custom_users:client_list')



class ClientUpdateView(UpdateView):
    model = Client
    form_class = ClientForm
    template_name = 'client_form.html'
    success_url = reverse_lazy('custom_users:client_list')

class ClientDeleteView(DeleteView):
    model = Client
    template_name = 'client_confirm_delete.html'
    success_url = reverse_lazy('custom_users:client_list')


class CompanyRepresentativeListView(ListView):
    model = CompanyRepresentative
    template_name = 'representative_list.html'
    context_object_name = 'representatives'

class CompanyRepresentativeCreateView(CreateView):
    model = CompanyRepresentative
    form_class = CompanyRepresentativeForm
    template_name = 'representative_form.html'
    success_url = reverse_lazy('custom_users:representative_list')

class CompanyRepresentativeUpdateView(UpdateView):
    model = CompanyRepresentative
    form_class = CompanyRepresentativeForm
    template_name = 'representative_form.html'
    success_url = reverse_lazy('custom_users:representative_list')

class CompanyRepresentativeDeleteView(DeleteView):
    model = CompanyRepresentative
    template_name = 'representative_confirm_delete.html'
    success_url = reverse_lazy('custom_users:representative_list')





class ClientLevelListView(ListView):
    model = ClientLevel
    template_name = 'level_list.html'
    context_object_name = 'levels'

class ClientLevelCreateView(CreateView):
    model = ClientLevel
    form_class = ClientLevelForm
    template_name = 'level_form.html'
    success_url = reverse_lazy('custom_users:level_list')

class ClientLevelUpdateView(UpdateView):
    model = ClientLevel
    form_class = ClientLevelForm
    template_name = 'level_form.html'
    success_url = reverse_lazy('custom_users:level_list')

class ClientLevelDeleteView(DeleteView):
    model = ClientLevel
    template_name = 'level_confirm_delete.html'
    success_url = reverse_lazy('custom_users:level_list')
