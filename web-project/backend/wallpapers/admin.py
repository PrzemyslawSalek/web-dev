from django.contrib import admin

from .models import Wallpaper


class WallpaperAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


admin.site.register(Wallpaper, WallpaperAdmin)
