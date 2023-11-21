# Generated by Django 4.2.4 on 2023-11-10 13:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='President',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, null=True)),
                ('phone_number', models.CharField(max_length=15, null=True)),
                ('age', models.PositiveIntegerField(null=True)),
                ('gender', models.PositiveSmallIntegerField(choices=[(1, 'MALE'), (2, 'FEMALE'), (3, 'OTHER')], null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='OperationalManager',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, null=True)),
                ('phone_number', models.CharField(max_length=15, null=True)),
                ('age', models.PositiveIntegerField(null=True)),
                ('gender', models.PositiveSmallIntegerField(choices=[(1, 'MALE'), (2, 'FEMALE'), (3, 'OTHER')], null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='AccountsReceivableManager',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, null=True)),
                ('phone_number', models.CharField(max_length=15, null=True)),
                ('age', models.PositiveIntegerField(null=True)),
                ('gender', models.PositiveSmallIntegerField(choices=[(1, 'MALE'), (2, 'FEMALE'), (3, 'OTHER')], null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='AccountsReceivable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, null=True)),
                ('phone_number', models.CharField(max_length=15, null=True)),
                ('age', models.PositiveIntegerField(null=True)),
                ('gender', models.PositiveSmallIntegerField(choices=[(1, 'MALE'), (2, 'FEMALE'), (3, 'OTHER')], null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='AccountsPayable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, null=True)),
                ('phone_number', models.CharField(max_length=15, null=True)),
                ('age', models.PositiveIntegerField(null=True)),
                ('gender', models.PositiveSmallIntegerField(choices=[(1, 'MALE'), (2, 'FEMALE'), (3, 'OTHER')], null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
