const Discord = require('discord.js');
module.exports = {
	name: '8ball',
	execute(client, message, args) {
        if (!args[2]){
            return message.channel.send('Please ask a full question')
          }
          let number = Math.floor(Math.random() * 6);
          let johnny=['Yes, definitely.','No, definitely not.','Ask again later.','It is uncertain.','Odds are not in your favour.','Odds are in your favor.']
            return message.channel.send(johnny[number])
        }
    }