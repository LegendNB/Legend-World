const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
module.exports = {
  name: "bal",
 async execute(client, message, args) {
  let user = message.mentions.users.first() || message.author
  let money = db.fetch(`money_${user.id}`)
  
  if (money === null) money = 0;
  const embed = new MessageEmbed()
  .setColor("RANDOM")
  .addField("BALANCE", `${money}$ Coins`)
  message.channel.send(embed)
}
}