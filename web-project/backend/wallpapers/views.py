from django.contrib.auth.models import User
from django.http.response import Http404
from django.http.response import JsonResponse
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Wallpaper
from .serializers import WallpaperSerializers


class WallpaperView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = []
    serializer_class = WallpaperSerializers

    def post(self, request):
        data = request.data
        try:
            user = User.objects.get(username=request.data.user)
        except Exception as e:
            user = User.objects.get(username='psalek')

        serializer = WallpaperSerializers(data=data)

        if serializer.is_valid():
            serializer.save(user=user)
            return JsonResponse("Wallpaper Added Successfully", safe=False)
        return JsonResponse("Failed to Add Wallpaper", safe=False)

    def get_wallpaper(self, pk):
        try:
            wallpaper = Wallpaper.objects.get(id=pk)
            return wallpaper
        except Wallpaper.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_wallpaper(pk)
            serializer = WallpaperSerializers(data)
        else:
            data = Wallpaper.objects.all()
            serializer = WallpaperSerializers(data, many=True)
        return Response(serializer.data)
