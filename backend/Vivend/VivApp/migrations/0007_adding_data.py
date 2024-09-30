import uuid
from django.db import migrations, models

def create_donation_data(apps, schema_editor):
    Donation = apps.get_model('VivApp', 'Donation')  # Replace 'yourapp' with your app name
    donation_data = [
    {
        "id": uuid.uuid4(),
        "project_name": "Water Well Project",
        "project_image": "donation_images/water_well.jpg",
        "total_donation_required": 5000.00,
        "total_donation_done": 1000.00,
        "project_description": "Building a well to provide clean water in rural areas.",
        "contact_person": "Alice Johnson"
    },
    {
        "id": uuid.uuid4(),
        "project_name": "School Renovation",
        "project_image": "donation_images/school_renovation.jpg",
        "total_donation_required": 20000.00,
        "total_donation_done": 5000.00,
        "project_description": "Renovating an old school building in the countryside.",
        "contact_person": "Bob Smith"
    },
    {
        "id": uuid.uuid4(),
        "project_name": "Medical Camp",
        "project_image": "donation_images/medical_camp.jpg",
        "total_donation_required": 10000.00,
        "total_donation_done": 2500.00,
        "project_description": "Organizing a free medical camp for underprivileged communities.",
        "contact_person": "Dr. Sarah Brown"
    },
    {
        "id": uuid.uuid4(),
        "project_name": "Food Distribution Drive",
        "project_image": "donation_images/food_distribution.jpg",
        "total_donation_required": 15000.00,
        "total_donation_done": 3000.00,
        "project_description": "Providing food to families in need during the winter months.",
        "contact_person": "Mark Thompson"
    },
    {
        "id": uuid.uuid4(),
        "project_name": "Youth Sports Initiative",
        "project_image": "donation_images/youth_sports.jpg",
        "total_donation_required": 8000.00,
        "total_donation_done": 2000.00,
        "project_description": "Creating sports programs for underprivileged youth.",
        "contact_person": "Linda Carter"
    },
    {
        "id": uuid.uuid4(),
        "project_name": "Animal Shelter",
        "project_image": "donation_images/animal_shelter.jpg",
        "total_donation_required": 12000.00,
        "total_donation_done": 4000.00,
        "project_description": "Building a shelter for rescued animals.",
        "contact_person": "Gary Wilson"
    },
    {
        "id": uuid.uuid4(),
        "project_name": "Environmental Clean-up",
        "project_image": "donation_images/environment_cleanup.jpg",
        "total_donation_required": 6000.00,
        "total_donation_done": 1500.00,
        "project_description": "Organizing a community clean-up event to protect the environment.",
        "contact_person": "Jessica Adams"
    },
    {
        "id": uuid.uuid4(),
        "project_name": "Education for All",
        "project_image": "donation_images/education_for_all.jpg",
        "total_donation_required": 25000.00,
        "total_donation_done": 7000.00,
        "project_description": "Providing educational resources to children in rural areas.",
        "contact_person": "Emily Johnson"
    },
    {
        "id": uuid.uuid4(),
        "project_name": "Community Health Program",
        "project_image": "donation_images/community_health.jpg",
        "total_donation_required": 11000.00,
        "total_donation_done": 3500.00,
        "project_description": "Offering health check-ups and awareness programs in communities.",
        "contact_person": "Dr. Michael Smith"
    },
    {
        "id": uuid.uuid4(),
        "project_name": "Women's Empowerment Workshop",
        "project_image": "donation_images/womens_empowerment.jpg",
        "total_donation_required": 9000.00,
        "total_donation_done": 2500.00,
        "project_description": "Organizing workshops to empower women through skills training.",
        "contact_person": "Natalie Green"
    },
    {
        "id": uuid.uuid4(),
        "project_name": "Orphanage Support Fund",
        "project_image": "donation_images/orphanage_support.jpg",
        "total_donation_required": 15000.00,
        "total_donation_done": 3000.00,
        "project_description": "Providing financial support to local orphanages.",
        "contact_person": "Paul Brown"
    }
]


    # Create donation entries
    for data in donation_data:
        Donation.objects.create(**data)


class Migration(migrations.Migration):

    dependencies = [
        ('VivApp', '0006_admin_donation'),
    ]

    operations = [
       migrations.RunPython(create_donation_data),
    ]
