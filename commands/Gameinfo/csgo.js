const Discord = require("discord.js");
module.exports = {
    name: 'csgo',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) =>{

let csEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("csgo")
            .addField("https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/")
            .setImage('https://cdn.discordapp.com/attachments/831852880176349234/834056866287714354/csgo-wp--dyn--shareimg.png')
            .setTimestamp(message.createdAt)
            .setFooter("csgo")
    
            message.channel.send(csEmbed)
    }
};