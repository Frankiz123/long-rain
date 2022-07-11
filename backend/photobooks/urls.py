from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import PhotoBookViewSet

router = DefaultRouter()
router.register("", PhotoBookViewSet, basename="photobook")

app_name = "photobooks"

urlpatterns = [
    path("", include(router.urls)),
]
