import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import { addUser, getUserByTgId, addSearchLog } from './dbRequests.js';
import { getAlbums, getSongByQuery } from './requests.js';

dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

async function handleSearch(ctx, query) {
  if (!query) {
    return ctx.reply("🔎 Qidirish uchun so‘z kiriting: `/search <query>`");
  }

  try {
    let user = await getUserByTgId(String(ctx.from.id));
    if (!user) {
      const tgId = String(ctx.from.id);
      const tgUsername = ctx.from.username || null;
      const name = `${ctx.from.first_name || ''} ${ctx.from.last_name || ''}`.trim();
      user = await addUser(tgId, tgUsername, null, name);
      console.log(`🆕 Yangi user qo'shildi (searchdan): ${name} (${tgId})`);
    }

    const song = await getSongByQuery(query);

    if (!song) {
      await addSearchLog(user.id, query, false);
      return ctx.reply("❌ Qo‘shiq topilmadi.");
    }

    await addSearchLog(user.id, query, true);

    let message = `🎵 *${song.title}* — ${song.album?.title || "Noma’lum albom"}\n\n`;
    message += song.lyrics ? song.lyrics : "❌ Lyrics mavjud emas.";

    ctx.replyWithMarkdownV2(
      message.replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1')
    );
  } catch (err) {
    console.error("❌ Search error:", err.message);
    ctx.reply("Qidirishda xatolik yuz berdi.");
  }
}

bot.start(async (ctx) => {
  const tgId = String(ctx.from.id);
  const tgUsername = ctx.from.username || null;
  const name = `${ctx.from.first_name || ''} ${ctx.from.last_name || ''}`.trim();

  try {
    let user = await getUserByTgId(tgId);

    if (!user) {
      user = await addUser(tgId, tgUsername, null, name);
      console.log(`🆕 Yangi user qo'shildi: ${name} (${tgId})`);
    } else {
      console.log(`👤 User mavjud: ${name} (${tgId})`);
    }

    // deep link orqali kelgan query bormi?
    const startParam = ctx.startPayload;
    if (startParam && startParam.startsWith("search_")) {
      const query = startParam.replace("search_", "");
      return handleSearch(ctx, query);
    }

    ctx.reply(
      `👋 Salom, ${name}!\n\n` +
      `Botdan foydalanish komandalar:\n` +
      `/albums - Albomlar ro‘yxati\n` +
      `/search <query> - Qo‘shiq qidirish\n`
    );
  } catch (err) {
    console.error("❌ Error start:", err.message);
    ctx.reply("Xatolik yuz berdi. Keyinroq urinib ko‘ring.");
  }
});

bot.command('albums', async (ctx) => {
  try {
    const data = await getAlbums();
    if (!data || data.length === 0) {
      return ctx.reply("⛔ Albomlar topilmadi.");
    }

    let message = "🎶 Albomlar:\n\n";
    data.forEach((album, i) => {
      message += `${i + 1}. *${album.title}* — ${album.artist?.name || "Noma’lum"}\n`;
    });

    ctx.replyWithMarkdownV2(message);
  } catch (err) {
    console.error("❌ Albums error:", err.message);
    ctx.reply("Albomlarni olib kelishda xatolik.");
  }
});

// 🔍 Search command
bot.command('search', async (ctx) => {
  const query = ctx.message.text.split(' ').slice(1).join(' ').trim();
  handleSearch(ctx, query);
});

bot.launch();
console.log("🤖 Bot ishga tushdi!");
