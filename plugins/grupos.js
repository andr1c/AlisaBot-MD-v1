//COMANDO PARA GRUPOS
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
require('../main')

async function grupo(m, command, isGroupAdmins, text, conn, participants, isBotAdmins, args, isCreator, delay, sender, quoted, mime, from, isCreator, groupMetadata, fkontak, delay, store) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'hidetag' || command == 'notificar' || command == 'tag') {  
if (!m.isGroup) return m.reply(info.group) 
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(lenguaje.grupos.text) 
conn.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'grupo') {
if (!m.isGroup) return m.reply(info.group);  
if (!isBotAdmins) return m.reply(info.botAdmin);  
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n*${prefix + command} abrir*\n*${prefix + command} cerrar*`)
if (args[0] === 'abrir') {
m.reply(lenguaje.grupos.text1)
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (args[0] === 'cerrar') {
m.reply(lenguaje.grupos.text2)
await conn.groupSettingUpdate(m.chat, 'announcement')
}}
    
if (command == 'delete' || command == 'del') {
if (!m.quoted) throw false
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
let { chat, fromMe, id} = m.quoted
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
  
if (command == 'join' || command == 'unete') {
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!code) return m.reply(`${lenguaje.grupos.text3}\n*#join ${nn}*`) 
if ( isCreator || m.fromMe) {
m.reply(lenguaje.grupos.text4)
await delay(3 * 3000)
let res = await conn.groupAcceptInvite(code).then((code) => m.reply(jsonformat(code))).catch((err) => m.reply(jsonformat(err)))
//await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)
await delay(2 * 2000)
m.reply(lenguaje.grupos.text7)
await delay(3 * 3000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${lenguaje.grupos.text5}\nwa.me/${m.sender.split('@')[0]}\n\n${lenguaje.grupos.text6}\n${link}`, jid)
await delay(25 * 25000)
m.reply(lenguaje.grupos.text8)}
}

if (command == 'setppgroup' || command == 'setpp') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!quoted) return m.reply(lenguaje.grupos.text9)
if (!/image/.test(mime)) return m.reply(`${lenguaje.grupos.text10} ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`${lenguaje.grupos.text10} ${prefix + command}`)
var mediz = await conn. downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await conn.query({tag: 'iq', attrs: {to: m.chat, type:'set', xmlns: 'w:profile:picture' }, content: [ {tag: 'picture', attrs: { type: 'image' }, content: img } ]}) 
fs.unlinkSync(mediz)
m.reply(lenguaje.exito()) 
} else {
var memeg = await conn.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
m.reply(lenguaje.exito())}}

if (command == 'setppname' || command == 'nuevonombre' || command == 'newnombre') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(lenguaje.grupos.text) 
await conn.groupUpdateSubject(m.chat, text)
await m.reply(lenguaje.grupos.text11)}

if (command == 'setdesc' || command == 'descripción') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(lenguaje.grupos.text) 
await conn.groupUpdateDescription(m.chat, text)
await m.reply(lenguaje.grupos.text12)}

if (command == 'anularlink' || command == 'resetlink' || command == 'revoke') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
let res = conn.groupRevokeInvite(m.chat)}

if (command == 'add' || command == 'agregar' || command == 'invitar') {
if (!m.isGroup) return m.reply(info.group);  
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.grupos.text13}\n${prefix}add +5244446577`)
if (text.includes('+')) return m.reply(lenguaje.grupos.text14)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
await conn.sendMessage(text+'@s.whatsapp.net', {text: `${lenguaje.grupos.text15}\n\n${link}`, mentions: [m.sender]})
m.reply(lenguaje.exito())}

if (command == 'kick' || command == 'echar' || command == 'sacar') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
const kicktext = `${lenguaje.grupos.text16}`;
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
if (m.mentionedJid.includes(conn.user.jid)) return;
const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
const owr = m.chat.split`-`[0];
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}

if (command == 'promote' || command == 'darpoder') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!m.mentionedJid[0] && !m.quoted) return m.reply(lenguaje.grupos.text17)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))}

if (command == 'demote' || command == 'quitarpoder') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!m.mentionedJid[0] && !m.quoted) return m.reply(lenguaje.grupos.text18)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))}

if (command == 'link' || command == 'linkgc') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
let response = await conn.groupInviteCode(m.chat)
conn.sendText(m.chat, `https://chat.whatsapp.com/${response}`, m, { detectLink: true })}

if (command == 'banchat') { 
if (!m.isGroup) return m.reply(info.group) 
if (!isCreator) return m.reply(info.owner) 
if (!text) return m.reply(`${lenguaje.enable.text}\n*${prefix + command} on*\n*${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].isBanned = true
m.reply(lenguaje.grupos.text19)
} else if (args[0] === "off") {  
global.db.data.chats[m.chat].isBanned = false
m.reply(lenguaje.grupos.text20)}}

if (command == 'tagall' || command == 'invocar' || command == 'todos') {
if (!m.isGroup) return m.reply(info.group) 
if (!isGroupAdmins) return m.reply(info.admin)
const pesan = args.join` `;
const oi = `${lenguaje.grupos.text21} ${pesan}`;
let teks = `❑ ━〔 *📢 ＩＮＶＯＣＡＣＩＯＮ 📢* 〕━ ❑\n\n`
teks += `${oi}\n\n`
for (let mem of participants) {
teks += `➥ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'admins' || command == 'administradores') {
if (!m.isGroup) return m.reply(info.group);  
const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/admins.jpg';
const groupAdmins = participants.filter((p) => p.admin);
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n➥ ');
const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
const pesan = args.join` `;
const oi = `${lenguaje.grupos.text21} ${pesan}`;
const text = `═✪〘 *ＩＮＶＯＣＡＮＤＯ ＡＤＭＩＮＳ* 〙✪═\n\n• *ɢʀᴜᴘᴏ:* [ ${groupMetadata.subject} ]\n\n• ${oi}\n\n• *ᴀᴅᴍɪɴs:*\n➥ ${listAdmin}\n\n${lenguaje.grupos.text22}`.trim(); 
conn.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'infogrupo' || command == 'groupinfo') {
if (!m.isGroup) return m.reply(info.group);  
const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
const {welcome, antilink, antiFake, antiArabe, detect, autosticker, antiNsfw, modeadmin} = global.db.data.chats[m.chat];
const groupAdmins = participants.filter((p) => p.admin);
const listAdmin = groupAdmins.map((v, i) => `${i + 1} @${v.id.split('@')[0]}`).join('\n ');
const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
const text = `╭━━[ .⋅ ${lenguaje.grupos.text23} ⋅]━━━⬣ 
*🔸️ ɪᴅ:*
• ${groupMetadata.id}

${lenguaje.grupos.text24}
• ${groupMetadata.subject}

${lenguaje.grupos.text25}
• ${participants.length} ${lenguaje.grupos.text26}

${lenguaje.grupos.text27}
• @${owner.split('@')[0]}

*🔸️ ᴀᴅᴍɪɴs:*
 ${listAdmin}

${lenguaje.grupos.text28}
• Welcome: ${welcome ? '✅' : '❌'}
• Antilink: ${antilink ? '✅' : '❌'}
• Antifake: ${antiFake ? '✅' : '❌'}
• Antiarabe : ${antiArabe ? '✅' : '❌'}
• Detect: ${detect ? '✅' : '❌'}
• Autostickers: ${autosticker ? '✅' : '❌'}
• modocaliente: ${antiNsfw ? '✅' : '❌'}
• modoadmins: ${modeadmin ? '✅' : '❌'}

${lenguaje.grupos.text29}
• ${groupMetadata.desc?.toString() || 'desconocido'}`.trim();
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]})}

if (command == 'warn' || command == 'advertencia') {
if (!m.isGroup) return m.reply(info.group);  
if (!isBotAdmins) return m.reply(info.botAdmin);  
if (!isGroupAdmins) return m.reply(info.admin)
let war = global.maxwarn 
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) return m.reply(`${lenguaje.grupos.text30} ${prefix + command} @user`) 
if (!(who in global.db.data.users)) return m.reply(lenguaje.grupos.text31)  
let name = conn.getName(m.sender)
let warn = global.db.data.users[who].warn
if (warn < war) {
global.db.data.users[who].warn += 1
conn.sendMessage(m.chat, { text: `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┝ ${lenguaje.grupos.text32}
┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ • ${lenguaje.grupos.text33} @${who.split`@`[0]}
┊ • ${lenguaje.grupos.text34} ${warn + 1}/${war}
┊ • ${lenguaje.grupos.text35} 🫵🏾 ${text}
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`, mentions: [who]}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await delay(2000)
m.reply(`${lenguaje.grupos.text36}

• ${lenguaje.grupos.text34} ${warn + 1}/${war} 
${lenguaje.grupos.text37}`, who)
} else if (warn == war) {
global.db.data.users[who].warn = 0
m.reply(`${lenguaje.grupos.text38}`)
await delay(3000)
await conn.groupParticipantsUpdate(m.chat, [who], 'remove')}}

if (command == 'unwarn' || command == 'quitardvertencia') {
if (!m.isGroup) return m.reply(info.group);  
if (!isBotAdmins) return m.reply(info.botAdmin);  
if (!isGroupAdmins) return m.reply(info.admin)
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) return m.reply(lenguaje.grupos.text30) 
if (!(who in global.db.data.users)) return m.reply(lenguaje.grupos.text31) 
let warn = global.db.data.users[who].warn
if (warn > 0) {
global.db.data.users[who].warn -= 1
m.reply(`╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┝ ${lenguaje.grupos.text39}
┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ • ${lenguaje.grupos.text34} *-1*
┊ • ${lenguaje.grupos.text40} *${warn - 1}*
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`)
await delay(3000)
m.reply(`${lenguaje.grupos.text41} *${warn - 1}*`, who)
} else if (warn == 0) {
m.reply(lenguaje.grupos.text42)}}

if (command == 'listwarn') {
const adv = Object.entries(global.db.data.users).filter((user) => user[1].warn);
const warns = global.db.data.users.warn;
const user = global.db.data.users;
const imagewarn = './src/warn.jpg';
const caption = `${lenguaje.grupos.text32}\n 
╔═══════════════════·•
║ *𝚃𝚘𝚝𝚊𝚕 : ${adv.length} ${lenguaje.grupos.text33} ${adv ? '\n' + adv.map(([jid, user], i) => `
║
║ 1.- ${isCreator ? '@' + jid.split`@`[0] : jid} *(${user.warn}/4)*\n║\n║ - - - - - - - - -`.trim()).join('\n') : ''}
╚══════════════════·•`;
conn.sendMessage(m.chat, {text: caption, contextInfo:{ mentionedJid: [...caption.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'enline' || command == 'online' || command == 'listonine' || command == 'listaenlinea' || command == 'enlinea' || command == 'listonline') {
if (!m.isGroup) return m.reply(info.group);  
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), numBot]
conn.sendText(m.chat, '*Lista de activos | online:*\n\n' + online.map(v => '❑ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })}}

module.exports = { grupo }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
