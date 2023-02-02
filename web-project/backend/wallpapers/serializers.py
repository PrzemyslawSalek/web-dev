from rest_framework import serializers

from .models import Wallpaper


class WallpaperSerializers(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    user_id = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = Wallpaper
        fields = ['id', 'name', 'image', 'description', 'user', 'user_id']
