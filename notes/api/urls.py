from .views import BookmarkViewSet, UserViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('bookmarks', BookmarkViewSet, basename='bookmarks')
router.register('users', UserViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
    # path('bookmarks/', bookmark_list),
    # path('bookmarks/<int:pk>/', bookmark_detail),
]
