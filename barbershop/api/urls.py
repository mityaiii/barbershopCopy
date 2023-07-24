from django.urls import path
from . import views

urlpatterns = [
    path('market/', views.get_products, name="get_products"),
    path('news/', views.get_products, name="get_news"),
    path('market/<str:pk>/', views.get_products, name="get_products_item"),
    path('news/<str:pk>/', views.get_products, name="get_news_item"),
]
