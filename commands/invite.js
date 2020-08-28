const Discord = require('discord.js');
module.exports = {
    name: 'invite',
    execute(client, message, args) {
const exampleEmbed = new Discord.MessageEmbed()
.setDescription('')
.addField('Add Legend World', "[Here](https://discord.com/oauth2/authorize?client_id=735646331703394345&scope=bot&permissions=2146958847)")
.addField('Join For Support', '[Here](https://discord.gg/Dj6QTAM)')
.setColor('RANDOM')
.setFooter(`Made by Desmond#2020`, `${client.users.cache.get('713290150750453832').avatarURL({
    format: 'png',
    dynamic: true,
    size: 256
    })}`);
message.channel.send(exampleEmbed);
    }
}