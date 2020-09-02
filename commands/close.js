const Discord = require('discord.js');
const db = require('quick.db');
const date = require('date-and-time')
const hastebin = require('hastebin')
module.exports = {
	name: 'close',
	execute(client, message, args) {
    if(!message.content.startsWith('ticket.'))return;  

  let channel = message.channel;

  let whoopsembed = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setDescription(`Ticket Is Already Closed`)

  if(channel.parent == message.guild.channels.find(c => c.name == "Closed Tickets" && c.type == "category")) return message.channel.send(whoopsembed)

    let ticketcount = db.fetch(`${message.guild.id}-ticketcount`)
  let ticketchannel = db.fetch(`${message.guild.id}_${message.author.id}-channelID`)

  let reason = args.join(" ");

  if(!reason) reason = 'None Provided'

  db.set(`${message.guild.id}_${message.author.id}-closeticketreason`, reason)

  let reasonfetch = db.fetch(`${message.guild.id}_${message.author.id}-closeticketreason`)

  let user = db.fetch(`${message.guild.id}_${message.author.id}-ticketopener`)
  
  message.channel.fetchMessages()
  .then(messages => {
    let text = "";

  for (let [key, value] of messages) {
        const now = new Date();
      let dateString = `${date.format(now, 'YYYY/MM/DD HH:mm:ss', true)}`;

      text += `${dateString} | ${value.author.tag}: ${value.content}\n`;
  }

  hastebin.createPaste(text, {
          raw: true,
          contentType: 'text/plain',
          server: 'https://hastebin.com'

      })
      .then(data => {
          console.log(`Created paste: ${data}`);
          
          db.set(`${message.guild.id}_${user.id}-transcript`, data)
          
          let authorsend = new Discord.RichEmbed()
          .setColor('#e64b0e')
          .setDescription(`[Message Transcript](${data}) Of Your Ticket In ${message.guild.name}`)

          let closedticket = new Discord.RichEmbed()
          .setColor('#e64b0e')
          .setDescription(`Ticket Closed & Moved To Closed Tickets. This Ticket Will Be Deleted In 10 Minutes\n\n[Ticket Transcript](${data}) Or Run \`ticket.last\` To Get Additional Info`)


    let channeldelete = message.guild.channels.get(ticketchannel)
    let category = message.guild.channels.find(c => c.name == "Closed Tickets" && c.type == "category")

    if(category) channeldelete.setParent(category.id) 


    let logchannelembed = new Discord.RichEmbed()
    .setColor('#e64b0e')
    .setTitle(`Ticket Closed`)
    .setDescription(`Closed By: ${message.author}\nTicket Number: \`${ticketcount}\`\nClose Reason: \`${reasonfetch}\`\nTranscript: [Here](${data})`)

    let logchannel = message.guild.channels.find(cl => cl.name == "ticket-logs" && cl.type == "text")
    logchannel.send(logchannelembed)  
    message.channel.send(closedticket)

        setTimeout(() => {
          channeldelete.delete()
        }, 600000);

      })
})
}     
  }