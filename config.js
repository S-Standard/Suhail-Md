const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347041551971";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_46_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDYwLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE3LFxuICAgICAgICA3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTksXG4gICAgICAgIDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDg3LFxuICAgICAgICA3MixcbiAgICAgICAgMTY4LFxuICAgICAgICA3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTExLFxuICAgICAgICA5NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDg3LFxuICAgICAgICA2NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzLFxuICAgICAgICA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU3LFxuICAgICAgICA1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUdXZGZmlpSWc4SXNkSUczdTBwVUpJeDFjVEtGcHl3ME9hcXdpSGpFOHUwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLalF3MF9nMVJTR0xtME5CSUNsb1pBXCIsXG4gIFwicGhvbmVJZFwiOiBcImE1NDc5ZGVlLTE0NWYtNGI3Ny1iNThmLTE2ZDljNWE4ZjQyZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzgsXG4gICAgICAyMjgsXG4gICAgICA4OSxcbiAgICAgIDU0LFxuICAgICAgMTg4LFxuICAgICAgMTg5LFxuICAgICAgMjYsXG4gICAgICAxMTksXG4gICAgICAxODAsXG4gICAgICAxMTUsXG4gICAgICAxNjAsXG4gICAgICAxMTAsXG4gICAgICAxMDksXG4gICAgICAxNDIsXG4gICAgICAyMDIsXG4gICAgICAxMjQsXG4gICAgICAzMSxcbiAgICAgIDE3MCxcbiAgICAgIDExNSxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAxNCxcbiAgICAgIDIzLFxuICAgICAgMTc3LFxuICAgICAgNTQsXG4gICAgICAxMDgsXG4gICAgICAxMTMsXG4gICAgICA1NCxcbiAgICAgIDE2MixcbiAgICAgIDEzMCxcbiAgICAgIDE1OSxcbiAgICAgIDE3MCxcbiAgICAgIDQ3LFxuICAgICAgMTk3LFxuICAgICAgMTIyLFxuICAgICAgMjU0LFxuICAgICAgMjMxLFxuICAgICAgODUsXG4gICAgICAxMzgsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzTTVMTkNaR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MTU1MTk3MTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTy5JLlNcIixcbiAgICBcImxpZFwiOiBcIjM3MDQ0NTQ1OTMzMzEyOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWU0MHYwRUVKZUN2Yk1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKWG1wQlU2dTA2elBLbGhZd280cno2UnRHRVBNbnB5TFhMYXJ3QjVxb0RvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1oQk5zbmhZNzNCVjh0aWNRYTZZTllxTlRwa00xWElMUGwrb00xVUx2WHZZc2ZUVXRjV2REMGZlV1pnOXJEMzJiSXFGb1FpbzFvcnZHT2VQWkNzTUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFmWHpscWRuL0Y3Wnczckl6MC8xNCtEUERSV0xFSUFrWExYSUFYV05CQmFtelBLOWordmZucXZkL0M5MjJPdDBoRWdOOXZPT3IzYXVsc3ZqOTlTR2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDE1NTE5NzE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NTY3MTk0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
