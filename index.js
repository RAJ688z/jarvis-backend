const TelegramBot = require("node-telegram-bot-api");

// 👇 YAHAN TOKEN AATA HAI
const token = "8579036039:AAFmD4FXzIXSI-1TM1rxqt1l7qte8FZp9lU";

const bot = new TelegramBot(token, { polling: true });

console.log("🤖 Jarvis bot is running...");

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text ? msg.text.toLowerCase() : "";

  if (text === "/start") {
    bot.sendMessage(chatId, "🤖 Jarvis Activated");
  }
  else if (text.includes("hello")) {
    bot.sendMessage(chatId, "Hello Sir 👋");
  }
  else if (text.includes("time")) {
    bot.sendMessage(chatId, new Date().toLocaleTimeString());
  }
  else {
    bot.sendMessage(chatId, "Command samajh nahi aaya");
  }
});
