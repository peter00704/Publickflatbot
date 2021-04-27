const superagent = require("superagent");
const got = require('got');
const Discord = require("discord.js");
module.exports = {
    name: "meme",
    category: "Fun",
    descriptoin: "meme Parancs",
    run: async (client, message, args) => {
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            const [list] = JSON.parse(response.body);
            const [post] = list.data.children;
          
            message.channel.send(
                new Discord.MessageEmbed()
                .setTitle(post.data.title)
                .setURL(`https://reddit.com${post.data.permalink}`)
                .setColor('RANDOM')
                .setImage(post.data.url)
                .setFooter(`👍 ${post.data.ups} 💬 ${post.data.num_comments}`)
            );
          }).catch(console.error);
          }
    }