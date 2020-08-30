const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'help',
    execute(client, message, args) {
        const Desmond = ('Desmond#2020')
        let helpArray = message.content.split(" ");
        let helpArgs = helpArray.slice(1);
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
        if(!helpArgs[0]) {

            const help = new Discord.MessageEmbed()
                .setAuthor(member.user.tag, member.user.displayAvatarURL())
                .setTitle("Bot Commands")
                .addField("**General:** ",`\`${client.prefixes[message.guild.id].prefixes}help general\``)
                .addField("**Fun:**", `\`${client.prefixes[message.guild.id].prefixes}help fun\``)
                .addField("**Moderation**", `\`${client.prefixes[message.guild.id].prefixes}help moderation\``)
                .setColor('RANDOM')
                .setFooter(`Made by ${Desmond}`, `${client.users.cache.get('713290150750453832').avatarURL({
                    format: 'png',
                    dynamic: true,
                    size: 256
                    })}`);
            message.channel.send(help);
        } 

       if(helpArgs[0] === 'moderation') {

        const i = new Discord.MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setTitle('Moderation Commands')
            .setDescription([
                '`ban`,`prefix`,`kick`',
                `\`${client.prefixes[message.guild.id].prefixes}help <command>\``
            ].join('\n\n'))
            .setColor('RANDOM')
            .setFooter(`Made by ${Desmond}`, `${client.users.cache.get('713290150750453832').avatarURL({
                format: 'png',
                dynamic: true,
                size: 256
                })}`);
        message.channel.send(i)
     }

        if(helpArgs[0] === 'general') {

        const general = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`General Commands`)
        .setColor('RANDOM')
        .setDescription([
        "`support`,`whois`,`stats`,`serverinfo`",
    `\`${client.prefixes[message.guild.id].prefixes}help <command>\``
        ].join('\n\n'))
        .setFooter(`Made by ${Desmond}`, `${client.users.cache.get('713290150750453832').avatarURL({
            format: 'png',
            dynamic: true,
            size: 256
            })}`);
            message.channel.send(general)
        }
            if(helpArgs[0] === 'fun') {

            const embed = new Discord.MessageEmbed()
            .setTitle('Fun/minigames Commands')
            .setColor("RANDOM")
            .setDescription([
                '`rps challenge`,`8ball`,`meme`,`ping`,`cat`, `ping`',
                `\`${client.prefixes[message.guild.id].prefixes}help <command>\``
        ].join('\n\n'))
        .setFooter(`Made by ${Desmond}`, `${client.users.cache.get('713290150750453832').avatarURL({
            format: 'png',
            dynamic: true,
            size: 256
            })}`);
        message.channel.send(embed)
       }
    }
}