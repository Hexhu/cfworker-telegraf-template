const Telegraf = require('telegraf');
const bot = new Telegraf(BOT_TOKEN);

bot.telegram.setWebhook('https://name.subdomain.workers.dev/SECRET_PATH');

// bot.telegram.deleteWebhook();

bot.telegram.getWebhookInfo().then(console.log);
