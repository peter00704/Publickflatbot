const Discord = require("discord.js");
module.exports = {
    name: 'lol',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) =>{

let lolEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("lol")
            .addField("https://na.leagueoflegends.com/en-us/")
            .setImage('https://cdn.discordapp.com/attachments/831852880176349234/834057701277171722/images.png')
            .setTimestamp(message.createdAt)
            .setFooter("lol")
    
            message.channel.send(lolEmbed)
    }
};