const Discord = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: "macsek",
    catgory: "Fun",
    description: "Lekér egy cuki cicát! :D",
    run: async (bot, message, args) => {
            let msg = await message.channel.send("*Macska betöltése...*")
    
            let {body} = await superagent
            .get(`https://aws.random.cat/meow`)
    
            if(!{body}) return message.channel.send("A file betöltésekor hiba lépett fel!")
    
            let catEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField("Ugye milyen cuki?", ":3")
            .setImage(body.file)
            .setTimestamp(message.createdAt)
            .setFooter("Macsek")
    
            message.channel.send(catEmbed)
        
    }
}