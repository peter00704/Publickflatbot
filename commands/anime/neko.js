const superagent = require("superagent");
const got = require('got');
const Discord = require("discord.js");
module.exports = {
    name: "neko",
    category: "anime",
    descriptoin: "anime Parancs",
    run: async (client, message, args) => {
        let msg = await message.channel.send("Készítés...");
 
    let {body} = await superagent
    .get('https://waifu.pics/api/sfw/neko')
    console.log(body.file)
    if(!{body}) return message.channel.send("Nem találok. Probáld újra!")
 
       let cEmbed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setAuthor(`Neko`, message.guild.iconURL)
       .setImage(body.url)
       .setTimestamp()
       .setFooter("Itt van neked Neko", client.user.displayAvatarURL)
 
       message.channel.send({embed: cEmbed})
 
       msg.delete();
    }};