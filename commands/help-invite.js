const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'help-invite',
    execute(client, message, args) {
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
            const help = new Discord.MessageEmbed()
                .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setTitle('Help Invite')
            .setDescription([
                `**Name:** invite`,
                `**Description:** Invites you to my discord server`,
                `**Command:** ${client.prefixes[message.guild.id].prefixes}invite`
            ].join('\n\n'))
            .setFooter(`Made by Desmond#2020`, `${client.users.cache.get('713290150750453832').avatarURL({
                format: 'png',
                dynamic: true,
                size: 256
                })}`);
            message.channel.send(help)
    }
}