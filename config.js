const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Palccod:Palccod-suhail@cluster0.zcbsrxq.mongodb.net/?retryWrites=true&w=majority"
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 





global.disablepm = process.env.DISABLE_PM || "false",
global.userImages = process.env.USER_IMAGES|| "text",
global.style = process.env.STYLE || "5",  // put '1' to "5" here to check bot styles




global.devs = "255694242611" // Developer Conatact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255694242611";

module.exports = {

  menu: process.env.MENU || "Palccod_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  //style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7-qr",
  caption:process.env.CAPTION || "©Palccod²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Pal.cod-MD",
  packname: process.env.PACK_NAME || "🎭</Palccod>🎭",
  botname : process.env.BOT_NAME  || "Palccod-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Palccod",


  sessionName:process.env.SESSION_ID|| "SESSION_23_44_01_19_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01HRGJCWStOL3VWbWFFZ3V1S2ptSXpsSDJmNndUWDkzcmN2dXprY0JHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVRsL0FsMk9pbWZvMklKWlkwVzN3anJ4YU52T1BpQVhzbnJiRjVPb3p4WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTjd1NlFTc3VZc25zTUpvVC96Y0pycFVyblkxdTVuQldjcHc5U0QwMGxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3WWMvbFZFWFNQQmcydWNuUUdUbXpCZmxpa2tRdUo4RlVXNENjTmR3MFNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitKRmhURmNIZnRmYmdYREdNVUZPRWhraEdXV1J5THBtdXdRWnNVS0VjMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkF1elkvYkNTY0drQW1LOG1VQW50UXZ6a0oyekVySFJxT3BkeFpGdDJiVW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNXVytYQjdKUTdTaVhoODRQa3hUTlJpM1l2aG80N2o3UGc4WUk2RDZYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0FKTHNtSTFhOTIzNHlzQkJ5UmpvSmZHdFpRRi9iNkNpQVZlSFo0akVrcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJXcm1RdWFaQVZVS0F3cm1taFdwQ0JPRjFLOU54NW1STGZEYy8vOEFyQ04wQm9RTlV6R1ZBYlZBQkIzOVZ1VUd0dHUvNG42WWVmcThORDc5R1FqQ2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJSOFp1VXZDbEd0eExaaHJMWjVUTVBMUnljU2hOQTJPVGl3ZU95dUZCQ244PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTY5NDI0MjYxMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGNkYyRkNDRUExMTlFODY2RjcxNkU3RTYwMTE5NzI5RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA1NzA3ODc4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU2OTQyNDI2MTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0ZBQzlDNUQ4MDM2RUNFRkQ3OUY3N0RBRjBGRTQyMUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNTcwNzg3OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSEFISkh3c3FSTHFObkM0eUxkV3dtZyIsInBob25lSWQiOiI2ZTJiMjllZC1kMTM0LTRjMzEtYjkyYS0xYjQ5NzQ4ZWIwZDkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2ZFelRRL2xxNUE1dDY2YVZEYTVibm4yY0xzPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGRENYN083V0tjaUJmV2NGcFY2Qk4zeDVObG89In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLakFpc29DRU51U3JLMEdHQUk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZYT0ZTL2hsRGlWWm5xOTFkVCs4bzJVTTkzUzJMZ0k0a0dxV0dYTlZWVDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjRGakJWVDNVOU9JSDVZYkdGWVI0Sk56a2RUa2N5dzhJaERPbEtJNDBhUDkvcGZrSW81Z1Q4U0xKR21uZGdqYXdmRGZCYW9uNW9GaVZCa2hRVVlHOUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnWlp1b3NLWVpyeEVuZ0tPdGgybGxpOGpxRjdZMGdIZVE4UlFDQnkzcnpKbzkrOG9ueDhUd3VZNTgrOUM3RlFURXZERW93clhlenZuNW9LZTRpdkdnZz09In0sIm1lIjp7ImlkIjoiMjU1Njk0MjQyNjExOjMxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBhbGNjb2QifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1Njk0MjQyNjExOjMxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVsemhVdjRaUTRsV1o2dmRYVS92S05sRFBkMHRpNENPSkJxbGhselZWVS8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDU3MDc4NzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQzJXIn0=",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
 
 
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "jJXVQzBpMf1xM2R4ej5yKE66",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "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",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "4ee1d12caa68b0da1864d272ab303b55",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "PALCCOD",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
