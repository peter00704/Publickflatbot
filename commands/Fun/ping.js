const superagent = require("superagent");
const got = require('got');
const Discord = require("discord.js");
module.exports = {
    name: "ping",
    category: "fun",
    descriptoin: "ping Parancs",
    run: async (client, message, args) =>{
        message.channel.send(`A bot pingje: **${Date.now() - message.createdTimestamp} ms**`)
    }
}