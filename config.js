const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FAIZAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVB4VHNSQVZxK3RKUUZFVEplUnJvaUtEM054Vm1pSWFDa2lXbE5xd0RVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1B4ak84RFh5OW5kNTB3dGNDcE92Rk9mSTVWdmloQW1oVUNvekxoanJEMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQ2FmZTNFd0YySUZrZXhtalpBOFM2RVNodVhmcW5ERnlEV0JzWnFScDBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2WExOVllwQVpxWCtnN2tnMW1aMEtrN0kzcGxZcGtveFdabFM5czVBeHlRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlOeTJyT296elVybElIZzM2NmtXMmxCT1RpZG1MUkYwdWZxTjBRdlFXWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ6NHQ0TWw3T1hUN3NoK01yYlBXaFc0S2JwaFBPdkR5bGkwdW9lM1RVek09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUdFamRSbVRNN1FkcTFGbGw2TFc0YnZ5UEUwRXRvaEJLMHRReDBhK1VVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmI3VnR4TnQxcVljVUFPNmh6WDBrZHNuenJ2dmNMNXhQNEVCdnRMTTJrYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpzLzdKQ0hqWGtGay9OS3JEZ1hLWWVuSWJsT1BvVCtuZFFQT0pFTkFtSVg3RHNOd1Vma3Q4MTFuOGwyYkdHdHY1WURncDlDTUFLSHQ0VHRwWEljQUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiTll3alFBaFc1d3d6ejRIN1VObHNqcTFEd0RCM290ZDZTQ2VYSTZjQnRodz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJYWlJFQkI2SCIsIm1lIjp7ImlkIjoiOTIzMjUyNjc3ODkxOjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLdmR4oia4oGo8J2XmfCdl54g8J2XpvCdl5TwnZec8J2XoeKBtOKBsOKBtFxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu8JKJvVxu4riU6q2W0pPhtZjhtIThtY/htYnKgOG1h+G0j8q4IiwibGlkIjoiMTY1NjA1OTUzMDExODczOjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdTlxb29GRUl6dnU4MEdHQWtnQVNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwdzYwQTNKbTFaRXlkVmJMTVZmZjdTVDR6ZFBzVlF4WGNOV2ZxelBlbjBnPSIsImFjY291bnRTaWduYXR1cmUiOiJTcndEd05FWTZLbG15K1d0VDRtbVZoV1FQSVpjUlAyZGFCa1dUaGprcUM3NysrUmUxQUpLd0I3eFk2b1N6Vms5bk01bHhKblU4T3VlclVVN29kOUpCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMFJBdzV5M1NSays1Tm5XSmFzRDh6UFk0TUV4RFJHbzdzY0ZxMmNZSGxhbWlIOGhack4zSTV6MVUvakRoR2pIVXU2alAzQ2RVVnYvQ2hpbnUvNFh2Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNjU2MDU5NTMwMTE4NzM6OEBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWNPdEFOeVp0V1JNblZXeXpGWDMrMGsrTTNUN0ZVTVYzRFZuNnN6M3A5SSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzczMDc0MzIyLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVB0bCJ9",
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
AUTO_REACT: process.env.AUTO_REACT || "false",
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
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923443679346",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
