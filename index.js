const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config()
const client = new Discord.Client();
client.prefixes=require('./prefixes.json');
client.commands = new Discord.Collection();
client.snipes = new Discord.Collection();
client.afk = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const clent = new Discord.Client({
    disableMentions: "everyone",
    partials: ["REACTION"],
  });

client.once('ready', () => {
    console.log(`Legend World is online on ${client.guilds.cache.size.toLocaleString()} servers!`);
    client.user.setActivity(`${client.guilds.cache.size} servers | ${prefix}invite to add me`, { type: 'PLAYING' });
    });

const defprefix=process.env.PREFIX
let prefix=defprefix
const token=process.env.CLIENT_TOKEN
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(message.guild) {
        if (!client.prefixes[message.guild.id]) {
            client.prefixes[message.guild.id] = {
                prefixes: defprefix
            };
            fs.writeFile("./prefixes.json", JSON.stringify(client.prefixes, null, 4), err => {
                if (err) throw err;
            })
        }
        prefix = client.prefixes[message.guild.id].prefixes;
    }

    if (!message.content.startsWith(prefix) || message.author.bot) {
		if(message.mentions.users.first()===client.user ) {
                const a = new Discord.MessageEmbed()
                    .setDescription([
                        `My prefix here is \`${prefix}\`
                        Add me to your server using \`${prefix}invite\``
                    ].join('\n\n'))
			message.channel.send(a)
		}
        return;

    }

    client.afk = new Map();
    if (message.content.includes(message.mentions.users.first())) {
        client.afk.forEach(key => {
          if (key.id == message.mentions.users.first().id) {
            message.guild.fetchMember(key.id).then(member => {
              let user_tag = member.user.tag;
              return message.channel.send(`**${user_tag}** is currently afk. Reason: ${key.reason}`);
            });
          }
        });
      }
      client.afk.forEach(key => {
        if (message.author.id == key.id) {
          client.afk.delete(message.author.id);
          return message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000));
        }
      });
    

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    const usage = command.usage;
    if(usage==='server') {
        if(message.channel.type ==='dm')
            return message.reply('Sorry, you can only use that command in a server')
    }
try {
    command.execute(client, message, args);
} catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
}
});

client.login(token);