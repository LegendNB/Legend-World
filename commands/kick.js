const Discord = require("discord.js")
module.exports = {
    name: 'kick',
   async execute(client, message, args) {
    if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.send("You don't have permission to use that command.");
    else {
        let member = message.guild.members.cache.get(args);
        if(member) {
        try {
            await member.kick();
            console.log('Kicked');
            message.channel.send(`${member}, Kicked!`)
        }   
            catch(err) {
            console.log(err);
        }
    }
    }
}
}