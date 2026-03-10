const { cmd } = require('../command');
const axios = require('axios');
const yts = require('yt-search');

const DL_API = "https://api.qasimdev.dpdns.org/api/loaderto/download";
const API_KEY = "qasim-dev";

function faizanStyle(title, quality, status) {
    return `
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝐅𝐊𝐱𝐆𝐇𝐎𝐒𝐓-𝐌𝐃 _⁸⁷³_ ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│❀ 🎬 𝐓𝐢𝐭𝐥𝐞:* ${title}
*│❀ 🎞 𝐐𝐮𝐚𝐥𝐢𝐭𝐲:* ${quality}
*│❀ ⚙️ 𝐒𝐭𝐚𝐭𝐮𝐬:* ${status}
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐅𝐊𝐱𝐆𝐇𝐎𝐒𝐓-𝐌𝐃 🤍
`;
}

async function downloadVideo(url) {
    const { data } = await axios.get(DL_API, {
        params: {
            apiKey: API_KEY,
            format: "360",
            url
        },
        timeout: 45000,
        headers: { "User-Agent": "Mozilla/5.0" }
    });

    if (!data?.data?.downloadUrl)
        throw new Error("No download URL");

    return data.data;
}

cmd({
    pattern: "video",
    alias: ["ytvideo", "ytmp4"],
    desc: "Instant Thumbnail + Fast Video",
    category: "download",
    react: "🎬",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {

    try {
        if (!args.length)
            return reply(faizanStyle("Not Provided", "—", "Give link or name"));

        const query = args.join(" ").trim();

        await conn.sendMessage(from, { react: { text: "🔍", key: m.key } });

        // 🔎 SEARCH
        let videoUrl, title, thumbnail;

        if (!query.startsWith("http")) {
            const search = await yts(query);
            if (!search.videos.length)
                return reply(faizanStyle("Not Found", "—", "Video not found"));

            const first = search.videos[0];
            videoUrl = first.url;
            title = first.title;
            thumbnail = first.thumbnail;
        } else {
            videoUrl = query;
        }

        // ✅ THUMBNAIL TURANT SEND
        const ytId = videoUrl.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]{11})/)?.[1];
        const thumbUrl = thumbnail || `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`;

        await conn.sendMessage(from, {
            image: { url: thumbUrl },
            caption: fkStyle(title || "Video", "360p", "Processing...")
        }, { quoted: mek });

        // 🔥 BACKGROUND DOWNLOAD
        const result = await downloadVideo(videoUrl);

        // ✅ VIDEO SEND
        await conn.sendMessage(from, {
            video: { url: result.downloadUrl },
            mimetype: "video/mp4",
            caption: faizanStyle(result.title || title || "Video", "360p", "Ready")
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: "✅", key: m.key } });

    } catch (err) {

        console.error("VIDEO ERROR:", err.message);

        await conn.sendMessage(from, {
            text: fkStyle("Error", "—", "Download Failed")
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: "❌", key: m.key } });
    }
});
