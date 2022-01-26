from .models import Bookmark
from .serializers import BookmarkSerializer, UserSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User


# from django.http import JsonResponse
# from django.shortcuts import render, HttpResponse
# from rest_framework.parsers import JSONParser
# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework import status



class BookmarkViewSet(viewsets.ModelViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



# # Create your views here.
# def index(request):
# 	return HttpResponse("Hello, world. You're at the bookmarks index.")

# @api_view(['GET', 'POST'])
# def bookmark_list(request):

# 	if request.method=='GET':
# 		bookmarks = Bookmark.objects.all()
# 		serializer = BookmarkSerializer(bookmarks, many=True)
# 		return Response(serializer.data,)

# 	elif request.method=='POST':
# 		# data = JSONParser().parse(request)
# 		serializer = BookmarkSerializer(data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data, status=status.HTTP_201_CREATED)
# 		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'PUT', 'DELETE'])
# def bookmark_detail(request, pk):
# 	try:
# 		bookmark = Bookmark.objects.get(pk=pk)
# 	except Bookmark.DoesNotExist:
# 		return HttpResponse(status=404)

# 	if request.method=='GET':
# 		serializer = BookmarkSerializer(bookmark)
# 		return Response(serializer.data)

# 	elif request.method=='PUT':
# 		# data = JSONParser().parse(request)
# 		serializer = BookmarkSerializer(bookmark, data=request.data)
# 		if serializer.is_valid():
# 			serializer.save() 
# 			return Response(serializer.data)
# 		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 	elif request.method=='DELETE':
# 		bookmark.delete()
# 		return HttpResponse(status=status.HTTP_204_NO_CONTENT)