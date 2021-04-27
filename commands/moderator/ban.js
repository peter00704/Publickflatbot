const Discord = require("discord.js");
module.exports = {
    name: "ban",
    catgory: "Moderator",
    description: "Ban parancss.",
    run: async (bot, message, args) => {

            let prefix = "!"

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Ehhez nincs jogod!")
    let ban_user = message.mentions.members.first();
    if(args[0] && ban_user){

        if(args[1]){

            let BanEmbed = new Discord.MessageEmbed()
            .setTitle("BAN")
            .setColor("RED")
            .setDescription(`**Banolta:** ${message.author.tag}\n**Banolva lett:** ${ban_user.user.tag}\n**Ban indoka:** ${args.slice(1).join(" ")}`)

        message.channel.send(BanEmbed);

            ban_user.ban(args.slice(1).join(" "));

        } else {
        let parancsEmbed = new Discord.MessageEmbed()
        .setTitle("Parancs használata:")
        .addField(`\`${prefix}ban <@név> [indok]\``, "˘˘˘")
        .setColor("BLUE")
        .setDescription("HIBA: Kérlek adj meg egy indokot!!")

        message.channel.send(parancsEmbed);
        }

    } else {
        let parancsEmbed = new Discord.MessageEmbed()
        .setTitle("Parancs használata:")
        .addField(`\`${prefix}ban <@név> [indok]\``, "˘˘˘")
        .setColor("BLUE")
        .setDescription("HIBA: Kérlek említs meg egy embert!")

        message.channel.send(parancsEmbed);

    }
}
}