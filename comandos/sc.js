const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    let botmessage = args.join(" ");
    message.delete().catch();
    bot.channels.get("537871469640679424").send(botmessage);
    message.channel.send(botmessage);
}

exports.help = {
    name : "sc"
}