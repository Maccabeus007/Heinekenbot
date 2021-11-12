const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    if(message.autor.id != '380826729050013696') return message.channel.send("Você não é digno de saber os Lideres Master's")
    const embed1 = new Discord.RichEmbed()
    .setColor('#A4E813')
    .setTitle('OS TOPS')
    .setDescription('Zé Dutra e  \n Chupamyegs')  
    message.channel.send(embed1);
    message.channel.send(`<@${message.author.id}> Descobriu os Top's \n Agora morra!`)
}

exports.help = {
    name : "maccabeus"
}
