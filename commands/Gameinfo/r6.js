const Discord = require("discord.js");
module.exports = {
    name: 'r6',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) =>{

let r6Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("r6")
            .addField("https://www.ubisoft.com/en-gb/game/rainbow-six/siege")
            .setImage('https://cdn.discordapp.com/attachments/831852880176349234/834059085367214100/9k.png')
            .setTimestamp(message.createdAt)
            .setFooter("r6")
    
            message.channel.send(r6Embed)
    }
};