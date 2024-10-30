from django.db import models

class TelegramUser(models.Model):
    user_id = models.IntegerField(unique=True)
    username = models.CharField(max_length=100, blank=True, null=True)
    score = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.username or 'Anonim'}"