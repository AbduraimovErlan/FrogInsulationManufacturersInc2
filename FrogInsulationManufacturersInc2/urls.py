from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('MainWepSite.urls', namespace='MainWepSite')),  # подключаем urls приложения
    path('', include('orders.urls', namespace='orders')),  # подключаем urls приложения
    path('', include('MainOffice.urls', namespace='MainOffice')),  # подключаем urls приложения
    # path('users/', include('custom_users.urls', namespace='custom_users')),  # подключаем urls приложения
    # Можно добавить другие приложения по аналогии
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

