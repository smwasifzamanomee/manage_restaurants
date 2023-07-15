from django.urls import include, path
from . import views , models

urlpatterns = [
    path('restaurant/', views.RestaurantList.as_view(), name='restaurant_list'),
    path('restaurant/<int:pk>/', views.RestaurantDetail.as_view(), name='restaurant_detail'),
    path('menu/', views.MenuList.as_view(), name='menu_list'),
    path('menu/<int:pk>/', views.MenuDetail.as_view(), name='menu_detail'),
    path('menu_item/', views.MenuItemList.as_view(), name='menu_item_list'),
    path('menu_item/<int:pk>/', views.MenuItemDetail.as_view(), name='menu_item_detail'),
    path('user/', views.UserList.as_view(), name='user_list'),
    path('user/<int:pk>/', views.UserDetail.as_view(), name='user_detail'),
    path('user/register/', views.UserRegistration.as_view(), name='user_registration'),
]