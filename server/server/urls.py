from django.contrib import admin
from django.urls import path
from myapp.views import MyAPI

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', MyAPI.as_view(), name='my_api'),
]