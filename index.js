const { Telegraf } = require('telegraf'); // A Telegram Bot Framework
const { Application, Router } = require('@cfworker/web');
// Make telegraf work with cf worker
const createTelegrafMiddware = require('cfworker-middware-telegraf');

const bot = new Telegraf(BOT_TOKEN);

// Main logic here, but don't do `bot.launch()`, as it is handled later
bot.command('foo', (ctx) => ctx.reply('bar'))

// Handle the rest
const router = new Router();
router.post(SECRET_WEBHOOK_PATH, createTelegrafMiddware(bot));
new Application().use(router.middleware).listen();
