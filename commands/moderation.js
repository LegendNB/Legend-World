const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'moderation',
    usage: 'server',
    execute(client, message, args) {
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
            const i = new Discord.MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setTitle('Moderation Commands')
            .setDescription(`${client.prefixes[message.guild.id].prefixes}help [command]`)
            .setDescription([
                '`ban`,`prefix`,`kick`',
                `${client.prefixes[message.guild.id].prefixes}help <command> 
            Example: ${client.prefixes[message.guild.id].prefixes}help-support`
            ].join('\n\n'))
            .setColor('RANDOM')
            .setFooter(`Made by Desnond#2020`, `${client.users.cache.get('713290150750453832').avatarURL({
                format: 'png',
                dynamic: true,
                size: 256
                })}`);
        message.channel.send(i)
    }
}
