
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import stripe
import json
from django.shortcuts import render, redirect
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



def sign_in(request):
    if request.method == 'POST':
        form = SignInForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            user_type = form.cleaned_data['user_type']
            graduation_year = form.cleaned_data['graduation_year']
            current_job = form.cleaned_data['current_job']

            if user_type == 'student':
                student = Student(name=name, email=email, graduation_year=graduation_year)
                student.save()
            elif user_type == 'alumni':
                alumni = Alumni(name=name, email=email, graduation_year=graduation_year, current_job=current_job)
                alumni.save()

            return redirect('success')  # Redirect to a success page

    else:
        form = SignInForm()

    return render(request, 'users/signup.html', {'form': form})


def success(request):
    return render(request, 'success.html')
