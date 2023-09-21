from django.urls import path
from .views import (
    ClientListView, ClientCreateView, ClientUpdateView, ClientDeleteView,
    CompanyRepresentativeListView, CompanyRepresentativeCreateView, CompanyRepresentativeUpdateView,
    CompanyRepresentativeDeleteView,
    ClientLevelListView, ClientLevelCreateView, ClientLevelUpdateView, ClientLevelDeleteView
)

app_name = 'custom_users'


urlpatterns = [
    # Client URLs
    path('clients/', ClientListView.as_view(), name='client_list'),
    path('clients/add/', ClientCreateView.as_view(), name='client_add'),
    path('clients/<int:pk>/edit/', ClientUpdateView.as_view(), name='client_edit'),
    path('clients/<int:pk>/delete/', ClientDeleteView.as_view(), name='client_delete'),

    # CompanyRepresentative URLs
    path('representatives/', CompanyRepresentativeListView.as_view(), name='representative_list'),
    path('representatives/add/', CompanyRepresentativeCreateView.as_view(), name='representative_add'),
    path('representatives/<int:pk>/edit/', CompanyRepresentativeUpdateView.as_view(), name='representative_edit'),
    path('representatives/<int:pk>/delete/', CompanyRepresentativeDeleteView.as_view(), name='representative_delete'),

    # ClientLevel URLs
    path('levels/', ClientLevelListView.as_view(), name='level_list'),
    path('levels/add/', ClientLevelCreateView.as_view(), name='level_add'),
    path('levels/<int:pk>/edit/', ClientLevelUpdateView.as_view(), name='level_edit'),
    path('levels/<int:pk>/delete/', ClientLevelDeleteView.as_view(), name='level_delete'),
]

