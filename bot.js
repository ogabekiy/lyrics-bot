import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import { addUser, getUserByTgId, addSearchLog } from './dbRequests.js';
import { getAlbums, getSongByQuery } from './requests.js';

dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

// 🎶 Handle Search
async function handleSearch(ctx, query) {
  if (!query) {
    return ctx.reply("🔍 Please provide a search term:\n`/search <song name>`");
  }

  try {
    let user = await getUserByTgId(String(ctx.from.id));
    if (!user) {
      const tgId = String(ctx.from.id);
      const tgUsername = ctx.from.username || null;
      const name = `${ctx.from.first_name || ''} ${ctx.from.last_name || ''}`.trim();
      user = await addUser(tgId, tgUsername, null, name);
      console.log(`🆕 New user added (via search): ${name} (${tgId})`);
    }

    const song = await getSongByQuery(query);

    if (!song) {
      await addSearchLog(user.id, query, false);
      return ctx.reply("😔 Sorry, I couldn’t find any lyrics for that song.");
    }

    await addSearchLog(user.id, query, true);

    // 🔗 Link for lyrics (copy-friendly)
    const linkForLyrics = `\n\n👉🏿 [Copy this link to share with friends](https://t.me/pluto_lyrics_bot?start=search_${encodeURIComponent(query)})`;

    let message = `🎵 *${song.title}* — ${song.album?.title || "Unknown Album"}\n\n`;
    message += song.lyrics ? song.lyrics + linkForLyrics : "❌ No lyrics available.";

    ctx.replyWithMarkdownV2(
      message.replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1')
    );
  } catch (err) {
    console.error("❌ Search error:", err.message);
    ctx.reply("⚠️ Something went wrong while searching. Try again later.");
  }
}

// 🚀 Start command
bot.start(async (ctx) => {
  const tgId = String(ctx.from.id);
  const tgUsername = ctx.from.username || null;
  const name = `${ctx.from.first_name || ''} ${ctx.from.last_name || ''}`.trim();

  try {
    let user = await getUserByTgId(tgId);

    if (!user) {
      user = await addUser(tgId, tgUsername, null, name);
      console.log(`🆕 New user joined: ${name} (${tgId})`);
    } else {
      console.log(`👤 Returning user: ${name} (${tgId})`);
    }

    const startParam = ctx.startPayload;
    if (startParam && startParam.startsWith("search_")) {
      const query = startParam.replace("search_", "");
      return handleSearch(ctx, query);
    }

    ctx.reply(
      `👋 Hey ${name}!\n\n` +
      "I’m your **Lyrics Assistant Bot** 🎶✨\n\n" +
      "Available commands:\n" + 
      "`/search <song>` → find song lyrics instantly 🔎\n"
    );
  } catch (err) {
    console.error("❌ Error start:", err.message);
    ctx.reply("⚠️ Something went wrong. Please try again later.");
  }
});

// 🎶 Albums (kept commented out for now)
// bot.command('albums', async (ctx) => {
//   try {
//     const data = await getAlbums();
//     if (!data || data.length === 0) {
//       return ctx.reply("⛔ No albums found.");
//     }

//     let message = "🎶 Albums:\n\n";
//     data.forEach((album, i) => {
//       message += `${i + 1}. *${album.title}* — ${album.artist?.name || "Unknown"}\n`;
//     });

//     ctx.replyWithMarkdownV2(message);
//   } catch (err) {
//     console.error("❌ Albums error:", err.message);
//     ctx.reply("⚠️ Failed to fetch albums.");
//   }
// });

// 🔍 Search command
bot.command('search', async (ctx) => {
  const query = ctx.message.text.split(' ').slice(1).join(' ').trim();
  handleSearch(ctx, query);
});

bot.launch();
console.log("🤖 Lyrics Bot is running...");
