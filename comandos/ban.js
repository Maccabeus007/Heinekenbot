const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('<:Negativo:540349058284388353> Você não tem permissão para executar este comando.');
    if (!args[0]) return message.channel.send({embed: {
      color: 0x00ff00,
      description: `<> - Campos obrigatórios\n() - Campos opcionais\n\n${message.author} Utilize:\n**h.ban <@Membro> <Motivo>**`
    }});
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(`<:Negativo:540349058284388353> Usuário não encontrado`);
    if(bUser.id === bot.user.id) return message.channel.send(`<:Negativo:540349058284388353> Eu não tenho permissão para banir este usuário.`);
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<:Negativo:540349058284388353> Eu não tenho permissão para banir este usuário.`);

    let banEmbed = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("🤣 Usuário banido:", `${bUser}`)
    .addField("👮🏻 Banido por:", `<@${message.author.id}> `)
    .addField("👉🏻 Banido em", message.channel)
    .addField("💁🏻‍♂️ Razão", bReason)
    .setThumbnail(message.guild.iconURL)
    .setTimestamp();
   
    message.guild.member(bUser).ban(bReason);
    if (`${message.guild.id}` === '468139468038340629') {
      bot.channels.get("703390496097304638").send(banEmbed);
  }else
      bot.channels.get("705514183424213133").send(banEmbed)

  message.channel.send("O Úsuario foi banido com sucesso!").then(msg => msg.delete(15000));
}

exports.help = {
    name : "ban"
}