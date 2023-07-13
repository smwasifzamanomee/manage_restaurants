# restaurant_app/serializers.py

from rest_framework import serializers
from .models import Restaurant, Menu, MenuItem

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ['id', 'name', 'price', 'menu']

class MenuSerializer(serializers.ModelSerializer):
    menu_items = MenuItemSerializer(many=True, read_only=True)

    class Meta:
        many = True
        model = Menu
        fields = ['id', 'name', 'restaurant', 'menu_items']


class RestaurantSerializer(serializers.ModelSerializer):
    menu = MenuSerializer(many= True, read_only=True)

    class Meta:
        many = True
        model = Restaurant
        fields = ['id', 'name', 'address', 'menu', 'owner']