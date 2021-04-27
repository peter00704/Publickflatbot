const Discord = require("discord.js");
module.exports = {
    name: 'valorant',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) =>{

let valoEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("valorant")
            .addField("https://playvalorant.com")
            .setImage('https://cdn.discordapp.com/attachments/831852880176349234/834059699656720494/2Q.png')
            .setTimestamp(message.createdAt)
            .setFooter("valorant")
    
            message.channel.send(valoEmbed)
    }
};