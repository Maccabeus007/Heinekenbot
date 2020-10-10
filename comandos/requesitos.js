const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    const m = message.channel.send({embed: {
        color: 0x36393e,
        title: "Requisitos da rede",
        description: "Requisitos da rede\n\n<:MiniYT:537300007364329472> **MiniYT**\n<:YouTuber:537299855337586708> **YouTuber**\n<a:discord:537305910649946132> **Discord**"
    }}).then(msg=>{
        msg.react(':MiniYT:537300007364329472').then(r=>{
            msg.react(':YouTuber:537299855337586708').then(r=>{
                msg.react('a:discord:537305910649946132').then(r=>{
                })
            })
        });

        
const miniytfilter2 = (reaction, user) => reaction.emoji.id === '537300007364329472' && user.id === message.author.id;
const ytfilter3 = (reaction, user) => reaction.emoji.id === '537299855337586708' && user.id === message.author.id;
const dcfilter4 = (reaction, user) => reaction.emoji.id === '537305910649946132' && user.id === message.author.id;
const miniyt = msg.createReactionCollector(miniytfilter2, { time: 60000 });
const yt = msg.createReactionCollector(ytfilter3, { time: 60000 });
const dc = msg.createReactionCollector(dcfilter4, { time: 60000 });

miniyt.on('collect', r2 => { 
    msg.edit({embed: {
        color: 0x36393e,
        title: "Requisitos <:MiniYT:537300007364329472> Mini-YT",
        description: `Veja os requisitos.\n\n• Tag MiniYT -> 150 Subs\n• Feed, de: (100 viws por vídeo gravado.)\n• Se não tiver os requisitos não setaremos a tag!\n• Caso você tenha os requisitos envie um e-mail para nossa equipe:  Em breve`
    }});
  })
yt.on('collect', r3 => { 
    msg.edit({embed: {
        color: 0x36393e,
        title: "Requisitos <:YouTuber:537299855337586708> YouTuber",
        description: `Veja os requisitos.\n\n• Tag Youtuber -> 500 Subs\n• Feed, de: (450 viws por vídeo gravado.)\n• Se não tiver os requisitos não setamos a tag!\n• Caso você tenha os requisitos envie um e-mail para nossa equipe:  Em breve`
    }});
dc.on('collect', r2 => { 
    msg.edit({embed: {
        color: 0x36393e,
        title: "Requisitos <a:discord:537305910649946132> Mini-YT",
        description: `Veja os requisitos.\n\n• Ter no mínimo 50 membros.\n•Ter um canal para anunciar a parceria.\n• Não possuir canal ou bot de NSFW.`
    }});
  });
});
});
}

exports.help = {
    name : "requesitos"
}