const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    let splitarg = args.join(" ").split(" / ");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Desculpe!Mas você não tem permissão para isto!");
    if(args.lenght === 0){
        return message.reply("Utilize: s.(**Assunto**)");
    }
    let aAnnouncement = splitarg[0];
    if(!aAnnouncement){
        return message.reply("**Coloque o contéudo da menssagem!**");
    }

    bot.channels.get("537866923526979584").send("@everyone").then(msg => msg.delete(10));
    
    let embed = new Discord.RichEmbed()

    .setTimestamp()
    .setTitle("<a:Sininho:540348612186472488> Anúncio ")
    .setColor("#ff8700")
    .setThumbnail(message.guild.iconURL)
    .setDescription(aAnnouncement)
    .setFooter(`Enviado por:${message.author.username}`, message.author.avatarURL);

    bot.channels.get("537866923526979584").send(embed)
}

exports.help = {
    name: "anuncio"
}