/*
> Recode script give credits to›
Blood Angel

📝 | Created By Dr Blood Angel
🖥️ | Base Ori By Dr Blood Angel
📝 | Created By Blood Angel
📌 |Credits Blood Angel
📱 |Chat wa:242061020744
👑 |Github: BLOOD-242 
✉️ |Email: bloodangel242@gmail.com
*/
const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// setting bot
global.owner = "242061020744"
global.ownername = "✰𝆺꯭𝅥×͜͡ 𝕯𝖗 𝕭𝖑𝖔𝖔𝖉 𝖌𝖊𝖓𝖊𝖘𝖎𝖘 ᴬᴺᴳᴱᴸ🪶×͜͡𝆺꯭𝅥✞_ "
global.botname = "𝗚𝗘𝗡𝗘𝗦𝗜𝗦 𝗠𝗗"
global.author = "242061020744"
global.xprefix = '.'
global.autostatus = true 
global.Public = true 
global.packname = "𝗚𝗘𝗡𝗘𝗦𝗜𝗦 𝗠𝗗"
global.author = "𝗕𝗟𝗢𝗢𝗗-𝗔𝗡𝗚𝗘𝗟"
//=================================================//
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""
//=================================================//
global.mess = {
    owner: '`command reserved for owner only<\>`',
 prem: '`command reserved for premium only<\>`',
    admin: '`command reserved for admins only<\>`',
    group: '`feature for group only<\>`',
    done: '`Done ✓`',
    error: 'Error !',
    success: 'Succes •'
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})