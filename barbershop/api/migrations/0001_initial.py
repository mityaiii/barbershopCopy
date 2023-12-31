# Generated by Django 4.2.3 on 2023-07-24 16:36

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="NewsTagModel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("body", models.CharField(max_length=150, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="ProductTagModel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("body", models.CharField(max_length=150, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="ProductModel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=150)),
                ("quantity", models.PositiveIntegerField()),
                ("price", models.PositiveIntegerField()),
                ("available", models.BooleanField()),
                ("description", models.TextField()),
                ("tags", models.ManyToManyField(to="api.producttagmodel")),
            ],
        ),
        migrations.CreateModel(
            name="NewsModel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=150)),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
                ("tags", models.ManyToManyField(to="api.newstagmodel")),
            ],
        ),
    ]
