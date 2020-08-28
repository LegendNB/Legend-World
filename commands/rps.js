const Discord = require('discord.js');
const seedrandom = require('seedrandom');
const sortArray = require('sort-array')
var a=-1;
var b=-1;
var victor= -1;
module.exports = {
	name: 'rps',
	description: 'Rock Paper Scissors',
	async execute(client, message, args) {
      if(args[0]=='challenge') {
        const Channel = client.channels.cache.get(`${message.channel.id}`);
        if(!message.mentions.users.first())
          return message.reply('you need to mention a user for that');
        let hentai=message.mentions.users.first()
        const embed = new Discord.MessageEmbed()
              embed.setTitle(`${hentai.tag} do you accept?`)
              embed.setThumbnail(`${client.user.avatarURL({ format: 'png', dynamic: true, size: 64 })}`)
              embed.setDescription('Rock Paper Scissors Battle')
              embed.setColor('fd8061')
              embed.setFooter(`Challenged by`, `${message.author.avatarURL({ format: 'png', dynamic: true, size: 256 })}`);
          const sentMessage = await message.channel.send(embed);
          await sentMessage.react('738809108127285289')
          await sentMessage.react('738809001575186492')
          sentMessage.awaitReactions((reaction, user) => user.id == hentai.id && (reaction.emoji.id == '738809108127285289' || reaction.emoji.id == '738809001575186492'),
                { max: 1, time: 30000 }).then(collected => {
                      if (collected.first().emoji.id == '738809108127285289') {
                              embed.setTitle('Challenge Approved - I have sent a dm')
                               sentMessage.edit(embed);
                              setTimeout(function(){ 
                                  let embeds = new Discord.MessageEmbed()
                                  embeds.setTitle('Waiting...')
                                  embeds.addField(`${message.author.username}: ${client.emojis.cache.get(`738672865280393259`)}`,'Waiting...')
                                  embeds.addField(`${hentai.username}: ${client.emojis.cache.get(`738672865280393259`)}`,'Waiting...')
                                  embeds.setColor('fd8061')                 
                                  
                                  sentMessage.edit(embeds);
                                  let a=[`${message.author.id}`,`${hentai.id}`];
                  
                                  sortArray(a)
                                  var myrng = new seedrandom(`${a[0]}${a[1]}`);
                                  console.log(myrng.int32())
                            }, 2000);
                                let dmembed = new Discord.MessageEmbed()
                                dmembed.setTitle('Pick')
                                dmembed.setColor('fd8061')
                                dmembed.addField(`${client.emojis.cache.get('738671007321292841')} - Rock`, 'The Rock can break scissors')
                                dmembed.addField(`${client.emojis.cache.get('738671671699046401')} - Paper`, 'Paper wins against the rock')
                                dmembed.addField(`✂️ - Scissors`, 'Scissors can cut through paper')
                                dmembed.addField(`${client.emojis.cache.get('739047430158418050')} - Random`, 'Picks a random move')
                                message.author.send(dmembed).then(dm1 => {
                                  dm1.react('738671007321292841')
                                  dm1.react('738671671699046401')
                                  dm1.react('✂️')
                                  dm1.react('739047430158418050')
                                  hentai.send(dmembed).then(dm2 =>{ 
                                    dm2.react('738671007321292841')
                                  dm2.react('738671671699046401')
                                  dm2.react('✂️')
                                  dm2.react('739047430158418050')
                                  function turtle() {
                              let a1= message.author.username
                            let b1= hentai.username
                            let list=['738671007321292841','738671671699046401']
                            dmembed.fields = []
                    if(a==b){
                              dmembed.setTitle('DRAW')
                              victor= 0
                              if(a!=0){
                              dmembed.addField(`${message.author.username}: ${client.emojis.cache.get(`${list[a-1]}`)}`,'DRAW')
                              dmembed.addField(`${hentai.username}: ${client.emojis.cache.get(`${list[a-1]}`)}`,'DRAW')
                            }else {
                              dmembed.addField(`${message.author.username}: ✂`,'DRAW')
                              dmembed.addField(`${hentai.username}: ✂`,'DRAW')
                            }
                            }else if(a==0){
                              if(b==1) {
                                dmembed.setTitle(`${b1} WON`)
                                victor= 2
                              dmembed.addField(`${message.author.username}: ✂`,'LOSS')
                              dmembed.addField(`${hentai.username}: ${client.emojis.cache.get(`${list[b-1]}`)}`,'WIN')
                            }else if(b==2) {
                              dmembed.setTitle(`${a1} WON`)
                              victor= 1
                              dmembed.addField(`${message.author.username}: ✂`,'WIN')
                              dmembed.addField(`${hentai.username}: ${client.emojis.cache.get(`${list[b-1]}`)}`,'LOSS')
                            }
                          }else if(a==1){
                            if(b==0) {
                              dmembed.setTitle(`${a1} WON`)
                              victor= 1
                              dmembed.addField(`${message.author.username}: ${client.emojis.cache.get(`${list[a-1]}`)}`,'WIN')
                              dmembed.addField(`${hentai.username}: ✂`,'LOSS')
                            }else if(b==2) {
                              dmembed.setTitle(`${b1} WON`)
                              victor= 2
                              dmembed.addField(`${message.author.username}: ${client.emojis.cache.get(`${list[a-1]}`)}`,'LOSS')
                              dmembed.addField(`${hentai.username}: ${client.emojis.cache.get(`${list[b-1]}`)}`,'WIN')
                            }
                          }else if(a==2){
                            if(b==0) {
                              dmembed.setTitle(`${b1} WON`)
                              victor= 2
                              dmembed.addField(`${message.author.username}: ${client.emojis.cache.get(`${list[a-1]}`)}`,'LOSS')
                              dmembed.addField(`${hentai.username}: ✂`,'WIN')
                            }else if(b==1){
                              dmembed.setTitle(`${a1} WON`)
                              victor= 1
                              dmembed.addField(`${message.author.username}: ${client.emojis.cache.get(`${list[a-1]}`)}`,'WIN')
                              dmembed.addField(`${hentai.username}: ${client.emojis.cache.get(`${list[b-1]}`)}`,'LOSS')
                            }
                          }
                          sentMessage.edit(dmembed)
                           if(victor==0) {
                    let nembed = new Discord.MessageEmbed()
                            nembed.setTitle('DRAW')
                            nembed.setDescription('Check channel for info')
                            nembed.setThumbnail(`${client.user.avatarURL({ format: 'png', dynamic: true, size: 64 })}`)
                            dm2.edit(nembed)
                            dm1.edit(nembed)
                  }
                  if(victor==1) {
                    let nembed = new Discord.MessageEmbed()
                            nembed.setTitle('VICTORY')
                            nembed.setDescription('Check channel for info')
                            nembed.setThumbnail(`${client.user.avatarURL({ format: 'png', dynamic: true, size: 64 })}`)
                            dm1.edit(nembed)
                            nembed.setTitle('LOSS')
                            dm2.edit(nembed)
                  }
                  if(victor==2) {
                    let nembed = new Discord.MessageEmbed()
                            nembed.setTitle('VICTORY')
                            nembed.setDescription('Check channel for info')
                            nembed.setThumbnail(`${client.user.avatarURL({ format: 'png', dynamic: true, size: 64 })}`)
                            dm2.edit(nembed)
                            nembed.setTitle('LOSS')
                            dm1.edit(nembed)
                  }
                            }
                                  
                                  dm1.awaitReactions( (reaction, user) => user.id == message.author.id && (reaction.emoji.id == '738671007321292841' || reaction.emoji.id == '738671671699046401' ||  reaction.emoji.name == '✂️' || reaction.emoji.id == '739047430158418050'),
                { max: 1, time: 45000 }).then(collected => {
                            
                            let nembed = new Discord.MessageEmbed()
                            nembed.setTitle('Waiting...')
                            nembed.setDescription('Check channel for info')

                            nembed.setThumbnail(`${client.user.avatarURL({ format: 'png', dynamic: true, size: 64 })}`)
                            dm1.edit(nembed)
                          
                            
                            
                            if(!collected.first().emoji.id){
                              a=0
                            }else if (collected.first().emoji.id == '738671007321292841') {
                              a=1
                            }else if (collected.first().emoji.id == '738671671699046401') {
                              a=2
                            }else if (collected.first().emoji.id == '739047430158418050') {
                              a=Math.floor(Math.random() * 3);
                            }
                            message.author.send(`${message.author} Go back to the channel:\n${Channel}`)
                            dmembed.fields = []
                            dmembed.setTitle('Waiting...')
                            dmembed.addField(`${message.author.username}: ${client.emojis.cache.get(`738405760064684053`)}`,'Confirmed')
                            if(b==-1){
                            dmembed.addField(`${hentai.username}: ${client.emojis.cache.get(`738672865280393259`)}`,'Waiting...')
                            sentMessage.edit(dmembed)
                          }else {
                            turtle()
                          }
                }).catch(() => {
                    dmembed.setTitle(`${message.author.username} did not react`)
                    dmembed.fields = []
                    dm1.edit(dmembed)
                    sentMessage.edit(dmembed)
                    dm2.edit(dmembed)
                });
                   dm2.awaitReactions( (reaction, user) => user.id == hentai.id && (reaction.emoji.id == '738671007321292841' || reaction.emoji.id == '738671671699046401' ||  reaction.emoji.name == '✂️' || reaction.emoji.id == '739047430158418050'),
                { max: 1, time: 45000 }).then(collected => {
                    
                            let nembed = new Discord.MessageEmbed()
                            nembed.setTitle('Waiting...')
                            nembed.setDescription('Check channel for info')

                            nembed.setThumbnail(`${client.user.avatarURL({ format: 'png', dynamic: true, size: 64 })}`)
                            dm2.edit(nembed)
                      
                            if(!collected.first().emoji.id){
                              b=0
                            }else if (collected.first().emoji.id == '738671007321292841') {
                              b=1
                            }else if (collected.first().emoji.id == '738671671699046401') {
                              b=2
                            }else if (collected.first().emoji.id == '739047430158418050') {
                              b=Math.floor(Math.random() * 3);
                            }
                            hentai.send(`${hentai} Go back to the channel:\n${Channel}`)
                            dmembed.setTitle('Waiting...')
                            dmembed.fields = []
                            dmembed.addField(`${message.author.username}: ${client.emojis.cache.get(`738672865280393259`)}`,'Waiting...')
                            dmembed.addField(`${hentai.username}: ${client.emojis.cache.get(`738405760064684053`)}`,'Confirmed')
                            if(a==-1){
                            
                            sentMessage.edit(dmembed)
                          }else {
                            turtle()
                          }
                  }).catch(() => {
                    dmembed.setTitle(`${hentai.username} did not react`)
                    dmembed.fields = []
                    dm1.edit(dmembed)
                    sentMessage.edit(dmembed)
                    dm2.edit(dmembed)
                });
  
                 
                        
                })

                       })         
                              
                                    }
                                    else{
                                            embed.setTitle('Challenge Denied')
                                            sentMessage.edit(embed);
                                          }

                            }).catch(() => {
                                    embed.setTitle('No reaction after 30 seconds, Challenge Canceled')
                                    sentMessage.edit(embed)
                            });


                    
            
  }
}
}
