from rest_framework import serializers

from .models import Wallpaper


class WallpaperSerializers(serializers.ModelSerializer):
    class Meta:
        model = Wallpaper
        fields = ['id', 'name', 'image', 'user']
