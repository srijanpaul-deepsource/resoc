from rest_framework import serializers
from .models import Bookmark

class BookmarkSerializer(serializers.ModelSerializer):
	class Meta:
		model = Bookmark
		fields = ('id', 'title', 'description')

		def create(self, validated_data):
			return Bookmark.objects.create(validated_data)	

		def update(self, instance, validated_data):
			instance.title = validated_data.get('title', instance.title)
			instance.description = validated_data.get('description', instance.description)