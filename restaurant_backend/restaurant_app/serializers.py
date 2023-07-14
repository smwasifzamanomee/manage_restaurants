# restaurant_app/serializers.py

from rest_framework import serializers
from .models import Restaurant, Menu, MenuItem, User

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ['id', 'item_name', 'price', 'menu']

class MenuSerializer(serializers.ModelSerializer):
    menu_items = MenuItemSerializer(many=True, read_only=True)

    class Meta:
        many = True
        model = Menu
        fields = ['id', 'menu_name', 'restaurant', 'menu_items']


class RestaurantSerializer(serializers.ModelSerializer):
    menu = MenuSerializer(many= True, read_only=True)

    class Meta:
        many = True
        model = Restaurant
        fields = ['id', 'restaurant_name', 'address', 'menu', 'owner']

# genetic api view for user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'user_type']
        
