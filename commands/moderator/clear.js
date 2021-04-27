module.exports = {
    name: "clear",
    aliases: ["purge", "nuke"],
    category: "moderator",
    description: "Clears the chat",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Nincs jogod törölni!").then(m => m.delete(5000));
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Kérlek adj meg egy számot!").then(m => m.delete(5000));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Nincs jogom törölni az üzenteket!").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 300;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Töröltem \`${deleted.size}\` üzentet.`))
            .catch(err => message.reply(`Error: ${err}`));
    }
}