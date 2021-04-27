const Discord = require("discord.js");
module.exports = {
    name: 'leet',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) =>{

let leetEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("leet")
            .addField("https://leet.hu/")
            .setImage('https://cdn.discordapp.com/attachments/831852880176349234/834058233165512704/9k.png')
            .setTimestamp(message.createdAt)
            .setFooter("Újdonságok")
    
            message.channel.send(leetEmbed)
    }
};