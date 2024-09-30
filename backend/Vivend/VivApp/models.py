import uuid
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


class Admin(models.Model):
    name=models.CharField(max_length=100)
    password=models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Donation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    project_name = models.CharField(max_length=255)  # Field for the project's name
    project_image = models.ImageField(upload_to='donation_images/')  # Field for the project's image
    total_donation_required = models.DecimalField(max_digits=10, decimal_places=2)  # Total donation required
    total_donation_done = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)  # Total donation received
    project_description = models.TextField()
    contact_person = models.CharField(max_length=100)

    def __str__(self):
        return self.project_name


class Events(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    event_name = models.CharField(max_length=255)  # Field for the event's name
    date = models.DateField()
    location=models.CharField(max_length=45)
    event_description = models.CharField(max_length=500)

    def __str__(self):
        return self.event_name
    