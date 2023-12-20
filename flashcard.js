const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const bot = new TelegramBot('6062315651:AAHnDSKMlOO0OtVnjdziNqB5Y8Se36u92GY', { polling: true });

// Flashcards containing vocabulary words and their translations
const flashcards = [
  { word: 'Hello', translation: 'Hola' },
  { word: 'Goodbye', translation: 'Adiós' },
  { word: 'Thank you', translation: 'Gracias' },
  { word: 'Yes', translation: 'Sí' },
  { word: 'No', translation: 'No' },
];

// Handles /start command or when a user first interacts with the bot
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = `Welcome to the Language Learning Flashcard Bot! I will show you flashcards with vocabulary words and their translations. Just send me /flashcard to get started.`;
  bot.sendMessage(chatId, message);
});

// Handles /flashcard command to show a random flashcard
bot.onText(/\/flashcard/, (msg) => {
  const chatId = msg.chat.id;
  const randomIndex = Math.floor(Math.random() * flashcards.length);
  const flashcard = flashcards[randomIndex];
  const message = `Flashcard:\n\nWord: ${flashcard.word}\nTranslation: ${flashcard.translation}`;
  bot.sendMessage(chatId, message);
});

// Handles user messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;
  
    // Check if the user sends the translation of the current flashcard
    const currentFlashcard = flashcards.find((flashcard) =>
      flashcard.translation.toLowerCase() === message.toLowerCase()
    );
  
    if (currentFlashcard) {
      bot.sendMessage(chatId, 'Correct! Great job!');
    } else {
      bot.sendMessage(chatId, 'That was incorrect. Keep trying!');
    }
  });
  