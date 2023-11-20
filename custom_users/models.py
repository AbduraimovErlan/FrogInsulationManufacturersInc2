from django.db import models
from django.contrib.auth.models import User

MALE = 1
FEMALE = 2
OTHER = 3
GENDER_TYPE = (
    (MALE, 'Male'),
    (FEMALE, 'Female'),
    (OTHER, 'Other')
)

class Client(User):
    customer_name = models.CharField(max_length=100, verbose_name='Customer Name', blank=True, null=True)
    customer_email = models.EmailField(verbose_name='Customer Email', blank=True, null=True)
    customer_phone = models.CharField(max_length=100, verbose_name='Customer Phone', blank=True, null=True)
    age = models.PositiveIntegerField(verbose_name='Age', blank=True, null=True)
    gender = models.IntegerField(choices=GENDER_TYPE, verbose_name='Gender', blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True, verbose_name='Avatar')
    registration_date = models.DateField(auto_now_add=True, verbose_name='Registration Date')

    def __str__(self):
        return self.username
