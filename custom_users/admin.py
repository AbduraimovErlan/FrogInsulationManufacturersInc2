from django.contrib import admin
from .models import (CompanyFund, ClientLevel, ReferralConfig, ClientLevelReferralPercentage, Client, CompanyRepresentative, Transaction)

# Админка для CompanyFund
@admin.register(CompanyFund)
class CompanyFundAdmin(admin.ModelAdmin):
    list_display = ('id', 'total_points',)


# Админка для ClientLevel
@admin.register(ClientLevel)
class ClientLevelAdmin(admin.ModelAdmin):
    list_display = ('name', 'required_points',)


# Админка для ReferralConfig
@admin.register(ReferralConfig)
class ReferralConfigAdmin(admin.ModelAdmin):
    list_display = ('first_level_percentage', 'second_level_percentage', 'purchase_percentage_to_fund', 'system_active',)


# Админка для ClientLevelReferralPercentage
@admin.register(ClientLevelReferralPercentage)
class ClientLevelReferralPercentageAdmin(admin.ModelAdmin):
    list_display = ('client_level', 'referral_percentage',)


# Админка для Client
@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('username', 'phone_number', 'age', 'gender', 'registration_date', 'client_level', 'points', 'referrer', 'referral_program_active', 'points_system_active', 'manual_level_set', 'is_company',)


# Админка для CompanyRepresentative
@admin.register(CompanyRepresentative)
class CompanyRepresentativeAdmin(admin.ModelAdmin):
    list_display = ('client', 'name', 'phone_number', 'email',)


# Админка для Transaction (если вы добавите дополнительные поля, обязательно обновите list_display)
@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('client', 'representative',)  # Обновите этот список, если добавите дополнительные поля


