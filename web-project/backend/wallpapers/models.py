from django.contrib.auth.models import User
from django.db import models


class Wallpaper(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='files/wallpapers')
    description = models.TextField()
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="listings")
