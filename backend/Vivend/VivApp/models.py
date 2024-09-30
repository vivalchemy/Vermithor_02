from django.db import models

class Student(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    graduation_year=models.IntegerField()
    password=models.CharField(max_length=100)

    def __str__(self):
        return self.name

    
class Alumni(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    graduation_year=models.IntegerField()
    password=models.CharField(max_length=100)
    current_job=models.CharField(max_length=100,default='none')

    def __str__(self):
        return self.name
