const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'ping',
    execute(client, message, args) {
        message.channel.send(`Your ping is ${Date.now() - message.createdTimestamp} ms`)
    }
}