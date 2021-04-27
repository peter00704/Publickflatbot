const Discord = require("discord.js");
const superagent = require("superagent");
const got = require('got');
var weather = require('weather-js');
const fs = require('fs')
const ascii = require ("ascii-table");
const client = new Discord.Client();

//////////////////////////////////////////////////////////////
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
  require (`./handlers/${handler}`)(client)
});

client.on("message", async message => {
  var prefix = "f!";

  if(message.author.bot) return;
  if(!message.guild);
  if(!message.content.startsWith(prefix)) return;
  if(!message.member) message.member = await message.guild.fetchMember(message)

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if(cmd.length === 0) return;

  let command = client.commands.get(cmd);
  if(!command) command = client.commands.get(client.aliases.get(cmd));

  if(command)
  command.run(client, message, args);
});

/////////////////////////////////////////////////////////////
 
client.on("ready", () => {
  console.log(`Bejelentkezve: \n` + client.user.tag);
 
  client.user.setActivity("f!help",{
    type: "WATCHING"
  });
});
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm");
 
  var prefix = "f!";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
 
if(cmd === `ping`) {
  message.channel.send("Pong! :ping_pong:")
}

if(cmd === `anyád`) {
    message.channel.send("Anyád")
  }

if(cmd === `${prefix}behívás`) {
  var embed = new Discord.MessageEmbed()
  .setColor("GRAY")
  .setTitle("Behívólink")
  .setDescription("Ezzel tudod behívni  a botot a szerveredre")
  .addField("https://discord.com/api/oauth2/authorize?client_id=806164413136371722&permissions=1544416503&scope=bot")
  .setFooter("Link")
  .setTimestamp()
 
  message.channel.send(embed)
}

if(cmd === `${prefix}botinfo`) {
  let embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle("Bot információi")
  .setDescription("A bot JavaScriptben készült")
  .addField("Bot fejleszőtje:", "Peti")
  .addField("Bot neve:", client.user.username)
  .addField("A bot ennyi szerveren van bent:", client.guilds.cache.size)
  .addField("A bot ezen az operációs rendszeren fut:", "Windows 10 PRO")
  .addField("A bot prefixe:", prefix)
 
  message.channel.send(embed)
}

if(cmd === `${prefix}help`) {
  let embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle("PREFIX:")
  .setDescription("f!")
  .addField("NSFW:", "nsfwneko, nsfwwaifu, blowjob, trap, kill, cum, nsfwnekogif, cumjpg, anal, hentai")
  .addField("SFW:", "neko, waifu, cuddle")
  .addField("FUN:", "meme, ping, botinfo, weather, say, search, emojify, badges, sourcebin, chat, macsek")
  .addField("GAME:", "8ball, tictactoe, akasztófa, kérdések")
  .addField("MODERATIONS:", "ban, kick, clear, report, behívás")
  .addField("JÁTÉKINFO:", "valorant, csgo, fortnite, lol, minecraft, leet, pupg, r6, terraia, valorant, watchdogs2, apex",)
  .addField("UTILITY:", "avatar, serverinfo, instagram")

  message.channel.send(embed)
}
});
 
client.login('ODA2MTY0NDEzMTM2MzcxNzIy.YBldHQ.A9uRE3fVXJmqNZtaNVsx1lRVq4U');