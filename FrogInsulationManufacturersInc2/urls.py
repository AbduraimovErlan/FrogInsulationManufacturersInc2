from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('MainWepSite.urls', namespace='MainWepSite')),
    path('', include('orders.urls', namespace='orders')),
    path('', include('MainOffice.urls', namespace='MainOffice')),
    path('', include('Warehouse1.urls', namespace='Warehouse1')),
    path("select2/", include("django_select2.urls")),
    path('', include('custom_users.urls', namespace='custom_users')),
    path('', include('PaymentsApp.urls')),
    path('', include('paypal.standard.ipn.urls'))

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

