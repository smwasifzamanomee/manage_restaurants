from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    USER_TYPE_OWNER = 'owner'
    USER_TYPE_EMPLOYEE = 'employee'
    USER_TYPE_CHOICES = [
        (USER_TYPE_OWNER, 'Owner'),
        (USER_TYPE_EMPLOYEE, 'Employee'),
    ]

    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES)
    
class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
    
class Menu(models.Model):
    name = models.CharField(max_length=100)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name

class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name


