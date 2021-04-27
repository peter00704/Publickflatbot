const Discord = require("discord.js")
module.exports = {
    name: 'serverinfo',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) =>{

let serverEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.addField("id:", message.guild.id)
.addField("név:", message.guild.name)
.addField("Tagok száma:", message.guild.memberCount)
.addField("Tulaj:", message.guild.owner)
.addField("Ikon:", message.guild.icon)
.addField("Csatornák:", message.guild.channels)
.setDescription("Szerver info")
.setTimestamp(message.createdAt)
.setFooter("Szerver info")
    
            message.channel.send(serverEmbed)
    }
};