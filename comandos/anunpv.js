const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("❌ Você não tem permissão!")
            message.delete('')
              let reason = args.slice(0).join(' ');
          if (reason.length < 1) return message.channel.send({embed: {
            color: 0x00ff00,
            description: `<> - Campos obrigatórios\n() - Campos opcionais\n\n${message.author} Utilize:\n**s.anunpv <o que deseja anunciar!>**`
          }});
          message.channel.send(':white_check_mark: Anunciado com sucesso!')
              var embed = new Discord.RichEmbed()
                .setAuthor(`RedeCrystal | Anuncios`)
                .setDescription(args.join(" "))
                .setColor("#AE05BB")
                .setFooter(`Anunciado por: ${message.author.username}`)
                .setThumbnail(message.guild.iconURL)
               message.guild.members.map(users=>users.send(embed));
      };
    
      module.exports.help = {
        name: "anunpv"
      }