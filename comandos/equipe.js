const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("❌ Você não tem permissão!")
    const as = new Discord.RichEmbed()
    .setColor('#FFFF00')
    .setTitle('Equipe do servidor')
    .setDescription('Segue-se a equipe **Oficial** do servidor **Rede Crystal**\nIP: **redecrystal.reis.host** \n')
    .addField("Fundadores", "yAlvarozerA_\n LagPcYT \n zSirRaffah_")
    .addField("Masters", " zGui014_  \n SirLight_ \n Hakimoto")
    .addField("Gerentes", " ImLucasz ")
    .addField("Desenvolvedores", "StarkDEV \n ImLucasz")
    .addField("Administradores", "Arete07  \n SrKaue_037")
    .addField("Moderadores", "Shinobii7 \n Sapaoo")
    .addField("Ajudantes", "ImCoelhoszX ")
    .setThumbnail(message.guild.iconURL)
    .setTimestamp();  
    message.channel.send(as)
}

exports.help = {
    name : "equipe"
}