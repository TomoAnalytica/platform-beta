#!python
# log/urls.py
from django.conf.urls import url
from . import views

# We are adding a URL called /home
urlpatterns = [
	url(r'^$', views.userhome, name='userhome'),
	url(r'^byproject$', views.byproject, name='byproject'),
]