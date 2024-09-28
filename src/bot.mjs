import {Bot} from "grammy";

export const {

    // Telegram bot token from t.me/BotFather
    TELEGRAM_BOT_TOKEN: token,

    // Secret token to validate incoming updates
    TELEGRAM_SECRET_TOKEN: secretToken = String(token).split(":").pop()

} = process.env;

// Default grammY bot instance
export const bot = new Bot(token);

// Sample handler for a simple echo bot
bot.on("message:text", ctx => ctx.reply("Hi Welcome to ragdoll"));

// Command to broadcast a message to all users
bot.command("broadcast", async (ctx) => {
    const message = ctx.message.text.split(" ").slice(1).join(" ");
    
    if (!message) {
        return ctx.reply("Please provide a message to broadcast.");
    }

    await ctx.telegram.sendMessage(6434847201, message);

    await ctx.reply("Message broadcasted to all users.");
});
