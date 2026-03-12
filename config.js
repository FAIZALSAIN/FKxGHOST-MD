const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FAIZAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUE0NWFEWE1WVzU2UithM0FQSHBhYlZrMzdEZDI3b05DZnlrbDRVSDMwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjdBTnBKZkFpVGhKNXQ5YWhrazdXM3hvMVdwWXhSUnRzYVErWFVNMXNCcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTGpJTXhEcFVNSmx1S0svMGdPUTFEeldlZHpqYnVvWGlIYWpaWVM1UDBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3MDZ2K1RFUDZGRGkyRW02cFB0WmM5S2xpdXVBZ0J2Nzl3QzdaTTcvMUE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFGRWdYbHRsMWZjTGRWdlB4dnV4Q3kxWVE5SWpJelk1dkE5dW8rVXE3a1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxnRzVYSC9tNEtQaUVxWFZ4N2drUWFOdWJNNkdvaXlIUEVPZGxrWTNnVmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUhLR0ZDNWxKM05CaTdGM1Nzcm1hT1p5UW9kNGZ5K0VWdVdHdHNqbCtXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3hHWXJNMCtybFJPcDNMbDZlS0JQQlByRHVOZHNTOGRZOWNSY29WdFlDOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InEva1NtYW12dUpJNGFwUzU2WFo1ek1keFBCS0JhRzhzWURXZFVoS2YrRVdzb2J0RnVKT2xFeGRNd1ZLK0NlbDRFcHcvM1didDBuRVdQOUozYTlnV2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6IkVyYU9DNDRqd2VXaFJXOVBPcWl0SEhQbzVvWit4bkRmczZlNTZrODU1UnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiSFE4TjRQSEIiLCJtZSI6eyJpZCI6IjkyMzI1MjY3Nzg5MTo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ii3ZkeKImuKBqPCdl5nwnZeeIPCdl6bwnZeU8J2XnPCdl6HigbTigbDigbRcbvCSib1cbvCSib1cbvCSib1cbvCSib1cbvCSib1cbvCSib1cbvCSib1cbvCSib1cbvCSib1cbvCSib1cbvCSib1cbvCSib1cbvCSib1cbvCSib1cbuK4lOqtltKT4bWY4bSE4bWP4bWJyoDhtYfhtI/KuCIsImxpZCI6IjE2NTYwNTk1MzAxMTg3Mzo5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3U5cW9vRkVKemZ5YzBHR0FvZ0FTZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicHc2MEEzSm0xWkV5ZFZiTE1WZmY3U1Q0emRQc1ZReFhjTldmcXpQZW4wZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUkRSV09RY2lhTzdmK2J3cXFIQm1vNTh4OFZpRGZPcjh4TGlHb3lhQytEMi9rajlEZTVhU3MyTlMzdFlqZDVRQmZvc1Nhdk1aNE9XZUJ0S1V0eElyQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IjI3dGJyc1J6c25LWGZ5V1YyS1J1ZUMySjRXemY1blBqeEJDTHBxdEFWUUs3WWxyQzk2blVyR053aTV0U2NSYTRiQmxDTi94OGhNbTQyVlRORjQ4Wml3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTY1NjA1OTUzMDExODczOjlAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFjT3RBTnladFdSTW5WV3l6RlgzKzBrK00zVDdGVU1WM0RWbjZzejNwOUkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUWdJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MzMwMTY2NiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQdGwifQ==",
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
