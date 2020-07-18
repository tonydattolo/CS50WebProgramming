from django import forms
from django.shortcuts import render

# Create your views here.
# tasks = [] #store inside the index function request instead for the users sessions
# sessions are determined by cookies, handstamps that give info to djangos webserver so they know who you are and what to show

def index(request):
    if "tasks" not in request.session:
        request.session["tasks"] = [] #is there a list of tasks in the session? no, then create it

    return render(request, "tasks/index.html", {
        "tasks": request.session["tasks"] #passing in the user session
    })

def add(request):
    if request.method == "POST":
        form = NewTaskForm(request.POST) #new user created form
        if form.is_valid():
            newTask = form.cleaned_data["task"]
            # tasks.append(newTask) #dont need this anymore cuz you're storing in session instead of just a variable
            request.session["tasks"] += [newTask]
            return HttpResponseRedirect(reverse("tasks:index")) #figure out what url of index from tasks app is to redirect
        else:
            return render(request, "tasks/add.html", {
                "form": form #passes back the form they created so they can see errors
            })

    return render(request, "tasks/add.html", {
        "form": NewTaskForm()
    })

# class form gets called in add function which is called in add function,
# where form is named variable that can be called in jinja embedded on html
class NewTaskForm(forms.Form):
    task = forms.CharField(label="New Task")
    # priority = forms.IntegerField(label="Priority", min_value=1, max_value=10)