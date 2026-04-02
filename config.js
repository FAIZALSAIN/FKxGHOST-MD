const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FK-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FZbWd4cmkxNC9Yb0xlc0lRZGpvTUNsN3hoQ1M4Zmpzc3lTSkd2aHpYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazU0YVE1R2NvYy9Obm5DL3lSKzJhcG40RWNGTGk4TDNFcGVvTks3QXRVcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRGZobzk3Unh4aEplUWdyVnM4aUhEVFF1QW9lV0huaDNmdS9tZ2VkVUZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUSm9acnVlQTBYdnQxRTFEREZ4VEsyY0hoVC8raVI4ODV2TFJJRWEvRW5BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdMV3pGaGpXbFBESGdZOHQ0S2RFU1JXOE1VbnZmTGZ1ZmxwRGRkcGNna0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIzM1lCT0UzTHV0YkZCQWQ3VEZVN09KQnJVWFhUdTNjWWVFR0x0QWFheEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0NVRng5S3BZU1p4Q3RBZm9Malhnd2RoOGIvaEdvbHVDS0N0QkF4bi9HWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUVpVThudUhMR3pUMVRlTERwT3FKM3N2NHh0dGY2dm42UStodVFHQWlSYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8zbk5PajVKV1ZoRGkrRkFTVXZleWovSGF3SDFsV3ZERUZtTVNPVEJuSjNvTFRDZXFSYzN6c2tvWGtWQ2wvTHd1OHhDYW4xRjQ2Z2FzNWNxaUhoK2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJTWUd3WjVjanJQMmdLNjdORUt1emJzc0RTNnJWQjMyWjZPTkFnam95ZGxVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ0MzY3OTM0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTU4M0VEN0FDQ0NDMjcwODc1QTk5QkZBMUM4QTk5OTAiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NTExNjk2Nn1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJIS01CR1RUVyIsIm1lIjp7ImlkIjoiOTIzNDQzNjc5MzQ2OjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLdmR4oia4oGo8J2XmfCdl54g8J2XpvCdl5TwnZec8J2XoeKBtOKBsOKBtFxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu4riU6q2W0pPhtZjhtIThtY/htYnKgOG1h+G0j8q4IiwibGlkIjoiMjcwNjQ3OTUxMzYwMTI2OjdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQV1d1OGNFRUpyRnVNNEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMRHltWkQrY0FyZklIY0MwUTZWVUs5clJFSTFxU1B5TzlBclZOdmRZSUc0PSIsImFjY291bnRTaWduYXR1cmUiOiJCWDlBYVFpa0dERVo3RU1aWFQ5di9pYmpPamQyVmRkY3Mrai9hN2NRSGVYR0VmQ1RDY1MzZk82NjV0MlZuUkVuSDVzTnpNYmtmMnVaWVZmcUsvZHpBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ1BBRDBhaEhCbHVtcTVlZ3ROOEtucCtSZkZyYkc3UDdTQVgreEFSaXN2VFpsaXJscmlWSnZoeU9wRVc2ZVU0MjhpbmN1WlFKb3o2c1ZkT3lBcjRVaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzA2NDc5NTEzNjAxMjY6N0BsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3c4cG1RL25BSzN5QjNBdEVPbFZDdmEwUkNOYWtqOGp2UUsxVGIzV0NCdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc1MTE2OTYxLCJsYXN0UHJvcEhhc2giOiIzbWwxalMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFnbyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝐅𝐊𝐱𝐆𝐇𝐎𝐒𝐓-𝐌𝐃 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/8c4lpm.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐅𝐊𝐱𝐆𝐇𝐎𝐒𝐓-𝐌𝐃_⁸⁷³_",
// add bot name here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "𝐅𝐊𝐱𝐆𝐇𝐎𝐒𝐓-𝐌𝐃",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "🪄,💖,💗,❤️‍🩹,🫀,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923443679346",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐅𝐊𝐱𝐆𝐇𝐎𝐒𝐓-𝐌𝐃",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ FK HACKER*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/8c4lpm.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*𝐅𝐊𝐱𝐆𝐇𝐎𝐒𝐓-𝐌𝐃*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923252677891",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
