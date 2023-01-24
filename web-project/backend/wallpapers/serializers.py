from rest_framework import serializers

from .models import Wallpaper


class WallpaperSerializers(serializers.ModelSerializer):
    class Meta:
        model = Wallpaper
        fields = ['name', 'image', 'user']
