const { tictactoe } = require('reconlx')

module.exports = {
    name : 'tictactoe',
    aliases: ["ttt", "ox", "xo"],
    run : async(client, message, args) => {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Kérlek említs meg egy embert!')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}