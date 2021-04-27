const superagent = require("superagent");
const got = require('got');
const Discord = require("discord.js");
module.exports = {
    name: "say",
    category: "Fun",
    descriptoin: "say Parancs",
    run: async (client, message, args) => {
            let szöveg = args.join(" ");
          
            if(szöveg) {
                let dumaEmbed = new Discord.MessageEmbed()
            .setColor("#98AA12")
            .setAuthor(message.author.username)
            .addField("Szöveg:", szöveg)
            .setFooter("Szöveg")
          
            message.channel.send(dumaEmbed)
            } else {
                message.reply("írj szöveget!")
            }
          }
        }