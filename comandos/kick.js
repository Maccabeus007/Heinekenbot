const Discord = require("discord.js");

exports.run = (bot,message,args) => {
        //adicione o nome dos cargos que vc quer que use esse comando!
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('<:Negativo:540349058284388353> Você não tem permissão para executar este comando.');
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member) return message.channel.send({embed: {
          color: 0x00ff00,
          description: `<> - Campos obrigatórios\n() - Campos opcionais\n\n${message.author} Utilize:\n**h.kick <@Membro> <Motivo>**`
        }});
        if(!member.kickable) 
          return message.reply("Eu não tenho permissão para expulsar ele(a).");
        
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "A pessoa da equipe que puniu o jogador não forneceu nenhum motivo.";
        
        
         let kickEmbed = new Discord.RichEmbed()
          .setColor("#bc0000")
          .addField("<:list:537859259912945665> Usuário kicado", `${member}`)
          .addField("<:Pinguim:548756194198814720> kicado por", `<@${message.author.id}> `)
          .addField("<:pin:534777323577409539> kicado em", message.channel)
          .addField("<:minecrafttnt:543878773792309259> Razão", reason)
          .setThumbnail(message.guild.iconURL)
          .setTimestamp();

          message.guild.member(member).kick(reason)
          .catch(error => message.reply(`Desculpe ${message.author} não consegui expulsar o membro devido o: ${error}`));
          if (`${message.guild.id}` === '468139468038340629') {
            bot.channels.get("703390496097304638").send(kickEmbed);
        }else {
            bot.channels.get("705514183424213133").send(kickEmbed);
          }
          bot.channels.get("558701281426800650").send(kickEmbed);
          message.channel.send("O Úsuario foi kicado com sucesso!").then(msg => msg.delete(15000));
}

exports.help = {
    name : "kick"
}