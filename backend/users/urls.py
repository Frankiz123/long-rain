from django.urls import path, include

from rest_framework.routers import DefaultRouter

from users.views import (
    user_redirect_view,
    user_update_view,
    user_detail_view,
    RegistrationAPIView,
    UserProfileViewSet,
)

router = DefaultRouter()
router.register("profile", UserProfileViewSet, basename="profile")

app_name = "users"
urlpatterns = [
    path("~redirect/", view=user_redirect_view, name="redirect"),
    path("~update/", view=user_update_view, name="update"),
    path("<str:username>/", view=user_detail_view, name="detail"),
    path("account/register", RegistrationAPIView.as_view()),
    path("", include(router.urls)),
]
