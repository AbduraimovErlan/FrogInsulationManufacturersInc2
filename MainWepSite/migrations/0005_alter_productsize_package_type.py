# Generated by Django 4.2.4 on 2023-11-13 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainWepSite', '0004_alter_productsize_package_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productsize',
            name='package_type',
            field=models.CharField(choices=[('bx', 'bx'), ('each', 'each'), ('-', '-')], default='-', max_length=10, null=True),
        ),
    ]