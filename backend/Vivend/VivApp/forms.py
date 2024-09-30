# accounts/forms.py

from django import forms

class SignInForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    user_type = forms.ChoiceField(choices=[('student', 'Student'), ('alumni', 'Alumni')])
    graduation_year = forms.IntegerField(required=False)
    current_job = forms.CharField(max_length=100, required=False)  # Only for Alumni
