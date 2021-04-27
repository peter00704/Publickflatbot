const Discord = require("discord.js");
module.exports = {
    name: 'fortnite',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) =>{

let fEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Fortnite")
            .addField("https://www.epicgames.com/fortnite/en-US/home")
            .setImage('https://cdn.discordapp.com/attachments/831852880176349234/834057391234220082/2Q.png')
            .setTimestamp(message.createdAt)
            .setFooter("Fortnite")
    
            message.channel.send(fEmbed)
    }
};