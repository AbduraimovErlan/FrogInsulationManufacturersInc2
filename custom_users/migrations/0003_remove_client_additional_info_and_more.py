# Generated by Django 4.2.4 on 2023-11-20 17:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('custom_users', '0002_remove_clientlevelreferralpercentage_client_level_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='additional_info',
        ),
        migrations.RemoveField(
            model_name='client',
            name='address_line1',
        ),
        migrations.RemoveField(
            model_name='client',
            name='address_line2',
        ),
        migrations.RemoveField(
            model_name='client',
            name='city',
        ),
        migrations.RemoveField(
            model_name='client',
            name='company_name',
        ),
        migrations.RemoveField(
            model_name='client',
            name='country',
        ),
        migrations.RemoveField(
            model_name='client',
            name='postal_code',
        ),
        migrations.RemoveField(
            model_name='client',
            name='state',
        ),
        migrations.CreateModel(
            name='DeliveryAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(blank=True, max_length=100, verbose_name='Company Name')),
                ('address_line1', models.CharField(max_length=100, verbose_name='Address Line 1')),
                ('address_line2', models.CharField(blank=True, max_length=100, verbose_name='Address Line 2')),
                ('city', models.CharField(max_length=100, verbose_name='City')),
                ('state', models.CharField(max_length=100, verbose_name='State')),
                ('country', models.CharField(max_length=100, verbose_name='Country')),
                ('postal_code', models.CharField(max_length=20, verbose_name='Postal Code')),
                ('additional_info', models.TextField(blank=True, verbose_name='Additional Information')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='delivery_addresses', to='custom_users.client')),
            ],
        ),
    ]
