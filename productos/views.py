# productos/views.py
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

class ProductListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        productos = Product.objects.all()  # obtiene todas las películas
        serializer = ProductSerializer(productos, many=True)  # las convierte a JSON
        return Response(serializer.data)

