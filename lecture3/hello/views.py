from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "appName0/index.html")

def tony(request):
    return HttpResponse("Hello, tony!")

def greet(request, name):
    return render(request, "hello/greet.html", {
        "name": name.capitalize()
    })