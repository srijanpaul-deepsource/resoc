from django.contrib import admin
from .models import Bookmark


# Register your models here.


# admin.site.register(Bookmark)

@admin.register(Bookmark)
class BookmarkAdmin(admin.ModelAdmin):
		list_display = ('title', 'description')
		list_filter = ('title', 'description')