const Discord = require("discord.js");

exports.run = (bot,message,args) => {

    if (`${message.guild.id}` === '468139468038340629') {
        bot.channels.get("703390496097304638").send("SALve");
    }else
    message.channel.send(`${message.guild.id}`);

const usuario = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));    

const banembed = new Discord.RichEmbed()

.setColor("#050505")
.setThumbnail(message.author.displayAvatarURL)
.setAuthor('Boss | Ban')
.setDescription(`Úsuario Banido: ${usuario} \n ID: ${usario.id} \n Banido por: <@${message.author.id}> \n\n ID: ${message.authot.id}`)
.setFooter('Fui Criado e Programado por Boss $.');
message.channel.send(banembed)

}

exports.help = {
    name : "teste1"
}