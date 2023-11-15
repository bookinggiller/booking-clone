from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request,'base.html')

def detay1(request):
    return render(request,'detay1.html')

def detay2(request):
    return render(request,'detay2.html')

def odeme(request):
    return render(request,'odeme.html')