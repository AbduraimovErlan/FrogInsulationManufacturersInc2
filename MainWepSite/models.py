from django.core.exceptions import ValidationError
from django.db import models
from django.db.models import Q
from django.utils.text import slugify

# Модель для категории
class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    meta_description = models.TextField(blank=True, null=True)
    meta_keywords = models.TextField(blank=True, null=True)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


# Модель для бренда
class Brand(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    meta_description = models.TextField(blank=True, null=True)
    meta_keywords = models.TextField(blank=True, null=True)
    slug = models.SlugField(unique=True, blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

# Модель для размеров и других характеристик
class ProductSpecification(models.Model):
    length = models.FloatField(null=True, blank=True)
    width = models.FloatField(null=True, blank=True)
    height = models.FloatField(null=True, blank=True)
    # Добавьте другие поля по необходимости

    def __str__(self):
        return f"Specification #{self.id}"

# Модель для товара
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    sku = models.CharField(max_length=50, unique=True)  # Уникальный SKU
    stock_quantity = models.IntegerField()
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, related_name='products', on_delete=models.CASCADE)
    specification = models.OneToOneField(ProductSpecification, related_name='product', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    rating = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)  # Средний рейтинг
    sales_count = models.IntegerField(default=0)  # Количество проданных единиц
    meta_description = models.TextField(blank=True, null=True)
    meta_keywords = models.TextField(blank=True, null=True)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


    def get_related_products(self, limit=5):
        return Product.objects.filter(category=self.category) \
                   .exclude(id=self.id) \
                   .order_by('-rating', '-sales_count')[:limit]


    def __str__(self):
        return f"{self.sku} - {self.name}"

    @classmethod
    def search(cls, query):
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
    image = models.ImageField(upload_to='product_images/')
    is_main = models.BooleanField(default=False)
    alt_text = models.CharField(max_length=255, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.product and not self.variant:
            raise ValidationError('Image must be related to a product or a variant.')
        super().save(*args, **kwargs)

    def __str__(self):
        if self.product:
            return f"Image for {self.product.name}"
        elif self.variant:
            return f"Image for variant {self.variant.id} of {self.variant.product.name}"


# Модель для атрибутов (например, "размер", "цвет")
class Attribute(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Модель для значений атрибутов (например, "S", "M", "L" для размера)
class AttributeValue(models.Model):
    attribute = models.ForeignKey(Attribute, related_name='values', on_delete=models.CASCADE)
    value = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.attribute.name}: {self.value}"

# Модель для вариантов продукта
class ProductVariant(models.Model):
    product = models.ForeignKey(Product, related_name='variants', on_delete=models.CASCADE)
    attributes = models.ManyToManyField(AttributeValue)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock_quantity = models.IntegerField()

    def __str__(self):
        attributes_str = ", ".join(str(attr) for attr in self.attributes.all())
        return f"{self.product.name} - {attributes_str}"



class Wishlist(models.Model):
    user = models.OneToOneField('auth.User', related_name='wishlist', on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, related_name='wishlists')


# Модель для заказа
class Order(models.Model):
    STATUS_CHOICES = (
        ('Preparing', 'Preparing'),
        ('Shipped', 'Shipped'),
        ('Completed', 'Completed'),
    )

    customer_name = models.CharField(max_length=100)
    customer_email = models.EmailField()
    customer_phone = models.CharField(max_length=15)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Preparing')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order #{self.id} - {self.customer_name}"

# Модель для истории статусов заказа
class OrderStatusHistory(models.Model):
    order = models.ForeignKey('Order', related_name='status_history', on_delete=models.CASCADE)
    status = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.order.id} changed to {self.status} at {self.timestamp}"

# Модель для элемента заказа
class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='order_items', on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"OrderItem #{self.id} for Order #{self.order.id}"

# Модель для трекинга геолокации заказа
class OrderTracking(models.Model):
    order = models.OneToOneField('Order', related_name='tracking', on_delete=models.CASCADE)
    latitude = models.FloatField()
    longitude = models.FloatField()
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order #{self.order.id} last seen at ({self.latitude}, {self.longitude})"

# Модель для агрегированных данных о движении заказа
class OrderTrackingHistory(models.Model):
    tracking = models.ForeignKey('OrderTracking', related_name='history', on_delete=models.CASCADE)
    latitude = models.FloatField()
    longitude = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.tracking.order.id} was at ({self.latitude}, {self.longitude}) at {self.timestamp}"

# Модель для отзывов
class Review(models.Model):
    product = models.ForeignKey(Product, related_name='reviews', on_delete=models.CASCADE)
    order = models.ForeignKey(Order, related_name='reviews', on_delete=models.CASCADE, null=True, blank=True)  # новое поле
    author = models.CharField(max_length=100)
    email = models.EmailField()  # Убран уникальный индекс
    content = models.TextField()
    rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Review by {self.author} for {self.product.name}"

# Модель для комментариев к отзывам
class Comment(models.Model):
    review = models.ForeignKey(Review, related_name='comments', on_delete=models.CASCADE)
    author = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.author} for review #{self.review.id}"


# Модель для корзины
class Cart(models.Model):
    user = models.OneToOneField('auth.User', related_name='cart', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Cart of {self.user.username}"

# Модель для элемента в корзине
class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='cart_items', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.product.name} ({self.quantity})"

    def total_price(self):
        return self.product.price * self.quantity


class ProductViewLog(models.Model):
    user = models.ForeignKey('auth.User', related_name='viewed_products', null=True, on_delete=models.SET_NULL)
    product = models.ForeignKey(Product, related_name='views', on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)


class ProductPurchaseLog(models.Model):
    user = models.ForeignKey('auth.User', related_name='purchased_products', null=True, on_delete=models.SET_NULL)
    product = models.ForeignKey(Product, related_name='purchases', on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)




