const Discord = require("discord.js");
exports.run = async (client, message, args) => {

    message.channel.send("Por favor, me manda o nick de um úsuario!");
    var owo = message.channel.createMessageCollector(a=>a.author.id == message.author.id, { time: 3000000, max: 1 });
    owo.on('collect', r => {
        let usuario = r.content;
        
    message.channel.send("Agora, me manda o motivo!");
    var owt = message.channel.createMessageCollector(a=>a.author.id == message.author.id, { time: 3000000, max: 1 });
    owt.on('collect', r => {
        let motive = r.content;
        
        
        message.channel.send("Me mande uma prova.");
    var uwu = message.channel.createMessageCollector(a=>a.author.id == message.author.id, { time: 3000000, max: 1 });
    uwu.on('collect', r=> {
        let prove = r.content;
        
        let  Serve = message.guild.iconURL

            const Embed = new Discord.RichEmbed()
            .setAuthor("<a:sirenehk:559532794808893440> REPORT <a:sirenehk:559532794808893440>", client.user.displayAvatarURL)
            .addField("<:reportedhk:560626871797022733> Reportado por:",`<@${message.author.id}> ` )
            .addField("<:reporterhk:560626723490758702> Pessoa reportada:", `${usuario}` )
            .addField("<:motivohk:560626006671491100> Motivo", motive )
            .setImage(prove)
            .setColor(15669830)
            .setThumbnail(Serve)
            .setFooter(`• report | by: ${message.author.username} • `)
            message.channel.send(Embed).then(msg=>{
                msg.react(':a:certohk:560260679345635329').then(r=>{
                    msg.react('a:erradohk:560260714846093338').then(r=>{
                    })
                });

                const banirfilter2 = (reaction, user) => reaction.emoji.id === '560260679345635329' && user.id === message.author.id;
                const nobanfilter3 = (reaction, user) => reaction.emoji.id === '560260714846093338' && user.id === message.author.id;
                const ban = msg.createReactionCollector(banirfilter2, { time: 60000 });
                const noban = msg.createReactionCollector(nobanfilter3, { time: 60000 });
                
                ban.on('collect', r2 => { 
                    message.guild.member(usuario).kick(motive)
                    });
                  
                    noban('collect', r2 => { 
                        
                        msg.delete()
                      });
                })
                
                  

            })

        
        })
        })
    })
}