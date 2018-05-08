from django.db import models
from mongoengine import *

# Create your models here.
class Projects(Document):
    projects = StringField(max_length=50000)
