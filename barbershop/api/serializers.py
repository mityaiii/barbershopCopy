from rest_framework.serializers import ModelSerializer
from . import models


class ProductTagSerializer(ModelSerializer):
    class Meta:
        model = models.ProductTagModel
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    class Meta:
        model = models.ProductModel
        fields = '__all__'


class NewsTagSerializer(ModelSerializer):
    class Meta:
        model = models.NewsTagModel
        fields = '__all__'


class NewsSerializer(ModelSerializer):
    class Meta:
        model = models.NewsModel
        fields = '__all__'
