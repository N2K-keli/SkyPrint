from django.shortcuts import render
from django.http import HttpResponse

def clientDashbaord(request):
    return render (request, "clientDashboard.html")

def OwnerDashboard(request):
    return render (request, "ownerDashboard.html")

# Create your views here.
