from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.http import JsonResponse
from mongoengine import EmbeddedDocument, DateTimeField, ComplexDateTimeField, StringField, FloatField, IntField, \
    BooleanField, ObjectIdField, DecimalField, Document, ListField, EmbeddedDocumentField, DictField

from userlanding.models import Projects
import json


# Create your views here.
@login_required(login_url="login/")
def userhome(request):
    projects_all=Projects.objects
    #projects = Projects.objects.all()
    projects = []
    projects_content = []
    projects_link = []
    for pr in projects_all:
        for project in pr["projects"]:
            if(len(projects)<=0):
                print("adding section for first project")
                project_sections = project["sections"]
            projects.append(project)


    print(project_sections)

    return render(request, 'userlanding/userhome.html', {"projects": projects,"projects_content": projects_content,"projects_link": projects_link,"landing_sections":project_sections})

@login_required(login_url="login/")
def byproject(request):

    projectName = request.GET.get('projectName', '')
    projects_all=Projects.objects
    #projects = Projects.objects.all()
    projects = []
    projects_content = []
    projects_link = []
    for pr in projects_all:
        for project in pr["projects"]:
            if(projectName == project["name"]):
                print("adding section project",projectName)
                project_sections = project["sections"]

            projects.append(project)


    return JsonResponse({"landing_sections":project_sections,"project_selected":projectName})


