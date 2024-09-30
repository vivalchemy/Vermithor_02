
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


# views.py


from .models import Donation,Events

def donation_list(request):
    donations = Donation.objects.all()  # Fetch all donation entries
    return render(request, 'donation_list.html', {'donations': donations})


def donation_detail(request, donation_id):
    donation = get_object_or_404(Donation, id=donation_id)  # Fetch the specific donation entry
    return render(request, 'donation_detail.html', {'donation': donation})


# events
def show_events(request):
    events = Events.objects.all()
    return render(request, 'events.html', {'events': events})


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
