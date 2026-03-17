const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FAIZAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hHNFVyUmlnKzJDcDNIbWZMaWhQSFJZMTZDYml3MG03c2wzSWNaK1BYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjJMeEZIZ2M3L0wxQ2tTamNwTmNYWEZIengwek9iSmZENjRVRFZrVXFUST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SlpEVFhQSjY3M3JrekNOSmpaSXhVZjVFaFJra21hY21MS2xVVkNxZkZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6TDlPbnVodUIxMkJieDJISFBUL0JIWUFBdmxDUDRNR1FtczZZcnVyRkhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFHcGltZis4SEUzZVlncHBObjNSbkJEbXVCM2FZSFBWNWxvb2o2cTFKbTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUwUWVmMHVSclRkRFNFbGNObnovMWZHemdzSXdOVEpvTldzaWdvb3NBQWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUQydDRDNHJVUXBZU1dwOWZCVFVOOHRwVDA2REI1UzdWekQrRUk0Zk5sOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJxQ2UrVFNhcVMvZ0lkN0lUMm0rb1IrcDA0eFJPYjl5M01Bb2xQYjZRcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imc1NElCRTFJWjFVTGZhTEhVSDVrd2E2YWtwTWFRN2psOUtsWEZXUDJpWmUyWUZvMkhIRnpseldYNTdxMGdmS1JlODl5SjMza1d3MWJoVEVSTXNZa0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjMsImFkdlNlY3JldEtleSI6IldBbXdNNUkrSVRCTFpYa0xHa3cyVjlwSTdYNFlrRk01amhKalhHTVdEaGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiR01CNDhZMjUiLCJtZSI6eyJpZCI6IjkyMzI1MjY3Nzg5MToxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIt2ZHiiJrigajwnZeZ8J2XniDwnZem8J2XlPCdl5zwnZeh4oG04oGw4oG0XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7wkom9XG7iuJTqrZbSk+G1mOG0hOG1j+G1icqA4bWH4bSPyrgiLCJsaWQiOiIxNjU2MDU5NTMwMTE4NzM6MTBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdTlxb29GRU43RDRzMEdHQXNnQVNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwdzYwQTNKbTFaRXlkVmJMTVZmZjdTVDR6ZFBzVlF4WGNOV2ZxelBlbjBnPSIsImFjY291bnRTaWduYXR1cmUiOiJFcjljNFRSQ215M0lvbGordWc2REVuQXRNSjFjMmpsUGVZckZ0QnhUM2NzSThtRFFETmQ4WTBoeXVFeW9oenpmVjVZZzQvTWphUjI2b3VEZjNsYlBCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNEhzVkdmcUJ6c0lIR0Y1ZnV1L3FUVTgrV1dnalR4WStWb0V4eWh0UWVHNUpIZ3VOYjBsa3ZnTGVjS3BiQkpHV3V2MGUzMjhLaVkzdUNCZ1E4TVlDQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNjU2MDU5NTMwMTE4NzM6MTBAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFjT3RBTnladFdSTW5WV3l6RlgzKzBrK00zVDdGVU1WM0RWbjZzejNwOUkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUWdJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MzcwNzc0OCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQdGwifQ==",
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
