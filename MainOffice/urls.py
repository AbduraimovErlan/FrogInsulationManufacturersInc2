from django.urls import path
from .views import (PresidentCreateView, OperationalManagerCreateView, AccountsReceivableManagerCreateView,
                    AccountsReceivableCreateView, AccountsPayableCreateView,
                    PresidentListView, OperationalManagerListView, AccountsReceivableManagerListView,
                    AccountsReceivableListView, AccountsPayableListView,
                    PresidentUpdateView, OperationalManagerUpdateView, AccountsReceivableManagerUpdateView,
                    AccountsReceivableUpdateView, AccountsPayableUpdateView,
                    PresidentDeleteView, OperationalManagerDeleteView, AccountsReceivableManagerDeleteView,
                    AccountsReceivableDeleteView, AccountsPayableDeleteView, AllEmployeesListView)


app_name = 'MainOffice'


urlpatterns = [
    # Create Views
    path('create/president/', PresidentCreateView.as_view(), name='all_employee_list'),
    path('create/operational_manager/', OperationalManagerCreateView.as_view(), name='all_employee_list'),
    path('create/accounts_receivable_manager/', AccountsReceivableManagerCreateView.as_view(), name='create_accounts_receivable_manager'),
    path('create/accounts_receivable/', AccountsReceivableCreateView.as_view(), name='create_accounts_receivable'),
    path('create/accounts_payable/', AccountsPayableCreateView.as_view(), name='create_accounts_payable'),

    # List Views
    path('list/president/', PresidentListView.as_view(), name='list_president'),
    path('list/operational_manager/', OperationalManagerListView.as_view(), name='list_operational_manager'),
    path('list/accounts_receivable_manager/', AccountsReceivableManagerListView.as_view(), name='list_accounts_receivable_manager'),
    path('list/accounts_receivable/', AccountsReceivableListView.as_view(), name='list_accounts_receivable'),
    path('list/accounts_payable/', AccountsPayableListView.as_view(), name='list_accounts_payable'),

    # Update Views
    path('update/president/<int:pk>/', PresidentUpdateView.as_view(), name='update_president'),
    path('update/operational_manager/<int:pk>/', OperationalManagerUpdateView.as_view(), name='update_operational_manager'),
    path('update/accounts_receivable_manager/<int:pk>/', AccountsReceivableManagerUpdateView.as_view(), name='update_accounts_receivable_manager'),
    path('update/accounts_receivable/<int:pk>/', AccountsReceivableUpdateView.as_view(), name='update_accounts_receivable'),
    path('update/accounts_payable/<int:pk>/', AccountsPayableUpdateView.as_view(), name='update_accounts_payable'),

    # Delete Views
    path('delete/president/<int:pk>/', PresidentDeleteView.as_view(), name='delete_president'),
    path('delete/operational_manager/<int:pk>/', OperationalManagerDeleteView.as_view(), name='delete_operational_manager'),
    path('delete/accounts_receivable_manager/<int:pk>/', AccountsReceivableManagerDeleteView.as_view(), name='delete_accounts_receivable_manager'),
    path('delete/accounts_receivable/<int:pk>/', AccountsReceivableDeleteView.as_view(), name='delete_accounts_receivable'),
    path('delete/accounts_payable/<int:pk>/', AccountsPayableDeleteView.as_view(), name='delete_accounts_payable'),

    path('all_employees/', AllEmployeesListView.as_view(), name='all_employees_list'),
]
