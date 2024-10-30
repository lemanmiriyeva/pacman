# from telegram import Update
# from telegram.ext import Updater, CommandHandler, CallbackContext
# import requests

# # Django API URL'si
# API_BASE_URL = "http://127.0.0.1:8000/api/"

# # Kullanıcıyı eklemek veya güncellemek için bir fonksiyon
# def add_or_update_user(user_id, username, score=0):
#     url = f"{API_BASE_URL}add_user/"
#     payload = {"user_id": user_id, "username": username, "score": score}
#     response = requests.post(url, json=payload)
#     return response.json()

# # Puan güncellemek için bir fonksiyon
# def update_score(user_id, score):
#     url = f"{API_BASE_URL}update_score/"
#     payload = {"user_id": user_id, "score": score}
#     response = requests.post(url, json=payload)
#     return response.json()

# # Liderlik tablosunu almak için bir fonksiyon
# def get_leaderboard():
#     url = f"{API_BASE_URL}leaderboard/"
#     response = requests.get(url)
#     return response.json()

# # /start komutu: Kullanıcıyı kaydetme veya güncelleme
# def start(update: Update, context: CallbackContext) -> None:
#     user_id = update.effective_user.id
#     username = update.effective_user.username or "Anonim"
#     response = add_or_update_user(user_id, username)
#     update.message.reply_text(f"Merhaba {username}! Oyuna hoş geldin. Skorun: {response.get('total_score')}")

# # /score komutu: Puan ekleme
# def score(update: Update, context: CallbackContext) -> None:
#     user_id = update.effective_user.id
#     score = int(context.args[0]) if context.args else 0
#     response = update_score(user_id, score)
#     update.message.reply_text(f"Puanın güncellendi! Toplam Skorun: {response.get('total_score')}")

# # /leaderboard komutu: Liderlik tablosunu gösterme
# def leaderboard(update: Update, context: CallbackContext) -> None:
#     leaderboard_data = get_leaderboard()
#     leaderboard_text = "Liderlik Tablosu:\n"
#     leaderboard_text += "\n".join(f"{entry['username']}: {entry['score']}" for entry in leaderboard_data)
#     update.message.reply_text(leaderboard_text)

# def main():
#     # Bot token'inizi buraya ekleyin
#     updater = Updater("YOUR_TELEGRAM_BOT_TOKEN")

#     dispatcher = updater.dispatcher
#     dispatcher.add_handler(CommandHandler("start", start))
#     dispatcher.add_handler(CommandHandler("score", score))
#     dispatcher.add_handler(CommandHandler("leaderboard", leaderboard))

#     updater.start_polling()
#     updater.idle()

# if __name__ == '__main__':
#     main()