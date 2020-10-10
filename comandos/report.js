const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    message.delete('')
    if (!args[0]) return message.channel.send({embed: {
      color: 0x00ff00,
      description: `<> - Campos obrigatórios\n() - Campos opcionais\n\n${message.author} Utilize:\n**h.report <@Membro> <Motivo>**`
    }}).then(msg => msg.delete(1500000));
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(`<:Negativo:540349058284388353> Usuário não encontrado`);
    if(bUser.id === bot.user.id) return message.channel.send(`<:Negativo:540349058284388353> Eu não tenho permissão para reportar este usuário.`);
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<:Negativo:540349058284388353> Eu não tenho permissão para reportar este usuário.`);

    let banEmbed = new Discord.RichEmbed()
    .setColor("#a1c5ff")
    .setDescription("<a:Sirene:540348737625784360> REPORT <a:Sirene:540348737625784360>")
    .addField("<:list:537859259912945665> Usuário reportado:", `${bUser}`)
    .addField("<:Pinguim:548756194198814720> Reportado por:", `<@${message.author.id}> `)
    .addField("<:minecrafttnt:543878773792309259> Motivo:", bReason)
    .setThumbnail(message.guild.iconURL)
    .setTimestamp();
   
    bot.channels.get("703390496097304638").send(banEmbed)
    message.channel.send("O Report foi enviado com sucesso!").then(msg => msg.delete(15000));
    bot.channels.get("703390496097304638").send("Temos um novo report pedente! ")
}

exports.help = {
    name : "report"
}