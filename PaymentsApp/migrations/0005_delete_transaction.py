# Generated by Django 4.2.4 on 2023-11-30 03:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('PaymentsApp', '0004_alter_transaction_order'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Transaction',
        ),
    ]