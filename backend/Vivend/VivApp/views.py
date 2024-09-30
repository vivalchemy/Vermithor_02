from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import stripe
import json
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, authenticate, logout,get_user_model
from django.contrib import messages
from django.core.exceptions import ValidationError
from .models import Student,Alumni
from .forms import SignInForm







# views.py


from .models import Donation,Events

def donation_list(request):
    donations = Donation.objects.all()
    donation_data = [
        {
            'id': str(donation.id),  # Convert UUID to string
            'project_image': request.build_absolute_uri(donation.image_url()) if donation.image_url() else None,
            'project_name': donation.project_name,
            'total_donation_required': float(donation.total_donation_required),
            'total_donation_done': float(donation.total_donation_done),
            'project_description': donation.project_description,
            'contact_person': donation.contact_person,
        }
        for donation in donations
    ]
    return JsonResponse({'donations': donation_data}, safe=False)


def donation_detail(request, donation_id):
    donation = get_object_or_404(Donation, id=donation_id)
    donation_data = {
        'id': str(donation.id),
        'project_image': request.build_absolute_uri(donation.image_url()) if donation.image_url() else None,
        'project_name': donation.project_name,
        'total_donation_required': float(donation.total_donation_required),
        'total_donation_done': float(donation.total_donation_done),
        'project_description': donation.project_description,
        'contact_person': donation.contact_person,
    }
    return JsonResponse(donation_data)


# events
@csrf_exempt
def show_events(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        type1 = data.get('eventType')
        location = data.get('location')
        
        events = Events.objects.all()
        
        if type1:
            events = events.filter(type=type1)
        if location:
            events = events.filter(location=location)
        
        events_data = list(events.values('id', 'event_name', 'type', 'location', 'date', 'event_description'))
        return JsonResponse({'events': events_data})
    
    return JsonResponse({'error': 'Invalid request method'}, status=405)


stripe.api_key = settings.STRIPE_TEST_SECRET_KEY

@csrf_exempt
def create_payment_intent(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        amount = data.get('amount', 5000)  # Amount in cents ($50.00)
        currency = 'usd'
        
        payment_intent = stripe.PaymentIntent.create(
            amount=amount,
            currency=currency,
        )
        
        return JsonResponse({
            'clientSecret': payment_intent['client_secret']
        })



from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth import get_user_model
from .models import Student, Alumni

@csrf_exempt
def sign_in(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        User = get_user_model()

        try:
            # Extract data from the request
            full_name = data['fullName']
            email = data['email']
            password = data['password']
            user_type = data['userType']
            graduation_year = data['graduationYear']
            
            # Create the user
            user = User.objects.create_user(username=email, email=email, password=password)
            user.first_name = full_name.split()[0]
            user.last_name = ' '.join(full_name.split()[1:])
            user.save()

            # Create Student or Alumni based on user_type
            if user_type == 'student':
                # expected_graduation_year = data['expectedGraduationYear']
                student=Student(name=full_name, email=email, password=password,graduation_year=graduation_year)
                student.save()
            elif user_type == 'alumni':
                # graduation_year = data['graduationYear']
                alumni = Alumni(name=full_name, email=email, password=password, graduation_year=graduation_year)
                alumni.save()

            return JsonResponse({'status': 'success', 'message': 'User registered successfully'})
        except KeyError as e:
            return JsonResponse({'status': 'error', 'message': f'Missing field: {str(e)}'}, status=400)
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    else:
        return JsonResponse({'status': 'error', 'message': 'Only POST requests are allowed'}, status=405)


def success(request):
    return render(request, 'success.html')
