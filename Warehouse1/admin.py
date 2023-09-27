from django.contrib import admin
from .models import WarehouseSupervisor, WarehouseWorker, Driver, WarehouseWorkerDriver

admin.site.register(WarehouseSupervisor)
admin.site.register(WarehouseWorker)
admin.site.register(Driver)
admin.site.register(WarehouseWorkerDriver)

