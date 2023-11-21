from django.shortcuts import render
from .forms import *
from .models import *

# Create your views here.


def user_login(request):
    form = UyeGiris()
    return render(request,'login.html',{'form':form})