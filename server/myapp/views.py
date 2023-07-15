
from django.http import JsonResponse
from django.views import View

class MyAPI(View):
    def get(self, request):
        data = {
            'message': 'Hello, world!'
        }
        return JsonResponse(data)

