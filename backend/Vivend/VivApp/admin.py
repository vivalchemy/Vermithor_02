from django.contrib import admin
from .models import Student,Alumni,Admin,Donation,Events
# Register your models here.
admin.site.register(Student)
admin.site.register(Alumni)
admin.site.register(Admin)
admin.site.register(Donation)
admin.site.register(Events)