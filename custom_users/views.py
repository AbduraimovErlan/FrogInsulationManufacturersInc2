from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from .models import Client
from .forms import ClientForm, ClientRegistrationForm
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

class ClientListView(ListView):
    model = Client
    template_name = 'templates_for_client/client_list.html'
    context_object_name = 'clients'

class ClientCreateView(CreateView):
    model = Client
    form_class = ClientForm
    template_name = 'templates_for_client/client_form.html'
    success_url = reverse_lazy('custom_users:client_list')

class ClientUpdateView(UpdateView):
    model = Client
    form_class = ClientForm
    template_name = 'templates_for_client/client_form.html'
    success_url = reverse_lazy('custom_users:client_list')

class ClientDeleteView(DeleteView):
    model = Client
    template_name = 'templates_for_client/client_confirm_delete.html'
    success_url = reverse_lazy('custom_users:client_list')

def register(request):
    if request.method == 'POST':
        form = ClientRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('MainOffice:login_employee')  # Или другой URL, куда вы хотите перенаправить пользователя
    else:
        form = ClientRegistrationForm()
    return render(request, 'templates_for_client/register_clients.html', {'form': form})

