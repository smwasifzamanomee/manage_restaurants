# Generated by Django 4.1.7 on 2023-07-14 08:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant_app', '0004_alter_user_password'),
    ]

    operations = [
        migrations.RenameField(
            model_name='menu',
            old_name='name',
            new_name='menu_name',
        ),
        migrations.RenameField(
            model_name='menuitem',
            old_name='name',
            new_name='item_name',
        ),
        migrations.RenameField(
            model_name='restaurant',
            old_name='name',
            new_name='restaurant_name',
        ),
    ]
