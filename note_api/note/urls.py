from django.urls import path, include
from rest_framework import routers
from note import views


router = routers.DefaultRouter()
#router.register('notes', views.NoteViewSet)

router.register('notes', views.NoteViewSet, 'notes')


app_name = 'note'
urlpatterns = [
    path('', include(router.urls)),
    #path('auth/', include('knox.urls')),
    #path('auth/', include('djoser.urls')),
    #path('auth/register/', views.RegistrationAPI.as_view()),
    #path('auth/login/', views.LoginAPI.as_view()),
    #path('auth/user/', views.UserAPI.as_view()),
    #path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    #path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]