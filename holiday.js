const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const newsCatcherApiKey = 'yk-s-eoE0M_LiSHXOdiTZsx5rwiL11Vc_4iKxIM-D38';
const botToken = '6337148989:AAF6BKfV3JnVn8rNfgQAOQOC33V5vVq2loU';
const newsCatcherApiBaseUrl = 'https://api.newscatcherapi.com/v2/search';

// Create a new bot instance
const bot = new TelegramBot(botToken, { polling: true });

// ... (unchanged code above)

// Handle incoming messages
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  // Check if the received message is a command
  if (msg.text.startsWith('/news')) {
    // Extract the query from the command
    const query = msg.text.split('/news ')[1];

    // Set up the request options for NewsCatcher API
    const options = {
      method: 'GET',
      url: `${newsCatcherApiBaseUrl}`,
      params: { q: query, lang: 'en', sort_by: 'relevancy', page: '1' },
      headers: {
        'x-api-key': newsCatcherApiKey,
      },
    };

    try {
      // Send the request to NewsCatcher API
      const response = await axios(options);

      // Get the news articles from the response
      const articles = response.data.articles;

      // Process the articles and create a message
      if (articles.length > 0) {
        let message = 'Here are some news articles:\n\n';
        const limit = 10; // Limit the number of articles to 10
        for (let i = 0; i < Math.min(articles.length, limit); i++) {
          const article = articles[i];
          message += `${article.title}\n${article.link}\n\n`;
        }
        bot.sendMessage(chatId, message);
      } else {
        bot.sendMessage(chatId, 'No news articles found.');
      }
    } catch (error) {
      console.error(error);
      bot.sendMessage(chatId, 'An error occurred while fetching news.');
    }
  }
});
