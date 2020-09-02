const Discord = require('discord.js');
const db = require('quick.db');


module.exports = {
	name: 'rename',
	execute(client, message, args) {
    if(!message.content.startsWith('ticket.'))return;  

    let notallowed = new Discord.MessageEmbed()
    .setColor('#e64b0e')
    .setDescription(`You Need The **Support Team** Role To Rename Tickets`)

    if(!message.member.roles.find(r => r.name == 'Support Team')) return message.channel.send(notallowed)

    let numbers = db.fetch(`${message.guild.id}_${message.author.id}-ticketnumber`)

    let authorsend2 = new Discord.MessageEmbed()
    .setColor('#e64b0e')
    .setDescription(`Input something to rename the ticket to`)

    let rename = args.join("-");

  if(!rename) return message.channel.send(authorsend2)

    message.channel.setName(`${rename}-${numbers}`)

    db.set(`${message.guild.id}_${message.author.id}-channelID`, message.channel.id)

  let embed = new Discord.MessageEmbed()
  .setColor('#e64b0e')
  .setDescription(`Ticket renamed to ${rename}`)
    message.channel.send(embed)



     
}
    
  }