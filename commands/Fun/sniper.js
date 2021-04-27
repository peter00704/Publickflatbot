const superagent = require("superagent");
const got = require('got');
const Discord = require("discord.js");
module.exports = {
    name: "sniper",
    category: "meme",
    descriptoin: "meme Parancs",
    run: async (client, message, args) =>{
        let love = Math.round(Math.random() * 100);
        const hugUser = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!hugUser)
        return message.channel.send(
        ":x: Jelölj meg valakit hogy fejbelőhessem!"
        );
        if (hugUser.id === message.author.id)
        return message.channel.send(
        "öngyilos lettél :/"
        );
        
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage("https://tenor.com/view/sniper-sniping-shooting-guns-shoot-gif-9579894")
        .setDescription(
        `**${message.author.username}** haragudott **${
        message.mentions.users.first().username
        }**-ra ezért fejbelőtte.`
        );
        message.channel.send(embed)
        }
    }