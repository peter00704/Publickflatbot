const Discord = require("discord.js");
module.exports = {
    name: 'avatar',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) =>{

let avatarEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.addField("Íme az avatárod:")
.setDescription("Az avatárod képe")
.setImage(message.author.displayAvatarURL())
.setTimestamp(message.createdAt)
.setFooter("Avatár")
    
            message.channel.send(avatarEmbed)
    }
};