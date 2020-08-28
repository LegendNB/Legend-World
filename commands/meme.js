const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports = {
	name: 'meme',
	async execute(client, message, args) {
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
            const memeembed = new Discord.MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
        memeembed.setColor('RANDOM')
        memeembed.setImage(img)
        memeembed.setTitle(`Legend World Memes`)
        memeembed.setURL(`https://reddit.com/r/${random}`);
        memeembed.setFooter(`Made by Desmond#2020`, `${client.users.cache.get('713290150750453832').avatarURL({
            format: 'png',
            dynamic: true,
            size: 256
            })}`);
        message.channel.send(memeembed);
    }
}