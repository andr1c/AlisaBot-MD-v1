require('../main.js') 
const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 
const path = require("path")
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
const {createHash} = require('crypto') 
const { canLevelUp, xpRange } = require('../libs/levelling.js')

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime 
if (!afkTime || afkTime < 0) continue 
let reason = user.afkReason || ''
m.reply(`${lenguaje.rpg.text}\n\n${reason ? '🔸️ *𝚁𝙰𝚉𝙾𝙽* : ' + reason : '🔸️ *𝚁𝙰𝚉𝙾𝙽* : 𝚂𝚒𝚗 𝚛𝚊𝚣𝚘𝚗'}\n🔸️ ${lenguaje.rpg.text1} ${clockString(new Date - afkTime)}`.trim())}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`${lenguaje.rpg.text2}\n${user.afkReason ? '\n*𝚁𝙰𝚉𝙾𝙽 :* ' + user.afkReason : ''}\n${lenguaje.rpg.text1} ${clockString(new Date - user.afkTime)}`.trim())
user.afkTime = -1
user.afkReason = ''  
}

async function reg(command, conn, m, sender, text, budy, fkontak, delay, args) {
if (command == 'reg' || command == 'verificar') {
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let user = global.db.data.users[m.sender]
let codigosIdiomas = ['es', 'en']
let nombresIdiomas = {'es': 'Español', 'en': 'English' }
if (user.registered === true) return m.reply(lenguaje.smsReg()) 
if (!Reg.test(text)) return m.reply(lenguaje.smsReg1(prefix)) 
let [_, name, splitter, age] = text.match(Reg)
if (!name) return m.reply(lenguaje.smsReg2()) 
if (!age) return m.reply(lenguaje.smsReg3()) 
age = parseInt(age)
if (age > 100) return m.reply(lenguaje.smsReg4()) 
if (age < 6) return m.reply(lenguaje.smsReg5()) 
if (name.length >= 30) return m.reply(lenguaje.smsReg6()) 
user.name = name + 'ͧͧͧͦꙶͣͤ✓'.trim()
user.age = age
user.regTime = + new Date
user.registered = true
const sn = createHash('md5').update(m.sender).digest('hex');
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
global.db.data.users[m.sender].limit += 2
global.db.data.users[m.sender].exp += 200
conn.sendMessage(m.chat, { text: lenguaje.smsReg7(name, user, age, time, date, sender, sn, prefix, rtotalreg),
contextInfo:{
mentionedJid:[name],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${botname}`,
"body": `${name}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": imagen1, 
"sourceUrl": md}}},
{ quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await delay(2 * 2000)
conn.sendMessage(m.chat, { text: sn, contextInfo:{forwardingScore: 9999999, isForwarded: true, }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await delay(2 * 2000)
conn.sendMessage(m.chat, { text: lenguaje.smsReg8(), contextInfo:{forwardingScore: 9999999, isForwarded: true, }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'unreg') {
const {createHash} = require('crypto') 
if (!args[0]) return m.reply(lenguaje.rpg.unreg) 
const user = global.db.data.users[m.sender];
const sn = createHash('md5').update(m.sender).digest('hex');
if (args[0] !== sn) return m.reply(lenguaje.rpg.myns) 
user.registered = false; 
global.db.data.users[m.sender].limit -= 2
global.db.data.users[m.sender].exp -= 200
m.reply(lenguaje.rpg.delreg)}

if (command == 'myns') {
const {createHash} = require('crypto') 
let sn = createHash('md5').update(m.sender).digest('hex')
conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', `${lenguaje.rpg.myns2}`, 'status@broadcast')}}

async function rpg(m, command, participants, args, sender, pushname, text, conn, fkontak, replace, who) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'lb' || command == 'leaderboard') {
let member = participants.map(u => u.id)
let me = m.split
const users = Object.entries(global.db.data.users).map(([key, value]) => {
return {...value, jid: key}});
const sortedExp = users.map(toNumber('exp')).sort(sort('exp'));
const sortedLim = users.map(toNumber('limit')).sort(sort('limit'));
const sortedLevel = users.map(toNumber('level')).sort(sort('level'));
const usersExp = sortedExp.map(enumGetKey);
const usersLim = sortedLim.map(enumGetKey);
const usersLevel = sortedLevel.map(enumGetKey);
const len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length);
const texto = `${lenguaje.rpg.text3}

╔═❖ *𝚃𝙾𝙿 ${len} 𝚇𝙿* 🧬 
║𝚃𝚞 : ${usersExp.indexOf(m.sender) + 1} 𝚍𝚎 ${usersExp.length}
${sortedExp.slice(0, len).map(({jid, exp}, i) => `║${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ *${exp} exp*`).join`\n`}
╚═══════════════  

╔═❖ *𝚃𝙾𝙿 ${len} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 💎*
║𝚃𝚞 : ${usersLim.indexOf(m.sender) + 1} 𝚍𝚎 ${usersLim.length}
${sortedLim.slice(0, len).map(({jid, limit}, i) => `║${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ *${limit} diamantes*`).join`\n`}
╚═══════════════  

╔═❖ *𝚃𝙾𝙿 ${len} 𝙽𝙸𝚅𝙴𝙻* ⬆️
║𝚃𝚞 : ${usersLevel.indexOf(m.sender) + 1} 𝚍𝚎 ${usersLevel.length}
${sortedLevel.slice(0, len).map(({jid, level}, i) => `║${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ *nivel ${level}*`).join`\n`}
╚═══════════════ `.trim();
conn.sendMessage(m.chat, { text: texto, contextInfo:{
mentionedJid: [...texto.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'afk') {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
const afk = `${lenguaje.rpg.text4} ${pushname} ${lenguaje.rpg.text5} ${text ? text : ''}\n\n\n\n\n\n\n`
conn.relayMessage(m.chat, {scheduledCallCreationMessage: {callType: 'VIDEO', scheduledTimestampMs: 0, title: afk }}, {})}

if (command == 'rob' || command == 'robar') {
const user = global.db.data.users[m.sender]
const date = global.db.data.users[m.sender].robs + 600000; //600000
if (new Date - global.db.data.users[m.sender].robs < 600000) return m.reply(`${lenguaje.rpg.text6} ${msToTime(date - new Date())}`) 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
else who = m.chat;
if (!who) return m.reply(lenguaje.rpg.rob)
try { 
if (!(who in global.db.data.users)) return m.reply(lenguaje.grupos.text31)
const users = global.db.data.users[who];
let exp = Math.floor(Math.random() * 15) + 10;
let limit = Math.floor(Math.random() * 5) + 3;
const rob = Math.floor(Math.random() * 500);
if (users.limit < 15) return conn.sendMessage(m.chat, {text: `${lenguaje.rpg.rob2} @${who.split`@`[0]} ${lenguaje.rpg.rob3}`, mentions: [who]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});  
if (users.exp < 10) return conn.sendMessage(m.chat, {text: `${lenguaje.rpg.rob2} @${who.split`@`[0]} ${lenguaje.rpg.rob4}`, mentions: [who]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});   
global.db.data.users[m.sender].exp += exp * 1;
global.db.data.users[m.sender].limit += limit * 1;
global.db.data.users[who].exp -= exp * 1;
global.db.data.users[who].limit -= limit * 1;
conn.sendMessage(m.chat, {text: `${lenguaje.rpg.rob5} @${who.split`@`[0]}*\n◦ ᴇxᴘ ${exp}\n◦ ᴅɪᴀᴍᴀɴᴛᴇ: ${limit}\n\n${lenguaje.rpg.rob6} @${m.sender.split("@")[0]}`, mentions: [who, m.sender]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
global.db.data.users[m.sender].robs = new Date * 1;
 } catch {
m.reply(lenguaje.rpg.rob7)}}

if (command == 'buy' || command == 'buyall') {
let count = command.replace(/^buy/i, '');
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / 450) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
count = Math.max(1, count);
if (global.db.data.users[m.sender].exp >= 450 * count) {
global.db.data.users[m.sender].exp -= 450 * count;
global.db.data.users[m.sender].limit += count;
m.reply(`╔═❖ ${lenguaje.rpg.buy}\n║‣ ${lenguaje.rpg.buy2} ${count}💎\n║‣ ${lenguaje.rpg.buy3} ${450 * count} XP\n╚═══════════════`);
} else m.reply(`${lenguaje.rpg.buy4} *${count}* ${lenguaje.rpg.buy5}`)
}

if (command == 'bal' || command == 'balance' || command == 'diamond') {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
if (!(who in global.db.data.users)) return m.reply(lenguaje.grupos.text31)
conn.sendMessage(m.chat, {text: `╔════≪ 𝙱𝙰𝙻𝙰𝙽𝙲𝙴 ≫════╗
║ • 📌 ${lenguaje.rpg.text7} @${who.split('@')[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 
║ • *💎𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴 :* ${user.limit}
║ • *⬆️𝙴𝚇𝙿 :* ${user.exp}
║ • *🪙𝙲𝙾𝙸𝙽𝚂 :* ${user.money}
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║ ${lenguaje.rpg.text8}
║ • *${prefix}buy <cantidad>*
║ • *${prefix}buyall*
╚═══════════════`, mentions: [who]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'minar' || command == 'mine') {
const date = global.db.data.users[m.sender].lastmiming + 600000;
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return m.reply(`*${lenguaje.rpg.text9} ${msToTime(date - new Date())} ${lenguaje.rpg.text10}*`) 
const exp = Math.floor(Math.random() * 1500)
global.db.data.users[m.sender].exp += exp;
m.reply(`*${lenguaje.rpg.text11} ${exp} XP*`)
global.db.data.users[m.sender].lastmiming = new Date * 1;
}

if (command == 'minar2' || command == 'mine2') {
const date = global.db.data.users[m.sender].lastmiming + 3600000;
if (new Date - global.db.data.users[m.sender].lastmiming < 3600000) return m.reply(`*${lenguaje.rpg.text9} ${msToTime(date - new Date())} ${lenguaje.rpg.text10}*`)
let minar = `${pickRandom(['Que pro 😎 has minado',
'🌟✨ Genial!! Obtienes', 'WOW!! eres un(a) gran Minero(a) ⛏️ Obtienes', 'Has Minado!!', '😲 Lograste Minar la cantidad de', 'Tus Ingresos subiran gracias a que minaste', '⛏️⛏️⛏️⛏️⛏️ Minando', '🤩 SII!!! AHORA TIENES', 'La minaria esta de tu lado, por ello obtienes', '😻 La suerte de Minar', '♻️ Tu Mision se ha cumplido, lograste minar', '⛏️ La Mineria te ha beneficiado con', '🛣️ Has encontrado un Lugar y por minar dicho lugar Obtienes', '👾 Gracias a que has minado tus ingresos suman', 'Felicidades!! Ahora tienes','⛏️⛏️⛏️ Obtienes'])}` 
//const exp = Math.floor(Math.random() * 2500)
const diamond = Math.floor(Math.random() * 60)
const money = Math.floor(Math.random() * 2500)
//global.db.data.users[m.sender].exp += exp
global.db.data.users[m.sender].limit += diamond
global.db.data.users[m.sender].money += money
m.reply(`${minar}\n💎 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄: ${diamond}\n🪙 𝐂𝐎𝐈𝐍𝐒: ${money}`)
m.react('💎') 
global.db.data.users[m.sender].lastmiming = new Date * 1;
}

if (command == 'trabajar' || command == 'work' || command == 'w') {
let hasil = Math.floor(Math.random() * 3000)
//let dono = Math.floor(Math.random() * 40)
let time = global.db.data.users[m.sender].lastwork + 3600000 //3600000
if (new Date - global.db.data.users[m.sender].lastwork < 3600000) return m.reply(`${lenguaje.rpg.text12}\n\n*${lenguaje.rpg.text9}* ${msToTime(time - new Date())} ${lenguaje.rpg.text13}`) 
let anu = (await axios.get('https://raw.githubusercontent.com/fgmods/fg-team/main/games/work.json')).data
let res = pickRandom(anu)
global.db.data.users[m.sender].exp += hasil
//global.db.data.users[m.sender].limit += dono
m.reply(`⚒️ ${res.fgwork} *${hasil} XP*`)
global.db.data.users[m.sender].lastwork = new Date * 1
}

if (command == 'claim' || command == 'daily') {
let time = global.db.data.users[m.sender].lastclaim + 7200000
if (new Date - global.db.data.users[m.sender].lastclaim < 7200000) return m.reply(`${lenguaje.rpg.text14} ${msToTime(time - new Date())}`) 
const exp = Math.floor(Math.random() * 900)
const limit = Math.floor(Math.random() * 30)
const money = Math.floor(Math.random() * 800)
global.db.data.users[m.sender].limit += limit;
global.db.data.users[m.sender].money += money
global.db.data.users[m.sender].exp += exp
m.reply(`${lenguaje.rpg.text15}
🆙 *xᴘ* : ${exp}
💎 *ᴅɪᴀᴍᴀɴᴛᴇ :* ${limit}
🪙 *ᴄᴏɪɴs :* ${money}`)
global.db.data.users[m.sender].lastclaim = new Date * 1
}

if (command == 'perfil') {
avatar = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let { money, exp, role, limit, level, registered, age} = global.db.data.users[m.sender]
conn.sendMessage(m.chat, { image: { url: avatar }, caption: `${lenguaje.rpg.pp}

${lenguaje.rpg.pp2} ${pushname} ${registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''}
${lenguaje.rpg.pp3} wa.me/${sender.split("@")[0]} ${registered ? '\n*🧐 EDAD :* ' + age + ' años' : ''}
${lenguaje.rpg.pp4} ${limit}
${lenguaje.rpg.pp5} ${level}
*⬆️ EXP :* ${exp}
${lenguaje.rpg.pp6} ${role}
${lenguaje.rpg.pp7} ${registered ? 'Si': 'No'}`}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react(done)}

if (command == 'levelup' || command == 'nivel') {
let name = conn.getName(m.sender);  
let user = global.db.data.users[m.sender]; 
if (!canLevelUp(user.level, user.exp, global.multiplier)) { 
let {min, xp, max} = xpRange(user.level, global.multiplier);
return m.reply(`╭╌「 ${lenguaje.rpg.level} 」
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
├ ${lenguaje.rpg.level2}
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
├─ ${lenguaje.rpg.level3} ${pushname}
├─ ❐ *XP 🆙:* ${user.exp - min}/${xp}
├─ ${lenguaje['smsAutonivel3']()} ${user.level}
├─ ${lenguaje['smsAutonivel6']()} ${user.role}
╰╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌

${lenguaje.rpg.level4} *${max - user.exp}* ${lenguaje.rpg.level5}`)} 
const before = user.level * 1; 
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++; 
if (before !== user.level) {
const str = `╭╌「 *LEVEL UP 🎊* 」
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
├『 🥳 ${pushname} ${lenguaje.rpg.level6}
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
├─ ${lenguaje['smsAutonivel4']()} ${before}
├─ ${lenguaje['smsAutonivel5']()} ${user.level}
├─ ${lenguaje['smsAutonivel6']()} ${user.role}
╰╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌

${lenguaje.rpg.level7}`.trim()
return m.reply(str)}}

if (command == 'cofre') {
if (global.db.data.users[m.sender].level < 9) return m.reply(`${lenguaje['nivel']()} 9 ${lenguaje['nivel2']()}`) 
const date = global.db.data.users[m.sender].lastcofre + 86400000; //10 hs
if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) return m.reply(`${lenguaje.rpg.text16} ${msToTime(date - new Date())}`) 
exp = Math.floor(Math.random() * 9999)
limit = Math.floor(Math.random() * 70)
trash = Math.floor(Math.random() * 600)
potion = Math.floor(Math.random() * 300)
money = Math.floor(Math.random() * 8500)
global.db.data.users[m.sender].exp += exp
global.db.data.users[m.sender].limit += limit
global.db.data.users[m.sender].trash += trash
global.db.data.users[m.sender].potion += potion
global.db.data.users[m.sender].money += money
m.reply(`╔══🎉═🎉═🎉══⬣\n║${lenguaje.rpg.text17}\n║┈┈┈┈┈┈┈┈┈┈┈┈┈\n║⚡${exp} 𝙴𝚇𝙿\n║💎 ${limit} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴\n║🗑️ ${trash} 𝙱𝙰𝚂𝚄𝚁𝙰\n║🥤 ${potion} 𝙿𝙾𝙲𝙸𝙾𝙽𝙴𝚂\n║🪙 ${money} 𝙲𝙾𝙸𝙽𝚂\n╚═════════════════⬣`)
global.db.data.users[m.sender].lastcofre = new Date * 1;
}}

//función pickrandow
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) {
    return (a, i, b) => {
      return {...b[i], [property]: a[property] === undefined ? _default : a[property]};
    };
  } else return (a) => a === undefined ? _default : a;
}

function enumGetKey(a) {
  return a.jid;
}

//temporarily
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}
module.exports = { reg, rpg }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})