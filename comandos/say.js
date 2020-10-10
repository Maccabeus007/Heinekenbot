const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
}

exports.help = {
    name : "say"
}