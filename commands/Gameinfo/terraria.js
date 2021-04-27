const Discord = require("discord.js");
module.exports = {
    name: 'terraria',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) =>{

let terrariaEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("terraria")
            .addField("https://terraria.org")
            .setImage('https://cdn.discordapp.com/attachments/831852880176349234/834059899067564112/11307z-RHo6rTa3uirsDi0iizda464KBuLB8IIbccr0JVoUUAHIWBHXozEJjj1QqsG2tVZPIPmcvjY-CL_t3pZ6jIlkWFz3C.png')
            .setTimestamp(message.createdAt)
            .setFooter("terraria")
    
            message.channel.send(terrariaEmbed)
    }
};