# Generated by Django 5.1.1 on 2024-09-30 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('VivApp', '0004_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='alumni',
            name='current_job',
            field=models.CharField(default='none', max_length=100),
        ),
    ]
