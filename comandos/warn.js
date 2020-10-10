const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<:Negativo:540349058284388353> Você não tem permissão para executar este comando!");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.send({embed: {
    color: 0x00ff00,
    description: `<> - Campos obrigatórios\n() - Campos opcionais\n\n${message.author} Utilize:\n**s.warn <@Membro> <Motivo>**`
  }});
  if (reason.length < 1) return message.reply('Você não coloco o motivo do alerta!');

  let dmsEmbed = new Discord.RichEmbed()
  .setTitle("Alerta")
  .setColor("#00ff00")
  .setDescription(`Você foi alertado na: \`${message.guild.name}\``)
  .addField("Você foi alertado por:", message.author.tag)
  .addField("Razão:", reason);

  user.send(dmsEmbed);

  message.delete();
  
  message.channel.send(`${user.tag} foi alertado!`)

}

exports.help = {
  name: 'warn'
};