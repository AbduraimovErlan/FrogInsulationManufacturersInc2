from django.urls import path
from custom_users.views import ClientListView, ClientCreateView, ClientUpdateView, ClientDeleteView, register

app_name = 'custom_users'

urlpatterns = [
    path('clients/', ClientListView.as_view(), name='client_list'),
    path('clients/add/', ClientCreateView.as_view(), name='client_add'),
    path('clients/<int:pk>/edit/', ClientUpdateView.as_view(), name='client_edit'),
    path('clients/<int:pk>/delete/', ClientDeleteView.as_view(), name='client_delete'),
    path('register_clients/', register, name='register_clients'),
]






