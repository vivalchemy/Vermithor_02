# yourapp/migrations/000X_auto_YYYYMMDD_HHMM.py

from django.db import migrations, models
import uuid

def create_event_data(apps, schema_editor):
    Event = apps.get_model('VivApp', 'Events')  # Replace 'yourapp' with your app name

    event_data = [
        {
            "event_name": "Annual Charity Gala",
            "date": "2024-05-15",
            "location": "Downtown Convention Center",
            "event_description": "An evening of fun, food, and fundraising for local charities."
        },
        {
            "event_name": "Summer Music Festival",
            "date": "2024-07-20",
            "location": "Central Park",
            "event_description": "Join us for a day filled with live music and great food."
        },
        {
            "event_name": "Community Health Fair",
            "date": "2024-06-10",
            "location": "City Hall",
            "event_description": "Free health screenings and information about healthy living."
        },
        {
            "event_name": "Art Exhibition",
            "date": "2024-08-05",
            "location": "City Art Gallery",
            "event_description": "Showcasing local artists and their incredible works."
        },
        {
            "event_name": "Technology Conference",
            "date": "2024-09-25",
            "location": "Tech Center",
            "event_description": "Explore the latest advancements in technology and innovation."
        },
    ]

    for data in event_data:
        Event.objects.create(
            id=uuid.uuid4(),  # Create a new UUID for each event
            event_name=data["event_name"],
            date=data["date"],
            location=data["location"],
            event_description=data["event_description"]
        )

class Migration(migrations.Migration):

    dependencies = [
        ('VivApp', '0009_events'),  # Replace with your previous migration
    ]

    operations = [
        migrations.RunPython(create_event_data),
    ]
