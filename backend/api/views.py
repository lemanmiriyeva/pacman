from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import TelegramUser
from .serializers import TelegramUserSerializer

@api_view(['POST'])
def add_or_update_user(request):
    user_id = request.data.get('user_id')
    username = request.data.get('username')
    score = request.data.get('score', 0)

    user, created = TelegramUser.objects.get_or_create(
        user_id=user_id,
        defaults={'username': username, 'score': score}
    )

    if not created:
        # Kullanıcı zaten varsa, skorunu toplar
        user.score += score
        user.save()
    else:
        # Kullanıcı yeni eklenmişse başlangıç skorunu atar
        user.score = score
        user.save()
    
    return Response({'message': 'User added or updated', 'total_score': user.score}, status=status.HTTP_200_OK)

@api_view(['POST'])
def update_score(request):
    user_id = request.data.get('user_id')
    additional_score = request.data.get('score', 0)

    try:
        user = TelegramUser.objects.get(user_id=user_id)
        # Skoru mevcut skora ekler
        user.score += additional_score
        user.save()
        return Response({'message': 'Score updated', 'total_score': user.score}, status=status.HTTP_200_OK)
    except TelegramUser.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def leaderboard(request):
    top_users = TelegramUser.objects.order_by('-score')[:10]
    serializer = TelegramUserSerializer(top_users, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)