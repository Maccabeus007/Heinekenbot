const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Desculpe!Você não tem permissão para isto!");
    if(!args[0]) return message.reply("utilize **clear (número)**");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Foram apagadas **${args[0]}** menssagens`).then(msg => msg.delete(5000));
    });
}

exports.help = {
    name: "clear"
}