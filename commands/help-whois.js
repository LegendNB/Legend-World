const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'help-whois',
    execute(client, message, args) {
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
            const a = new Discord.MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setTitle('Help Whois')
            .setDescription([
                `**Name:** whois`,
                `**Description:** Show you your discord information (Not private)`,
                `**Command:** ${client.prefixes[message.guild.id].prefixes}whois`,
                `**Command:** ${client.prefixes[message.guild.id].prefixes}whois (user)`,
            ].join('\n\n'))
            .setFooter(`Made by Desmond#2020`, `${client.users.cache.get('713290150750453832').avatarURL({
                format: 'png',
                dynamic: true,
                size: 256
                })}`);
            message.channel.send(a)
    }
}