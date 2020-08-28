
const Discord = require("discord.js")
const fetch = require('node-fetch');

module.exports = {
        name: "cat",
        description: "sends a picture of a cat!",
        category: "miscellaneous",
    async execute(client, message, args) {
    let msg = await message.channel.send("Generating...")

    fetch(`http://aws.random.cat/meow`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("whoops! I've broke, try again!")

        let cEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`${client.user.username} CATS!`, message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()
        .setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

            message.channel.send(cEmbed)
            msg.delete();
        })
    }
}