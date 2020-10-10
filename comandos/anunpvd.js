const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Você não tem permissão para usar este comando.`);

    message.channel.send("Por favor, me manda o titulo do anúncio!");
    var owo = message.channel.createMessageCollector(a=>a.author.id == message.author.id, { time: 3000000, max: 1 });
    owo.on('collect', r => {
        let titulo = r.content;
        
    message.channel.send("Agora, me manda o link da imagem");
    var owt = message.channel.createMessageCollector(a=>a.author.id == message.author.id, { time: 3000000, max: 1 });
    owt.on('collect', r => {
        let link = r.content;
        
        
    message.channel.send("Oks, agora me envie a descrição");
    var uwu = message.channel.createMessageCollector(a=>a.author.id == message.author.id, { time: 3000000, max: 1 });
    uwu.on('collect', r=> {
        let descricao = r.content;
        
        let  Serve = message.guild.iconURL
        
            const Embed = new Discord.RichEmbed()
            .setAuthor(`${titulo}`, client.user.displayAvatarURL)
            .setDescription(`${descricao}`)
            .setColor(15669830)
            .setImage(`${link}`)
            .setThumbnail(Serve)
            .setFooter(`• ${message.guild.name} | by: ${message.author.username} • `)
            message.channel.send(Embed)
            const membros = message.guild.memberCount;
            try {
                message.guild.members.map((membro) => membro.send(Embed).catch(() => {}))
            } catch(err) {
                return message.reply("**Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.**")
            }
            message.channel.send("**O anúncios está sendo enviado para **" + membros + " **membros**")
        })
        })
    })
}

const Eperfil = new Discord.RichEmbed()
.setAuthor(` Perfil `, client.user.displayAvatarURL)
.addField('Nome:', `${dados[3]}`)
.addField('Level:', `**Level ${dados[6]}**`)
.setColor('#4AFCED')
.setImage(`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/profileicon/${dados[1]}.png`)
.setThumbnail(message.guild.displayAvatarURL)
.setFooter(`• Zilean | by: ${message.author.username} • `)
message.channel.send(Eperfil )







