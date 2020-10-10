const Discord = require('discord.js');
const moment = require('moment');

exports.run = (bot, message, args) => {
    
  if (args.length < 1) {
    message.channel.send(`:erro: | digita o nome do emoji!`);
}
if(args.join(' ').slice(0)){
  var emoji = bot.emojis.find('name', `${args[0]}`) || bot.emojis.find('id', `${args.join(' ').slice(0)}`)
  if(emoji){
      const sn = {
          true: 'Sim',
          false: 'Não'
        };
        let mebedinfo=new Discord.RichEmbed()
        .setAuthor(`Informações:`, emoji.url)
        .setColor(7320887)

        .addField("Animado :",  sn[emoji.animated] ,true)
        .addField("Criado em :",  moment(emoji.createdAt).format('LL') ,true)
        .addField("ID :", emoji.id ,true)
        .addField("Nome :", emoji.name ,true)
        .addField("Servidor :", emoji.guild,true)
        .addField("Identificador :", `\`${emoji}\`` ,true)
        .addField("Link :",`**[Clique aqui](${emoji.url})**`,true)
        .setTimestamp(new Date())
       .setFooter(`• by: ${message.author.username} •`, message.author.avatarURL)
        .setThumbnail(emoji.url)
      message.channel.send(mebedinfo)//[Clique aqui](https://cdn.discordapp.com/emojis/${emoji.id}.png\\?v=1)`)
    } else {
      message.channel.send('**' + message.author.username + '**, :x: Não achei este emote:** '+args.join(' ').slice(0)+ '**')
    }
  }
}

exports.help = {
    name: "emoji"
}