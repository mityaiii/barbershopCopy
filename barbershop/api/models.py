from django.db import models


class ProductTagModel(models.Model):
    body = models.CharField(max_length=150, unique=True)

    def __str__(self):
        return self.body[0:50]


class ProductModel(models.Model):
    title = models.CharField(max_length=150)
    photo = models.ImageField(null=True, blank=True, upload_to='images/')
    quantity = models.PositiveIntegerField()
    price = models.PositiveIntegerField()
    available = models.BooleanField()
    description = models.TextField()
    tags = models.ManyToManyField(ProductTagModel)

    def __str__(self):
        return self.title[0:50]


class NewsTagModel(models.Model):
    body = models.CharField(max_length=150, unique=True)

    def __str__(self):
        return self.body[0:50]


class NewsModel(models.Model):
    title = models.CharField(max_length=150)
    photo = models.ImageField(null=True, blank=True, upload_to='images/')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField(NewsTagModel)

    def __str__(self):
        return self.title[0:50]
