from django.db import models

class WarehouseEmployee(models.Model):
    name = models.CharField(max_length=100)
    # Другие общие поля и методы для всех сотрудников

    class Meta:
        abstract = True

    def can_manage(self, other_employee):
        # Если текущий сотрудник начальник склада, он может управлять всеми
        if isinstance(self, WarehouseSupervisor):
            return True

        # Все остальные сотрудники не могут управлять другими
        return False


class WarehouseSupervisor(WarehouseEmployee):
    # Дополнительные поля и методы для начальника склада
    pass



class WarehouseWorker(WarehouseEmployee):
    # Дополнительные поля и методы для рабочего склада
    pass





class Driver(WarehouseEmployee):
    # Дополнительные поля и методы для водителя
    pass




class WarehouseWorkerDriver(WarehouseEmployee):
    # Дополнительные поля и методы для сотрудника, который является и рабочим склада, и водителем
    pass


