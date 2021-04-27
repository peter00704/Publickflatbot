const Discord = require("discord.js");
module.exports = {
    name: 'minecraft',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) =>{

let mcEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("minecraft")
            .addField("https://minecraft.net")
            .setImage('https://cdn.discordapp.com/attachments/831852880176349234/834057950807982090/images.png')
            .setTimestamp(message.createdAt)
            .setFooter("minecraft")
    
            message.channel.send(mcEmbed)
    }
};