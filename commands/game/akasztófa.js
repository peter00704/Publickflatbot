const { hangman } = require('reconlx')

module.exports = {
    name : 'akasztófa',
    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Nincs megfelelő rangod!')
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('Kérlek jelölj meg egy csatornát!')
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send('Kérlek ed meg egy szót!')

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start();
    }
}