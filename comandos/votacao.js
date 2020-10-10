const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    message.delete('')
    let splitarg = args.join(" ").split(" / ");
    if(args.lenght === 0){
        return message.reply("Utilize: s.sugestao (**Assunto**)");
    }
    let sugest = splitarg[0];
    if(!sugest){
        return message.channel.send({embed: {
            color: 0x00ff00,
            description: `<> - Campos obrigatórios\n() - Campos opcionais\n\n${message.author} Utilize:\n**s.votacao <conteudo>**`
          }}).then(msg => msg.delete(1500000));
    }

    bot.channels.get("705551574633676903").send("@everyone")

    let embed = new Discord.RichEmbed()

    .setTimestamp()
    .setTitle(" Votação ")
    .setColor("#ff8700")
    .setThumbnail(message.guild.iconURL)
    .setDescription(sugest)
    .setFooter(`Enviado por:${message.author.username}`, message.author.avatarURL)

    bot.channels.get("705551574633676903").send(embed).then(msg => {
        msg.react('✅').then(r=>{
        msg.react('❎')
    })
    })
    
}

exports.help = {
    name: "votacao"
}