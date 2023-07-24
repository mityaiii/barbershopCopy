from django.contrib import admin
from . import models

admin.site.register(models.ProductTagModel)
admin.site.register(models.ProductModel)
admin.site.register(models.NewsTagModel)
admin.site.register(models.NewsModel)
