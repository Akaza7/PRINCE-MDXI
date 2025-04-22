const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "prince_md-eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUxEdFNmeFo4ZUVBbWRSMkkzWXVlS3AyVzVkcVhnZWlDVW9CcFdkdU8yRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjU1QlRXaGxuTytSaEVXcjlOWUhCOVJ3bTlxQm5kMUV2dFlmTUh2U2pVMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTUJkSjZnNFY1Z0pvelErYmtMb1ZETHVwYm9aVlVoT2F6WUM0WTVRb2w0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiUFhtcWpDSDFpQUFOWHlGYUo3L0NpWWFubmVwZ3R6Rk5xdlIvRzl3TEZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNQaDljbzdNUUtGS0tZVUdDQXdzQjh3eXFCSjVESGZuN2Jkb3VpSmdDSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNaTldpOEl4YWlwWXNEbmFId0p5OWNkL3dGQjFrMkl1QTh2citoVVRrVXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUVJbFlhWG5XNEtXUFV2UE9vc0hpeCtpYlRNbmVkZUhxQlJ1eHlRaTQyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTZsUkdmbHZ1Q242UlMwRFNYY2VpdnJxcHFSK28yOWlOUnRxUXZVTlBTbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVXUFVSZnlqa2wvdmsrNWxHL1dVcTB2TktqVTZjbmlERDdJNk9zNk1FYzMwMnV5b09uK3A1c2pIMTFmWEdNRHRsaU1ydllzOHBvZ09lVUw2SFNUY0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJyUVZsZHliMVNNMEFRTmoyNjF1a3RsQlk4VHdncTZXWmkxVzQ4SU9uUFpnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTMxNzM1NDE0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMxMEY3N0QxRjI4NzcwRDkyMkJERkY1NjdFQTAwMTJFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDUzMzQ0ODl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlZPbzdkTmZWUnFHblc0RFB0S1RMYkEiLCJwaG9uZUlkIjoiMTRhYzBhNjAtYjk1NS00MzA0LTg2NzMtNTMzOGQ5YmJhNmVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InA5dmFiTmUvRlRKU0lIWjFzL1czZk9Cdm9XST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHMXhFaVFObFNoQ1VPYm1ybnV3R1ZNT2k1NlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNERYWkJHQkoiLCJtZSI6eyJpZCI6IjUwOTMxNzM1NDE0OjQxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqnhrLzig59+4pmV77iO8J2QmfCdkITwnZCN8J2QiPCdkJPwnZCS8J2QlOKAoiDqp4HwnZCWLvCdkIMu8J2Qki7qp4Lwn5W377iP8J+njfCfj73igI3imYLvuI8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tPdXc1TUNFTDdobnNBR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9xRVRpR2F2emdUUm01REEwM2puQXZSWmVnVGdaNnRXNmMwVW9obC9vVVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IktTWTh2bks0dllKOTRyaHl6SWFlUE5xOTRjVHRNTWxSQnR3ZFI0SFNZdW5zT20zTGRRd0RseXFGNFJFcWM4SG9WUlJHUmFlRTY2aEllcml5UTdjZ0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrbHdrV2RFMUxIclZFZ0owZ3RxMDRqQi94MVFyUVBWbDRwQkdFSmxacWpqSDA4UkhFRnQwcGpvZ3U4NFlUUEUyRFVERTVHRFh0UUF3OThxTm5ISDFBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTMxNzM1NDE0OjQxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmY2aEU0aG1yODRFMFp1UXdOTjQ1d0wwV1hvRTRHZXJWdW5ORktJWmY2RkYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDUzMzQ2NjUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQVpCIn0="
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY PRINCE-MDX *",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "PRINCE MDX",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "31735414",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Zenitsu",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ  ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/kzfne8.jpeg",
// add img for alive msg
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
// menu image 
WELCOME_ENABLED: process.env.WELCOME_ENABLED || "true",
    // welcome group members 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "31735414",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
