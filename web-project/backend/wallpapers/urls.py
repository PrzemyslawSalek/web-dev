from django.urls import path

from .views import WallpaperView

urlpatterns = [
    path('', WallpaperView.as_view()),
    path('<int:pk>', WallpaperView.as_view()),
]
