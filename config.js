const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "prince_md-eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1hU1FOK2pLUzdVSGl3WUQxaUttRktoZGpscnhWdTlBQ3dIYi9IYlZtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGJ6cFRJT3FReHFoTXgxbEI2ZVJTTk1mZHV5cGVHRS95M2pXdG5wUnV5WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQ1NmWXFseG1taDI4Uy82V0JabGhoYlV3UlhKSitQYjFLOVovQlhPR25NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGdm9HRGNYcTQyT2c2cHhhcVNkMGprRVBMZnNISyt1bWxKaEc1S1JXYW0wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLUWYrSnRFM2hvbVI5OS8xR1YyaTRqNnBRa0hxUWNrY1BQZ2t3L1gwWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1zS1VqR1FVVm1aVmJyd05RZGQ4dkVCK0JaSXRCTG9TWW1aTFVSOEduWDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VoZ280VGx4Qm52WFNTKzljWnNKRmR0RlJnZS9QZndFNmpvTEQyNHpHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXp1WS80VmhhcUVYQ2I0TG5EbkhMYkR4T0d5VE1UQzBGL0UxZkYzaGNuZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxoQnNvd0xkNUxwdU5xL1lJQzkvM0FETlZFNkk0REN3L2Vwa1hobnVlQ2dSbC9PbnQvSGU5UWtpcDFwY3ZEMUFRRW9iZ2RGcmdSUlBEdFdqS1hXeUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6IlZ4aytZM3JxVnhNMlJnbGZzOHd0Z3g0ODErUC9pSFN2a0RBOVZOb2VqQ2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik1CYmFvS3RXUWVPUFZTZER5bFBCcmciLCJwaG9uZUlkIjoiOGJhNTdjZmUtYTYyMC00ZTBkLTg0YTctYmNiNTZkNDAzOTIxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh0dms1cjdzaVhmbjVoaEQ5eE4wWVBRejV0dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQ2NSZEJSNDlFTXlZYWRzWHNOcUtnMHFFTkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiREdOOVNFWFciLCJtZSI6eyJpZCI6IjUwOTMxNzM1NDE0OjQyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLT3V3NU1DRU95TW44QUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvcUVUaUdhdnpnVFJtNURBMDNqbkF2UlplZ1RnWjZ0VzZjMFVvaGwvb1VVPSIsImFjY291bnRTaWduYXR1cmUiOiJLeEJTcnZORDNwNzg5WjdrTjB1WmpvaUlwT2RSdWNDdUdveGt4bXk1RFMzV3UzYVZqTmY4NHF6aWFoZUk1T0dDcjFVbGI1eFNFR3VQVy8wekt4d2lEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMy8rTkVGTWZxMDl2MU1veU5kb0lTWnFLVkNocEVuRHEycHJ2QVVyUEtOSXN2M3VHK282ckRkalp2YnU2anJuNHZtb2N0V3dZd3pmRXRJaDZwcCtSRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzMTczNTQxNDo0MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmNmhFNGhtcjg0RTBadVF3Tk40NXdMMFdYb0U0R2VyVnVuTkZLSVpmNkZGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ1MzQwMDI1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFaQyJ9
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
STICKER_NAME: process.env.STICKER_NAME || "𓆩 ꧁𝐖.𝐃.𝐒.꧂🕷️🧍🏽‍♂️",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "31735414",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ZENITSU",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "Je suis 💁🏻 ZENITSU Comment puis je vous aider",
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
