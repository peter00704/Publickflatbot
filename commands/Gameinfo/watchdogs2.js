const Discord = require("discord.js");
module.exports = {
    name: 'watchdogs2',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) =>{

let wd2Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("watch dogs 2")
            .addField("https://www.ubisoft.com/en-us/game/watch-dogs/watch-dogs-2")
            .setImage('https://cdn.discordapp.com/attachments/831852880176349234/834059980092866600/9k.png')
            .setTimestamp(message.createdAt)
            .setFooter("watch dogs 2")
    
            message.channel.send(wd2Embed)
    }
};