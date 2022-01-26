from django.db import models
from django.forms import CharField

# Create your models here.

class Bookmark(models.Model):
	title = models.CharField(max_length=100)
	description = models.TextField()

	def __str__(self):
		return self.title
