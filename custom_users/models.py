from django.core.exceptions import ValidationError
from django.db import models
from django.contrib.auth.models import User
from django.db import transaction
from django.contrib.auth.models import Group
from django.contrib.auth.hashers import make_password, check_password

MALE = 1
FEMALE = 2
OTHER = 3
GENDER_TYPE = (
    (MALE, 'Male'),
    (FEMALE, 'Female'),
    (OTHER, 'Other')
)

STANDARD = 0
BRONZE = 1
SILVER = 2
GOLD = 3
VIP = 4
CLIENT_LEVELS = (
    (STANDARD, 'Standard'),
    (BRONZE, 'Bronze'),
    (SILVER, 'Silver'),
    (GOLD, 'Gold'),
    (VIP, 'VIP'),
)


class CompanyFund(models.Model):
    total_points = models.PositiveIntegerField(default=0, verbose_name='Total Points in Fund')

    @classmethod
    def add_points(cls, points):
        fund, created = cls.objects.get_or_create(
            id=1)  # Необходимо удостовериться, что существует только один экземпляр
        fund.total_points += points
        fund.save()


class ClientLevel(models.Model):
    name = models.CharField(max_length=50, verbose_name="Client Level")
    required_points = models.PositiveIntegerField(verbose_name="Required Points")

    def __str__(self):
        return self.name

class ReferralConfig(models.Model):
    first_level_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=2.0, verbose_name="First level referral percentage")
    second_level_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=1.0, verbose_name="Second level referral percentage")
    purchase_percentage_to_fund = models.DecimalField(max_digits=5, decimal_places=2, default=5.0, verbose_name="Percentage of purchase to the fund")
    system_active = models.BooleanField(default=True, verbose_name='Referral System Active')  # Глобальный переключатель

    class Meta:
        verbose_name = "Referral Configuration"
        verbose_name_plural = "Referral Configurations"

    def save(self, *args, **kwargs):
        if not self.pk and ReferralConfig.objects.exists():
            raise ValidationError('There can be only one ReferralConfig instance')
        return super(ReferralConfig, self).save(*args, **kwargs)


class ClientLevelReferralPercentage(models.Model):
    client_level = models.OneToOneField(ClientLevel, on_delete=models.CASCADE, verbose_name="Client Level")
    referral_percentage = models.DecimalField(max_digits=5, decimal_places=2, verbose_name="Referral Percentage")

    class Meta:
        verbose_name = "Client Level Referral Percentage"
        verbose_name_plural = "Client Level Referral Percentages"



class Client(User):
    phone_number = models.CharField(max_length=100, verbose_name='Phone Number')
    age = models.PositiveIntegerField(verbose_name='Age')
    gender = models.IntegerField(choices=GENDER_TYPE, verbose_name='Gender')
    address = models.TextField(blank=True, null=True, verbose_name='Address')
    registration_date = models.DateField(auto_now_add=True, verbose_name='Registration Date')
    client_level = models.IntegerField(choices=CLIENT_LEVELS, default=STANDARD, verbose_name='Client Level')
    points = models.PositiveIntegerField(default=0, verbose_name='Points')
    referrer = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL,
                                 related_name='referred_clients', verbose_name='Referrer')
    referral_program_active = models.BooleanField(default=True, verbose_name='Referral Program Active')
    current_level = models.ForeignKey(ClientLevel, on_delete=models.SET_NULL, null=True, blank=True,
                                      verbose_name="Current Level")
    points_system_active = models.BooleanField(default=True, verbose_name='Points System Active')
    manual_level_set = models.BooleanField(default=False, verbose_name='Level Set Manually')
    referred_clients_count = models.PositiveIntegerField(default=0, verbose_name='Referred Clients Count')
    withdrawal_possible = models.BooleanField(default=False, verbose_name='Can Withdraw Funds')
    is_company = models.BooleanField(default=False, verbose_name='Is Company')
    company_password_hash = models.CharField(max_length=128, verbose_name='Company Password Hash')

    def set_company_password(self, password):
        self.company_password_hash = make_password(password)

    def check_company_password(self, password):
        return check_password(password, self.company_password_hash)



    def upgrade_client_level(self):
        if self.manual_level_set:
            return

        levels = ClientLevel.objects.order_by('-required_points')
        for level in levels:
            if self.points >= level.required_points:
                self.current_level = level
                self.save()
                break

    def add_points(self, amount):
        config = ReferralConfig.objects.first()
        if not config:
            raise ValueError("ReferralConfig is not set. Points addition aborted.")
        if not config.system_active or not self.points_system_active:
            return

        with transaction.atomic():
            self.points += amount
            self.upgrade_client_level()
            self.save()

            CompanyFund.add_points(amount * (config.purchase_percentage_to_fund / 100))

            if not self.referrer:
                CompanyFund.add_points(amount * (config.first_level_percentage / 100))
                CompanyFund.add_points(amount * (config.second_level_percentage / 100))
                return

            # Изменение здесь
            referral_percentage = ClientLevelReferralPercentage.objects.get(
                client_level=self.referrer.current_level).referral_percentage
            self.referrer.points += amount * (referral_percentage / 100)
            self.referrer.upgrade_client_level()

            if self.referrer.referrer:
                referrer_of_referrer_percentage = ClientLevelReferralPercentage.objects.get(
                    client_level=self.referrer.referrer.current_level).referral_percentage
                self.referrer.referrer.points += amount * (referrer_of_referrer_percentage / 100)
                self.referrer.referrer.upgrade_client_level()
                self.referrer.referrer.save()

            self.referrer.referred_clients_count += 1
            self.referrer.check_withdrawal_possibility()
            self.referrer.save()

    def check_withdrawal_possibility(self):
        # Если клиент пригласил минимум 2 человека и у каждого из них есть баллы (заказы)
        if self.referred_clients_count >= 2:
            active_referred_clients = self.referred_clients.filter(points__gt=0).count()
            if active_referred_clients >= 2:
                self.withdrawal_possible = True
                self.save()

    def is_company_representative(self):
        return self.groups.filter(name="Company Representatives").exists()


class CompanyRepresentative(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='representatives', verbose_name='Client')
    name = models.CharField(max_length=200, verbose_name='Representative Name')
    phone_number = models.CharField(max_length=100, verbose_name='Phone Number')
    email = models.EmailField(verbose_name='Email')
    representative_password_hash = models.CharField(max_length=128, verbose_name='Representative Password Hash')
    # Добавьте любые другие поля, которые вам необходимы

    def set_representative_password(self, password):
        self.representative_password_hash = make_password(password)

    def check_representative_password(self, password):
        return check_password(password, self.representative_password_hash)

    def save(self, *args, **kwargs):
        super(CompanyRepresentative, self).save(*args, **kwargs)

        group, created = Group.objects.get_or_create(name="Company Representatives")
        self.client.groups.add(group)


class Transaction(models.Model):  # Просто пример, у вас может быть другое название
    client = models.ForeignKey(Client, on_delete=models.CASCADE, verbose_name='Client')
    representative = models.ForeignKey(CompanyRepresentative, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Company Representative')

