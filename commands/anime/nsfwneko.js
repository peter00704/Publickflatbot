const superagent = require("superagent");
const got = require('got');
const Discord = require("discord.js");
module.exports = {
    name: "nsfwneko",
    category: "anime",
    descriptoin: "nsfwneko Parancs",
    
    run: async (client, message, args) => {
        let msg = await message.channel.send("Készítés...");
        if (message.channel.nsfw) {
            let {body} = await superagent
        .get('https://waifu.pics/api/nsfw/neko')
        console.log(body.file)
        if(!{body}) return message.channel.send("Nem találok. Probáld újra!")
     
           let cEmbed = new Discord.MessageEmbed()
           .setColor('RANDOM')
           .setAuthor(`Neko`, message.guild.iconURL)
           .setImage(body.url)
           .setTimestamp()
           .setFooter("Itt van neked szexi Neko", client.user.displayAvatarURL)
           message.channel.send(cEmbed)
     
           msg.delete();
          } else {
            message.channel.send("https://i.imgur.com/oe4iK5i.gif")

            msg.delete();
          };
    }};