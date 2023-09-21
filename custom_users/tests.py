from django.test import TestCase

# Create your tests here.
# def product_detail(request, slug):
#     product = get_object_or_404(Product, slug=slug)
#
#     # Если у продукта есть главное изображение, используем его
#     if product.image:
#         main_image = product.image
#     else:
#         main_image_obj = ProductImage.objects.filter(product=product, is_main=True).first()
#         if main_image_obj:  # Если есть указанное главное изображение в ProductImage
#             main_image = main_image_obj.image
#         else:  # Если главное изображение не указано, выберем первое изображение из ProductImage
#             first_image_obj = ProductImage.objects.filter(product=product).first()
#             main_image = first_image_obj.image if first_image_obj else None
#
#     # Получение дополнительных изображений (исключая главное)
#     additional_images = ProductImage.objects.filter(product=product).exclude(image=main_image)
#     print(product)
#     print(main_image)
#     print(additional_images)
#
#     context = {
#         'product': product,
#         'main_image': main_image,
#         'additional_images': additional_images
#     }
#
#     return render(request, 'product_detail.html', context)