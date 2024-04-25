// const { Telegraf } = require("telegraf");
import {Telegraf} from "telegraf"
const TOKEN = process.env.local!;
const bot = new Telegraf(TOKEN);

const web_link = "https://telegram-bot-seven-mu.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();