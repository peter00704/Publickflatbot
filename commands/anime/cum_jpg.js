const superagent = require("superagent");
const got = require('got');
const Discord = require("discord.js");
module.exports = {
    name: "cumjpg",
    category: "anime",
    descriptoin: "cumjpg Parancs",
    run: async (client, message, args) => {
        let msg = await message.channel.send("Készítés...");
 
        if (message.channel.nsfw) {
            let {body} = await superagent
        .get('https://nekos.life/api/v2/img/cum_jpg')
        console.log(body.file)
        if(!{body}) return message.channel.send("Nem találok. Probáld újra!")
     
           let cEmbed = new Discord.MessageEmbed()
           .setColor('RANDOM')
           .setAuthor(`cum`, message.guild.iconURL)
           .setImage(body.url)
           .setTimestamp()
           .setFooter("cum", client.user.displayAvatarURL)
     
           message.channel.send({embed: cEmbed})
     
           msg.delete();
          } else {
            message.channel.send("https://i.imgur.com/oe4iK5i.gif")
            msg.delete();
          };
    }
    }