const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "pair",
    alias: ["getpair"],
    react: "🔑",
    desc: "Generate Pair Code",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { reply, q, senderNumber }) => {

    try {

        const phone = q
            ? q.replace(/[^0-9]/g, '')
            : senderNumber.replace(/[^0-9]/g, '');

        if (!phone || phone.length < 10) {
            return reply("❌ Enter valid number\nExample: .pair 923xxxxxxxxx");
        }

        const url = `https://paring-site-44t7.onrender.com/pair?number=${phone}`;
        const res = await axios.get(url, { timeout: 20000 });

        if (!res.data || !res.data.success || !res.data.code) {
            return reply("❌ Pairing Failed. Try again later.");
        }

        const code = res.data.code;

        // 🔥 1️⃣ Styled Box Message
        await reply(`
╭ׂ┄•─̇─̣┄•─̇─̣┄•─̇─̣┄•─̇─̣╮
│ ╌─̇─̣⊰ 𝐅𝐊𝐱𝐆𝐇𝐎𝐒𝐓-𝐌𝐃_⁸⁷³ ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│🔑 𝐏𝐀𝐈𝐑 𝐂𝐎𝐃𝐄
│
│  ${code}
│
│📲 Enter in WhatsApp
╰┄•─̇─̣┄•─̇─̣┄•─̇─̣┄•─̇─̣╯

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ FK HACKER _⁸⁷³
`);

        // 🔥 2️⃣ Plain Copy Version (After 2 Seconds)
        setTimeout(async () => {
            await reply(code);
        }, 2000);

    } catch (err) {

        console.log("PAIR ERROR:", err.message);
        reply("❌ Pairing Service Error.");
    }

});
