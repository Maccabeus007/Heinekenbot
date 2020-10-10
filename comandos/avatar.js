const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
    let avatar = member.displayAvatarURL;
    if (avatar.endsWith(".gif")) {
      avatar = `${member.displayAvatarURL}?size=2048`
    }
    let perfil = new Discord.RichEmbed()
    .setTitle(`🖼 ${member.username}`)
    .setColor(`#58FAF4`)
    .setDescription(`**[Clique aqui para baixar a imagem](${avatar})**`)
    .setImage(avatar)
    message.channel.send(perfil)
  }

exports.help = {
    name : "avatar"
}