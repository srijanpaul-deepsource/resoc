from .views import index, bookmark_list, bookmark_detail
from django.urls import path


urlpatterns = [
    path('bookmarks/', bookmark_list),
    path('bookmarks/<int:pk>/', bookmark_detail),
]
