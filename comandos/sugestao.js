const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    message.delete('')
    let splitarg = args.join(" ").split(" / ");
    if(args.lenght === 0){
        return message.reply("Utilize: s.sugestao (**Assunto**)");
    }
    let sugest = splitarg[0];
    if(!sugest){
        return message.reply("**Coloque o contéudo da menssagem!**");
    }

    
    let embed = new Discord.RichEmbed()

    .setTimestamp()
    .setTitle("💡 Sugestão")
    .setColor("#ff8700")
    .setThumbnail(message.guild.iconURL)
    .setDescription(sugest)
    .setFooter(`Enviado por:${message.author.username}`, message.author.avatarURL)

    bot.channels.get("537870039446061084").send(embed).then(msg => {
        msg.react('✅').then(r=>{
        msg.react('❎')
    })
    })
    
    bot.channels.get("537852169458810880").send("<@&537865754620461057>, Existe uma nova sugestão pedente.")
}

exports.help = {
    name: "sugestao"
}