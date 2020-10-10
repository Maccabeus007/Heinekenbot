const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    let target = message.author
    if(message.member.hasPermission("ADMINISTRATOR")) {
        const text = args.slice(1).join(" ");
        if (!text) return message.channel.send("Você não colocou a mensagem que vai ser anunciada!");
        if(!args[0].startsWith("http")){
            
            
        const Embed = new Discord.RichEmbed()
            .setAuthor(`Aviso do ${message.guild.name}`)
            .setDescription(text)
            .setColor('#b9adfa')
            .setFooter(`• by: ${message.author.username} • `)
            message.channel.send(Embed)
            const membros = message.guild.memberCount;
            try {
                message.guild.members.map((membro) => membro.send(Embed).catch(() => {}))
            } catch(err) {
                return message.reply("**Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.**")
            }
            message.channel.send("**O anúncios está sendo enviado para **" + membros + " **membros**")
            }else{
             const Embed = new Discord.RichEmbed()
            .setAuthor(`Aviso do ${message.guild.name}`)
            .setDescription(text)
            .setImage(args[0])
            .setColor('#b9adfa')
            .setFooter(`• by: ${message.author.username} • `)
            message.channel.send(Embed)
            const membros = message.guild.memberCount;
            try {
                message.guild.members.map((membro) => membro.send(Embed).catch(() => {}))
            } catch(err) {
                return message.reply("**Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.**")
            }
            message.channel.send("**O anúncios está sendo enviado para **" + membros + " **membros**")
        }
    }
    };