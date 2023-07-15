from django.contrib import admin
from .models import User, Restaurant, Menu, MenuItem

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'user_type')
    list_filter = ('user_type',)
    search_fields = ('email',)
    ordering = ('email',)

admin.site.register(User, UserAdmin)

class MenuAdmin(admin.ModelAdmin):
    list_display = ('menu_name', 'restaurant')
    list_filter = ('restaurant',)
    search_fields = ('menu_name',)
    ordering = ('menu_name',)
admin.site.register(Menu, MenuAdmin)

class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('restaurant_name', 'address', 'owner')
    list_filter = ('owner',)
    search_fields = ('restaurant_name',)
    ordering = ('restaurant_name',)
    
admin.site.register(Restaurant, RestaurantAdmin)

class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('item_name', 'price', 'menu')
    list_filter = ('menu',)
    search_fields = ('item_name',)
    ordering = ('item_name',)
    
admin.site.register(MenuItem, MenuItemAdmin)