# urls.py
from django.urls import path
from django.views.generic import TemplateView 
from .views import create_payment_intent,sign_in,success,donation_list,donation_detail,show_events
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('create-payment-intent/', create_payment_intent, name='create_payment_intent'),
    path('payment/', TemplateView.as_view(template_name='index.html'), name='payment_page'),
    path('sign-in/', sign_in, name='sign_in'),
    path('success/', success, name='success'),
    # path('login/', login_view, name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('donations/', donation_list, name='donation_list'),
    path('donations/<uuid:donation_id>/', donation_detail, name='donation_detail'),
    path('events/', show_events, name='show_events'),
    
]
