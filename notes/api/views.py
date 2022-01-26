from django.shortcuts import render, HttpResponse
from .models import Bookmark
from .serializers import BookmarkSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response



# Create your views here.
def index(request):
	return HttpResponse("Hello, world. You're at the bookmarks index.")

@api_view(['GET', 'POST'])
def bookmark_list(request):

	if request.method=='GET':
		bookmarks = Bookmark.objects.all()
		serializer = BookmarkSerializer(bookmarks, many=True)
		return Response(serializer.data,)

	elif request.method=='POST':
		# data = JSONParser().parse(request)
		serializer = BookmarkSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=201)
		return Response(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def bookmark_detail(request, pk):
	try:
		bookmark = Bookmark.objects.get(pk=pk)
	except Bookmark.DoesNotExist:
		return HttpResponse(status=404)

	if request.method=='GET':
		serializer = BookmarkSerializer(bookmark)
		return JsonResponse(serializer.data)

	elif request.method=='PUT':
		data = JSONParser().parse(request)
		serializer = BookmarkSerializer(bookmark, data=data)
		if serializer.is_valid():
			serializer.save() 
			return JsonResponse(serializer.data)
		return JsonResponse(serializer.errors, status=400)

	elif request.method=='DELETE':
		bookmark.delete()
		return HttpResponse(status=204)