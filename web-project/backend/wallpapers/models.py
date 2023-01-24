from django.db import models


class Wallpaper(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='files/wallpapers')
    user = models.CharField(max_length=64)