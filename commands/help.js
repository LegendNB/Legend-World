const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'help',
    execute(client, message, args) {
        if(args[0])
        return;
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
            const help = new Discord.MessageEmbed()
                .setAuthor(member.user.tag, member.user.displayAvatarURL())
                .setTitle("Bot Commands")
                .addField("`Preifx`", `${client.prefixes[message.guild.id].prefixes}`)
                .addField("`General`", "Show you some general commands.")
                .addField("`Fun`", "Show you the minigames commands.")
                .addField("`moderation`", `Show you some moderation commands`)
                .setColor('RANDOM')
                .setFooter(`Made by Desmond#2020`, `${client.users.cache.get('713290150750453832').avatarURL({
                    format: 'png',
                    dynamic: true,
                    size: 256
                    })}`);
            message.channel.send(help);
       
    }
}