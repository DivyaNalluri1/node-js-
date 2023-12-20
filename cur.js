const TelegramBot = require('node-telegram-bot-api');
const admin = require('firebase-admin');
const axios = require('axios');

const TOKEN = '6110450252:AAGhwUHoaGUHIHPDhaZCZaWs3FNhqaDQpE4';
const EXCHANGE_RATE_API_KEY = '2b9b15361d48b033aa74b0690054cc05';

// Initialize Firebase Admin SDK
const serviceAccount = require('./keys.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to the Currency Converter Bot! Type /convert <amount> <from> <to> to get the exchange rate.');
});

bot.onText(/\/convert (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const input = match[1].trim().split(' ');

  if (input.length !== 3) {
    bot.sendMessage(chatId, 'Invalid input format. Please use /convert <amount> <from> <to>.');
    return;
  }

  const amount = parseFloat(input[0]);
  const fromCurrency = input[1].toUpperCase();
  const toCurrency = input[2].toUpperCase();

  if (isNaN(amount)) {
    bot.sendMessage(chatId, 'Invalid amount. Please enter a valid number.');
    return;
  }

  try {
    const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}&apikey=${EXCHANGE_RATE_API_KEY}`);
    const data = response.data;

    if (response.status !== 200 || data.error) {
      bot.sendMessage(chatId, 'Currency conversion failed. Please check your input currencies.');
    } else {
      const convertedAmount = amount * data.rates[toCurrency];
      bot.sendMessage(chatId, `${amount} ${fromCurrency} is approximately ${convertedAmount.toFixed(2)} ${toCurrency}.`);

      // Store searched details in Firestore database
      const searchDetails = {
        amount: amount,
        fromCurrency: fromCurrency,
        toCurrency: toCurrency,
        convertedAmount: convertedAmount,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      };

      db.collection('searches').add(searchDetails);
    }
  } catch (error) {
    console.error('Error during API request:', error);
    bot.sendMessage(chatId, 'An error occurred while fetching the exchange rate. Please try again later.');
  }
});

bot.onText(/\/history/, async (msg) => {
  const chatId = msg.chat.id;
  try {
    const historySnapshot = await db.collection('searches').orderBy('timestamp', 'desc').limit(5).get();
    if (historySnapshot.empty) {
      bot.sendMessage(chatId, 'No conversion history found.');
    } else {
      let historyMessage = 'Conversion History:\n';
      historySnapshot.forEach((doc) => {
        const data = doc.data();
        historyMessage += `${data.amount} ${data.fromCurrency} => ${data.convertedAmount.toFixed(2)} ${data.toCurrency}\n`;
      });
      bot.sendMessage(chatId, historyMessage);
    }
  } catch (error) {
    console.error('Error while fetching conversion history:', error);
    bot.sendMessage(chatId, 'An error occurred while fetching the conversion history. Please try again later.');
  }
});

// Start the bot
console.log('Currency Converter Bot is running...');
