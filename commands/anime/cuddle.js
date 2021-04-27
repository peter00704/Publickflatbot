const superagent = require("superagent");
const got = require('got');
const Discord = require("discord.js");
module.exports = {
    name: "cuddle",
    category: "anime",
    descriptoin: "cudlle Parancs",
    run: async (client, message, args) => {
        let msg = await message.channel.send("Készítés...");
 
        let {body} = await superagent
        .get('https://waifu.pics/api/sfw/cuddle')
        console.log(body.file)
        if(!{body}) return message.channel.send("Nem találok. Probáld újra!")
     
           let cEmbed = new Discord.MessageEmbed()
           .setColor('RANDOM')
           .setAuthor(`Cuddle`, message.guild.iconURL)
           .setImage(body.url)
           .setTimestamp()
           .setFooter("Cute", client.user.displayAvatarURL)
     
           message.channel.send({embed: cEmbed})
     
           msg.delete();
    }
    }