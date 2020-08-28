const Discord = require('discord.js');

module.exports = {
  name: "afk",
 async execute(client, message, args) {

    let reason = args.join(' ') ? args.join(' ') : 'I am currently afk, I will reply as soon possible.';
    let afklist = client.afk.get(message.author.id);

    if (!afklist) {
        let construct = {
            id: message.author.id,
            reason: reason
        };

        client.afk.set(message.author.id, construct);
        return message.reply(`you have been set to afk for reason: ${reason}`).then(msg => msg.delete(5000));
    }

 }
}