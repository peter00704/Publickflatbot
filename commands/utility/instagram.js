const Discord = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "instagram",
    aliases: ["insta"],
    category: "info",
    description: "Find out some nice instagram statistics",
    usage: "<name>",
    run: async (client, message, args) => {
        const name = args.join(" ");

        if (!name) {
            return message.reply("Maybe it's useful to actually search for someone...!")
                .then(m => m.delete(5000));
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("I couldn't find that account... :(")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Profil infó", stripIndents`**- Felhasználónév:** ${account.username}
            **- Teljes név:** ${account.full_name}
            **- Bio:** ${account.biography.length == 0 ? "none" : account.biography}
            **- Posztok:** ${account.edge_owner_to_timeline_media.count}
            **- Követők:** ${account.edge_followed_by.count}
            **- Követi:** ${account.edge_follow.count}
            **- Privát:** ${account.is_private ? "Igen 🔐" : "Nem 🔓"}`);

        message.channel.send(embed);
    }
}