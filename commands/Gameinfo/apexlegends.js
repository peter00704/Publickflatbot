const Discord = require("discord.js");
module.exports = {
    name: 'apex',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) =>{

let apexEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Apex")
            .addField("https://www.ea.com/games/apex-legends")
            .setImage('https://cdn.discordapp.com/attachments/831852880176349234/834056498720145448/9k.png')
            .setTimestamp(message.createdAt)
            .setFooter("Apex")
    
            message.channel.send(apexEmbed)
    }
};