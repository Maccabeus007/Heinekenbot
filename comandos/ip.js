const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    const embed = new Discord.RichEmbed()
    .setColor('#FFFF00')
    .setTitle('Nosso servidor')
    .setDescription('IP: **redecrystal.reis.host** \n')  
    message.channel.send(embed);
    message.channel.send("<@702246607667593307>")
}

exports.help = {
    name : "ip"
}