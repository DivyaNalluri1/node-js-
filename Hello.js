const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '6115078999:AAGTNn_JyIRh3QG2ofQ6fAReXvlttO_rHDE';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
bot.on('message', function(msg) {
     if(msg.text=="Hi")
     {
          bot.sendMessage(msg.chat.id, 'hello');
     }
     else
     { 
          bot.sendMessage(msg.chat.id, 'thank you');
     }
})