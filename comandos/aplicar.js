const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    const embed = new Discord.RichEmbed()
        .setColor('#FF5354')
        .setTitle('**Entre para a equipe**')
        .setDescription('Faça o formulário para entrar para equipe\n\n<:scroll:537863392288047123> [Clique Aqui](https://goo.gl/forms/lYNVOaV6ph9xdqgK2)')
        message.channel.send(embed)
}

exports.help = {
    name : "form"
}