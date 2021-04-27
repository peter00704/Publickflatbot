const { Client, Message, MessageEmbed } = require ('discord.js');
const { create } = require('sourcebin');

module.exports = {
    name : 'bin',
/**
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */ 
    aliases: ["sourcebin", "upload", "feltöltés"],
    run : async (client, message, args) => {
       const content = args.join(" ");
       if(!content) return message.reply("Légyszives adj meg egy kontentet!");
       
        create([
            {
            name: 'random-code',
            content,
            language: 'javascript', 
        }
    ],
    {
        title: "A kódod:",
        description: "Ida van feltöltve a kódod :D",
    }
    ).then((value) => {
        message.channel.send(`A kódod ki lett rakva: ${value.url}`);
    });
    },
    };