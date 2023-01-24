from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Wallpaper
from .serializers import WallpaperSerializers


class WallpaperView(generics.ListCreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = WallpaperSerializers

    def get_queryset(self):
        return Wallpaper.objects.all()

    def perform_create(self, serializer):
        wallpaper = Wallpaper.objects.create(
            user=serializer.context["request"].user
        )
        wallpaper.save()
