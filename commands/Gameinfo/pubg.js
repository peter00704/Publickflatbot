const Discord = require("discord.js");
module.exports = {
    name: 'pubg',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) =>{

let pubgEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("pupg")
            .addField("https://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/")
            .setImage('https://cdn.discordapp.com/attachments/831852880176349234/834058831566077982/pubg_game_660_141020121948.png')
            .setTimestamp(message.createdAt)
            .setFooter("pupg")
    
            message.channel.send(pubgEmbed)
    }
};