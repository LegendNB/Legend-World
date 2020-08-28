
const Discord = require('discord.js');
const moment = require('moment');
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');
module.exports = {
    name: 'stats',
   async execute(client, message, args) {
    if(message.author.id!=='713290150750453832')
      return message.channel.send(`${message.author.username}: ${client.emojis.cache.get(`747467037533536329`)}`)
  var m = await message.channel.send(`Please wait...`);

  var osType = await os.type();

		if (osType === 'Darwin') osType = 'macOS'
		else if (osType === 'Windows') osType = 'Windows'
		else osType = os.type();
  
    //--------------------------//
  
    var osBit = await os.arch();
  
    if (osBit === 'x64') osBit = '64 Bit'
    else if (osBit === 'x82') osBit = '32 Bit'
    else osBit = os.arch();
       cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(client.uptime).format('D [day], H [hour], m [min], s [sec]');
      
        setTimeout(() => {
          const s = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setThumbnail(client.user.avatarURL)
          .setAuthor(`${client.user.username} | Stats`, client.user.avatarURL)
          .addField('Uptime', `${duration}`, true)
          .addField('General', stripIndents`
          **Users Size:**  ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
          **Servers Size:** ${client.guilds.cache.size.toLocaleString()}
          **Channels Size:** ${client.channels.cache.size.toLocaleString()}
        `, true)
        .addField('Version', stripIndents`
        **Discord.JS version** v${Discord.version}
        **NodeJS version** ${process.version}
        `, true)
        .addField('Memory Usage', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()} MB`, true)
        .setFooter(`Made by Desnond#2020`, `${client.users.cache.get('713290150750453832').avatarURL({
          format: 'png',
          dynamic: true,
          size: 256
          })}`);
        return m.edit(s)
        //ITS HARD bet now show
        
    }, 3000)
       
});
}
        }
    