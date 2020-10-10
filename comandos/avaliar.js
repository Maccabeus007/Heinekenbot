const Discord = require("discord.js");
exports.run = async (bot, message, args) => {

    let avaliado = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
    message.channel.send("Agora, me manda a nota que você deu a ele.");
    var owt = message.channel.createMessageCollector(a=>a.author.id == message.author.id, { time: 3000000, max: 1 });
    owt.on('collect', r => {
        let link = r.content;
        
        
    message.channel.send("Oks, agora coloque o motivo dessa avaliação.");
    var uwu = message.channel.createMessageCollector(a=>a.author.id == message.author.id, { time: 3000000, max: 1 });
    uwu.on('collect', r=> {
        let descricao = r.content;
        
        let  Serve = message.guild.iconURL
        
            const Embed = new Discord.RichEmbed()
            .setAuthor(`AVALIAÇÃO`, message.author.iconURL)
            .setDescription(`${descricao}`)
            .addField("Staffer", `${avaliado}`)
            .addField("Nota: ", `${link}`)
            .addField("Motivo da avaliação:", `${descricao}`)
            .setColor(15669830)
            .setThumbnail(Serve)
            .setFooter(`• ${message.guild.name} | by: ${message.author.username} • `)
            message.channel.send(Embed)

        })
    })
}