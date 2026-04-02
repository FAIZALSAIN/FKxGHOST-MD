const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FK-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlaNjNMVktHZ3N4TWY4a1QzSE40NjdSRy9XeDQwR3JrQ3ducmU0TERHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGc0WXc4SnNidUN0TG9NQm9MWkNyWlJNZ1FoakowSTBnWmd6WGc3RlRqWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRmNCMFZOSjVwOGlQdnJSeEV4ZUFRdzlZRzFpaFZhOTNXWXh1a055YmxVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwZTdLZmdnZ3pkcXhRa1c2blg4dFNteFFHV1NheUtaQThZQkhPd09NNlE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVNaWJSMU45Q2Q3Rm1Iam1uWXdEUGtHSm5oanZ6UEFMRlF5eEVaM2FpVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldnNm9MMm96d2w1WkhHMURzTm5GYVZrOW9XMjFJUCtXcDVlbXBaU0pFeFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlGeUtxQlFnK2laU1o5WkQyVS84UjM4SnhORU1oUUtuUEZXUWdGVFdFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnRzUkFmRjVKamtQUlFDRXljUDBaV1RkSEtGdDhQcmNhSHBvRHNlUE5UMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQ5Q3ZMQkxEVWJNVUR3RjAzdlpkZTZKN05zOUh0SEc5dlZZTHB6ME9vS01yVkpPQ3FPSFJ3SWFsTFdKM3NESDk3R3lsMkZXTmpSR3VBNmtWM1VIamh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6IjdYdVhIYlVGZkRrWWtXYXR5WDVTOEZUK1VOLzlNUC90WHhZRVluNEFuaE09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiSEhINEhaUEwiLCJtZSI6eyJpZCI6IjkyMzI1MjY3Nzg5MToxMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIt2ZHiiJrigajwnZeZ8J2XniDwnZem8J2XlPCdl5zwnZeh4oG04oGw4oG0XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7iuJTqrZbSk+G1mOG0hOG1j+G1icqA4bWH4bSPyrgiLCJsaWQiOiIxNjU2MDU5NTMwMTE4NzM6MTJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdTlxb29GRU9qWHVjNEdHQTBnQVNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwdzYwQTNKbTFaRXlkVmJMTVZmZjdTVDR6ZFBzVlF4WGNOV2ZxelBlbjBnPSIsImFjY291bnRTaWduYXR1cmUiOiJEa1A2M2cyVnpMRm0vTTJzSE9DS0VURnpaWi9CV0xORWtmOXovUG14dFEyTlFWQ0svYkx0a3FNZ2dMZXcwODJIa3IwaGdmM0xJU3BZWklUK1FLRDZBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieGk5WEtSNGRPNW5UVjRXbFZacDlnZFErZ1FUZFZyVWtnZGMwQzNiK0NBYkx3RVgzclB4YjZJYTcrZ3lQdjkyK0NTdXNxSVU3RnF0YVdDOU9CSUtBaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNjU2MDU5NTMwMTE4NzM6MTJAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFjT3RBTnladFdSTW5WV3l6RlgzKzBrK00zVDdGVU1WM0RWbjZzejNwOUkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUWdJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3NTEzNTcyNywibGFzdFByb3BIYXNoIjoiM21sMWpTIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQdHIifQ==",
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
OWNER_NUMBER: process.env.OWNER_NUMBER || "923252677891",
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
