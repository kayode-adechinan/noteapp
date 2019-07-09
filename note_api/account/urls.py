from django.urls import path, include
from account import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name = 'account'
urlpatterns = [
    path('auth/users/me/', views.UserAPI.as_view()),
    path('auth/register/', views.RegistrationAPI.as_view()),
    path('auth/login/', views.LoginAPI.as_view(), name='login'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]