const Discord = require('discord.js');
const moment = require('moment');
const seedrandom = require('seedrandom');
const sortArray = require('sort-array')
module.exports = {
 name: "ahelp",
async execute(client, message, args) {
  if(message.author.id!=='713290150750453832')
  return message.reply("You are not Seek, you idiot")
  const Channel = client.channels.cache.get(`${message.channel.id}`);
 let userArray = message.content.split(" ");
 let userArgs = userArray.slice(1);
 let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
message.channel.send("idk")
let a=[`${message.author.id}`];
sortArray(a)
var myrng = new seedrandom(`${a[0]}${a[1]}`);
console.log(myrng.int32())

const moderation = new Discord.MessageEmbed()
moderation.setTitle('Moderation commands')
moderation.setDescription("`ban`,`kick`");

  const general = new Discord.MessageEmbed()
  general.setTitle("IDK");

 const help = new Discord.MessageEmbed()
 help.setAuthor(member.user.tag, member.user.displayAvatarURL())
 help.setTitle("Help Commands")
 help.setColor('RANDOM')
 help.addField(`${client.emojis.cache.get('745638221920075816')} moderation`, "Show the moderation commands")
 help.addField(`${client.emojis.cache.get('745638932187971766')} fun`, "Show fun commands")
 help.addField(`${client.emojis.cache.get('745639913889726614')} general`, "Show general commands")
message.channel.send(help).then(help => {
help.react('745638221920075816')
help.react('745639913889726614')

      help.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.id == '745638221920075816' || reaction.emoji.id == '745638932187971766'),
      { max: 1, time: 30000 }).then(collected => {

       if(!collected.first().emoji.id){
       }else if (collected.first().emoji.id == '745638221920075816') {
         message.channel.send(moderation)
        }else if (collected.first().emoji.id == '745639913889726614') {
          message.channel.send(general)
        }
      })
    })
  }
}
