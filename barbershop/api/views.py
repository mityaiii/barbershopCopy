from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from . import serializers
from . import models


@api_view(['GET'])
def get_products(request):
    products = models.ProductModel.objects.all()
    serializer = serializers.ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_product_item(request, pk):
    product = models.ProductModel.objects.get(id=pk)
    serializer = serializers.ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def get_news(request):
    news = models.NewsModel.objects.all()
    serializer = serializers.NewsSerializer(news, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_news_item(request, pk):
    news = models.NewsModel.objects.get(id=pk)
    serializer = serializers.NewsSerializer(news, many=False)
    return Response(serializer.data)
