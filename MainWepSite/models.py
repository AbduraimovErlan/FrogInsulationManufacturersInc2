from django.core.exceptions import ValidationError
from django.db import models
from django.db.models import Q
from django.utils.text import slugify
from django.db.models import Max


# Модель для категории
class Category(models.Model):
    name = models.CharField(max_length=100)  # Название категории
    description = models.TextField(blank=True, null=True)  # Описание категории (необязательное поле)
    meta_description = models.TextField(blank=True, null=True)  # Мета-описание для SEO (необязательное поле)
    meta_keywords = models.TextField(blank=True, null=True)  # Мета-ключевые слова для SEO (необязательное поле)
    slug = models.SlugField(unique=True, blank=True)  # Уникальное поле-слаг для URL

    def save(self, *args, **kwargs):
        # Генерация slug на основе имени, если его нет
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name  # Возвращает название категории при обращении к объекту


class Brand(models.Model):
    name = models.CharField(max_length=100)  # Название бренда
    description = models.TextField(blank=True, null=True)  # Описание бренда (необязательное поле)
    meta_description = models.TextField(blank=True, null=True)  # Мета-описание для SEO (необязательное поле)
    meta_keywords = models.TextField(blank=True, null=True)  # Мета-ключевые слова для SEO (необязательное поле)
    slug = models.SlugField(unique=True, blank=True, null=True)  # Уникальный поле-слаг для URL

    def save(self, *args, **kwargs):
        # Генерация slug на основе имени, если его нет
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name  # Возвращает название бренда при обращении к объекту


class ProductSpecification(models.Model):
    length = models.FloatField(null=True, blank=True)  # Длина продукта (необязательное поле)
    width = models.FloatField(null=True, blank=True)   # Ширина продукта (необязательное поле)
    height = models.FloatField(null=True, blank=True)  # Высота продукта (необязательное поле)
    # Вы можете добавить другие поля по необходимости, чтобы хранить характеристики продукта.

    def __str__(self):
        return f"Specification #{self.id}"  # Возвращает строку с номером спецификации при обращении к объекту


# Модель для товара
class Product(models.Model):
    name = models.CharField(max_length=100)  # Название продукта (максимум 100 символов)
    description = models.TextField()  # Описание продукта
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Цена продукта
    sku = models.CharField(max_length=50, unique=True)  # Уникальный SKU (артикул) продукта
    stock_quantity = models.IntegerField()  # Количество в наличии
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)  # Категория продукта
    brand = models.ForeignKey(Brand, related_name='products', on_delete=models.CASCADE)  # Бренд продукта
    specification = models.OneToOneField(ProductSpecification, related_name='product', on_delete=models.CASCADE)  # Характеристики продукта
    image = models.ImageField(upload_to='products/', null=True, blank=True)  # Изображение продукта (может быть пустым)
    rating = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)  # Средний рейтинг продукта (по умолчанию 0.0)
    sales_count = models.IntegerField(default=0)  # Количество проданных единиц (по умолчанию 0)
    meta_description = models.TextField(blank=True, null=True)  # Мета-описание (может быть пустым)
    meta_keywords = models.TextField(blank=True, null=True)  # Мета-ключевые слова (может быть пустым)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # Цена со скидкой (может быть пустой)
    slug = models.SlugField(unique=True, blank=True)  # Уникальный slug (для URL) продукта (может быть пустым)
    likes = models.PositiveIntegerField(default=0, blank=True, null=True)  # Количество лайков (по умолчанию 0, может быть пустым)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)

        # Если у продукта есть изображение, но нет главного изображения в ProductImage, создаем его
        if self.image and not ProductImage.objects.filter(product=self, is_main=True).exists():
            product_image = ProductImage(product=self, image=self.image, is_main=True)
            product_image.save()

        super().save(*args, **kwargs)

    def get_related_products(self, limit=5):
        """
        Возвращает связанные продукты в пределах той же категории, исключая текущий продукт.
        Отсортировано по рейтингу и количеству продаж.
        :param limit: Максимальное количество возвращаемых продуктов.
        """
        return Product.objects.filter(category=self.category) \
                   .exclude(id=self.id) \
                   .order_by('-rating', '-sales_count')[:limit]

    def __str__(self):
        return f"{self.sku} - {self.name}"  # Возвращает строку, представляющую продукт.

    @classmethod
    def search(cls, query):
        """
        Поиск продуктов по заданному запросу, включая имя, описание, категорию и бренд.
        :param query: Запрос для поиска.
        """
        return cls.objects.filter(
            Q(name__icontains=query) |
            Q(description__icontains=query) |
            Q(category__name__icontains=query) |
            Q(brand__name__icontains=query)
        )


# Дополнительная модель для хранения изображений продуктов
class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name='images', null=True, blank=True, on_delete=models.CASCADE)
    variant = models.ForeignKey('ProductVariant', related_name='images', null=True, blank=True, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images/')  # Поле для загрузки изображения продукта
    is_main = models.BooleanField(default=False)  # Флаг для обозначения главного изображения продукта
    alt_text = models.CharField(max_length=255, null=True, blank=True)  # Альтернативный текст для изображения

    def save(self, *args, **kwargs):
        # Проверяем, что изображение связано хотя бы с продуктом или вариантом
        if not self.product and not self.variant:
            raise ValidationError('Image must be related to a product or a variant.')
        super().save(*args, **kwargs)

    def __str__(self):
        if self.product:
            return f"Image for {self.product.name}"  # Возвращает строку, представляющую изображение продукта
        elif self.variant:
            return f"Image for variant {self.variant.id} of {self.variant.product.name}"  # Возвращает строку, представляющую изображение варианта продукта

# Модель для атрибутов (например, "размер", "цвет")
class Attribute(models.Model):
    name = models.CharField(max_length=100)  # Название атрибута

    def __str__(self):
        return self.name  # Возвращает название атрибута в виде строки

# Модель для значений атрибутов (например, "S", "M", "L" для размера)
class AttributeValue(models.Model):
    attribute = models.ForeignKey(Attribute, related_name='values', on_delete=models.CASCADE)  # Связь с атрибутом
    value = models.CharField(max_length=100)  # Значение атрибута

    def __str__(self):
        return f"{self.attribute.name}: {self.value}"  # Возвращает строку вида "Название атрибута: Значение атрибута"

# Модель для вариантов продукта
class ProductVariant(models.Model):
    product = models.ForeignKey(Product, related_name='variants', on_delete=models.CASCADE)  # Связь с продуктом
    attributes = models.ManyToManyField(AttributeValue)  # Связь с значениями атрибутов
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Цена варианта продукта
    stock_quantity = models.IntegerField()  # Количество товара в наличии
    variant_index = models.PositiveIntegerField(default=0, null=True)  # Индекс варианта (новое поле)

    def __str__(self):
        attributes_str = ", ".join(str(attr) for attr in self.attributes.all())  # Преобразует значения атрибутов в строку
        return f"{self.product.name} - {attributes_str}"  # Возвращает строку, представляющую вариант продукта

    class Meta:
        unique_together = ('product', 'variant_index')  # Уникальность комбинации "продукт" и "индекс варианта"

    def save(self, *args, **kwargs):
        # Если это новый объект (не из базы данных)
        if not self.pk:
            # Получаем максимальное значение variant_index для этого продукта
            max_index = ProductVariant.objects.filter(product=self.product).aggregate(Max('variant_index'))[
                'variant_index__max']
            # Если такового нет (это первый вариант), установим его в 1. В противном случае увеличим на 1.
            self.variant_index = max_index + 1 if max_index else 1

        super(ProductVariant, self).save(*args, **kwargs)  # Сохраняет объект в базе данных с учетом нового индекса варианта



# Модель для корзины
class Cart(models.Model):
    user = models.OneToOneField('auth.User', related_name='cart', on_delete=models.CASCADE)  # Связь с пользователем
    created_at = models.DateTimeField(auto_now_add=True)  # Дата и время создания корзины
    updated_at = models.DateTimeField(auto_now=True)  # Дата и время последнего обновления корзины

    def __str__(self):
        return f"Cart of {self.user.username}"  # Возвращает строку, представляющую корзину

# Модель для элемента в корзине
class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name='items', on_delete=models.CASCADE)  # Связь с корзиной
    product = models.ForeignKey(Product, related_name='cart_items', on_delete=models.CASCADE)  # Связь с продуктом
    quantity = models.IntegerField(default=1)  # Количество товара в корзине (по умолчанию 1)

    def __str__(self):
        return f"{self.product.name} ({self.quantity})"  # Возвращает строку, представляющую элемент корзины

    def total_price(self):
        return self.product.price * self.quantity  # Вычисляет общую стоимость товара в этом элементе корзины



# Модель для списка желаний
class Wishlist(models.Model):
    user = models.OneToOneField('auth.User', related_name='wishlist', on_delete=models.CASCADE)  # Связь с пользователем
    products = models.ManyToManyField(Product, related_name='wishlists')  # Связь с товарами в списке желаний

    def add_product(self, product):
        self.products.add(product)  # Метод для добавления товара в список желаний

    def remove_product(self, product):
        self.products.remove(product)  # Метод для удаления товара из списка желаний

    def __str__(self):
        return f"Wishlist of {self.user.username} - {self.products.count()} items"  # Возвращает строку, представляющую список желаний пользователя


# Модель для заказа
class Order(models.Model):
    STATUS_CHOICES = (
        ('Preparing', 'Preparing'),  # Статус: Подготовка
        ('Shipped', 'Shipped'),      # Статус: Отправлен
        ('Completed', 'Completed'),  # Статус: Завершен
    )

    customer_name = models.CharField(max_length=100)  # Имя заказчика
    customer_email = models.EmailField()  # Email заказчика
    customer_phone = models.CharField(max_length=15)  # Телефон заказчика
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Preparing')  # Статус заказа
    created_at = models.DateTimeField(auto_now_add=True)  # Дата создания заказа
    updated_at = models.DateTimeField(auto_now=True)  # Дата последнего обновления заказа

    def __str__(self):
        return f"Order #{self.id} - {self.customer_name}"  # Возвращает строку, представляющую заказ

# Модель для истории статусов заказа
class OrderStatusHistory(models.Model):
    order = models.ForeignKey('Order', related_name='status_history', on_delete=models.CASCADE)  # Связь с заказом
    status = models.CharField(max_length=50)  # Статус заказа
    timestamp = models.DateTimeField(auto_now_add=True)  # Дата и время изменения статуса заказа

    def __str__(self):
        return f"Order #{self.order.id} changed to {self.status} at {self.timestamp}"  # Возвращает строку, представляющую историю статусов заказа

# Модель для элемента заказа
class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)  # Связь с заказом
    product = models.ForeignKey(Product, related_name='order_items', on_delete=models.CASCADE)  # Связь с продуктом
    quantity = models.IntegerField()  # Количество продуктов в заказе
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Цена продукта

    def __str__(self):
        return f"OrderItem #{self.id} for Order #{self.order.id}"  # Возвращает строку, представляющую элемент заказа

# Модель для трекинга геолокации заказа
class OrderTracking(models.Model):
    order = models.OneToOneField('Order', related_name='tracking', on_delete=models.CASCADE)  # Связь с заказом
    latitude = models.FloatField()  # Широта
    longitude = models.FloatField()  # Долгота
    last_updated = models.DateTimeField(auto_now=True)  # Дата и время последнего обновления данных о местоположении заказа

    def __str__(self):
        return f"Order #{self.order.id} last seen at ({self.latitude}, {self.longitude})"  # Возвращает строку, представляющую местоположение заказа

# Модель для агрегированных данных о движении заказа
class OrderTrackingHistory(models.Model):
    tracking = models.ForeignKey('OrderTracking', related_name='history', on_delete=models.CASCADE)  # Связь с данными о местоположении заказа
    latitude = models.FloatField()  # Широта
    longitude = models.FloatField()  # Долгота
    timestamp = models.DateTimeField(auto_now_add=True)  # Дата и время записи данных о местоположении заказа

    def __str__(self):
        return f"Order #{self.tracking.order.id} was at ({self.latitude}, {self.longitude}) at {self.timestamp}"  # Возвращает строку, представляющую историю движения заказа



# Модель для отзывов
class Review(models.Model):
    product = models.ForeignKey(Product, related_name='reviews', on_delete=models.CASCADE)  # Связь с продуктом, к которому относится отзыв
    order = models.ForeignKey(Order, related_name='reviews', on_delete=models.CASCADE, null=True, blank=True)  # Связь с заказом (если отзыв связан с заказом)
    author = models.CharField(max_length=100)  # Автор отзыва
    email = models.EmailField()  # Email автора (убран уникальный индекс)
    content = models.TextField()  # Текст отзыва
    rating = models.IntegerField()  # Рейтинг отзыва (например, оценка от 1 до 5)
    created_at = models.DateTimeField(auto_now_add=True)  # Дата и время создания отзыва
    updated_at = models.DateTimeField(auto_now=True)  # Дата и время последнего обновления отзыва

    def __str__(self):
        return f"Review by {self.author} for {self.product.name}"  # Возвращает строку, представляющую отзыв

# Модель для комментариев к отзывам
class Comment(models.Model):
    review = models.ForeignKey(Review, related_name='comments', on_delete=models.CASCADE)  # Связь с отзывом
    author = models.CharField(max_length=100)  # Автор комментария
    content = models.TextField()  # Текст комментария
    created_at = models.DateTimeField(auto_now_add=True)  # Дата и время создания комментария

    def __str__(self):
        return f"Comment by {self.author} for review #{self.review.id}"  # Возвращает строку, представляющую комментарий к отзыву


# Модель для записи просмотров продуктов
class ProductViewLog(models.Model):
    user = models.ForeignKey('auth.User', related_name='viewed_products', null=True, on_delete=models.SET_NULL)  # Связь с пользователем (если он авторизован)
    product = models.ForeignKey(Product, related_name='views', on_delete=models.CASCADE)  # Связь с просматриваемым продуктом
    timestamp = models.DateTimeField(auto_now_add=True)  # Дата и время просмотра

# Модель для записи покупок продуктов
class ProductPurchaseLog(models.Model):
    user = models.ForeignKey('auth.User', related_name='purchased_products', null=True, on_delete=models.SET_NULL)  # Связь с пользователем (если он авторизован)
    product = models.ForeignKey(Product, related_name='purchases', on_delete=models.CASCADE)  # Связь с купленным продуктом
    timestamp = models.DateTimeField(auto_now_add=True)  # Дата и время покупки



