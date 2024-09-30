# Generated by Django 5.1.1 on 2024-09-30 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('VivApp', '0010_addingevents'),
    ]

    operations = [
        migrations.AddField(
            model_name='events',
            name='type',
            field=models.CharField(choices=[('reunion', 'Reunion'), ('workshop', 'Workshop'), ('seminar', 'Seminar'), ('networking', 'Networking'), ('hackathon', 'Hackathon')], default='reunion', max_length=100),
        ),
    ]
