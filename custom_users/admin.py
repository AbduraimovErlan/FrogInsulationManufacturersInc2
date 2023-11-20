from django.contrib import admin
from .models import Client

class ClientAdmin(admin.ModelAdmin):
    list_display = ('username', 'customer_name', 'customer_email', 'customer_phone', 'age', 'gender', 'registration_date', 'avatar')
    search_fields = ('username', 'customer_name', 'customer_email', 'customer_phone')
    list_filter = ('gender',)
    readonly_fields = ('registration_date',)

admin.site.register(Client, ClientAdmin)


