const Discord = require("discord.js");

exports.run = (bot,message,args) => {

    let pornEmbed = new Discord.RichEmbed()
    .setColor("0x36393e")
    .setAuthor(`Pedido por: ${message.author.username} `, message.author.avatarURL )
    .addField('\u200B','\u200B')
    .setDescription("Seções:\n  <a:setona:559528940780126218> `h.pboobs` \n  <a:setona:559528940780126218> `h.phentai`  \n <a:setona:559528940780126218> `h.ppussy` \n <a:setona:559528940780126218>  `h.pass` \n <a:setona:559528940780126218> `h.pdick` ")
    .setThumbnail(message.guild.iconURL)
    .setFooter(`• by: ${message.author.username} • `)
    .setTimestamp();

    const m = message.channel.send({embed: {
        color: 0x36393e,
        title: "Vejá minhas categorias",
        description: "📋 | Servidor\n\n🔒 | Equipe\n\n📥 | Porn\n\n📂 | Bot\n\n⏮ | Menu"
    }}).then(msg=>{
        msg.react('📋').then(r=>{
            msg.react('🔒').then(r=>{
              msg.react('📥').then(r=>{
                  msg.react('📂').then(r=>{
                      msg.react('⏮').then(r=>{

                      })
                  })

              })
            })
        });


const infofilter = (reaction, user) => reaction.emoji.name === '📋' && user.id === message.author.id;
const qualquercoisafilter3 = (reaction, user) => reaction.emoji.name === '📥' && user.id === message.author.id;
const qualquercoisafilter1 = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
const qualquercoisafilter4 = (reaction, user) => reaction.emoji.name === '🔒' && user.id === message.author.id;
const qualquercoisafilter5 = (reaction, user) => reaction.emoji.name === '📂' && user.id === message.author.id;
const qualquercoisa5 = msg.createReactionCollector(qualquercoisafilter5, { time: 60000 });
const qualquercoisa4 = msg.createReactionCollector(qualquercoisafilter4, { time: 60000 });
const qualquercoisa1 = msg.createReactionCollector(qualquercoisafilter1, { time: 60000 });
const qualquercoisa2 = msg.createReactionCollector(infofilter, { time: 60000 });
const qualquercoisa3 = msg.createReactionCollector(qualquercoisafilter3, { time: 60000 });

qualquercoisa2.on('collect', r2 => { 
    msg.edit({embed: {
        color: 0x36393e,
        title: "<:minecrafttnt:533517156860690432> Servidor",
        description: "s.ip = Mostra o ip do servidor. \n <a:setona:559528940780126218> s.ping = Mostra seu ping, e o do Bot. \n <a:setona:559528940780126218> s.aplicar = Disponibiliza o formulario para que possa engressar na Staff do servidor. \n <a:setona:559528940780126218> s.sugestao = envia uma sugestão para ser votada. \n <a:setona:559528940780126218> s.report = Reporta algum usúario do servidor. \n <a:setona:559528940780126218> s.avatar = Mostra a logo do Avatar de algum úsuario. \n <a:setona:559528940780126218> s.serverinfo = Mostra informações tecnicas sobre o servidor."
    }});
  })
qualquercoisa3.on('collect', r3 => { 
    msg.edit({embed: {
        color: 0x36393e,
        title: "<:grupo:533511913968107530> Outros comandos",
        description: "**Em breve**"
    }});
})
qualquercoisa1.on('collect', r1 => {
  msg.edit({embed: {
    color: 0x36393e,
    title: "Vejá minhas categorias",
    description: "📋 | Servidor\n\n🔒 | Equipe\n\n📥 | Porn \n\n📂 | Bot\n\n⏮ | Menu"
  }})
})
qualquercoisa4.on('collect', r4 => {
    msg.edit({embed: {
        color: 0x36393e,
        title: "<a:martelostaff:559529451965251595> Comandos da equipe",
        description: "<a:setona:559528940780126218> t.kick = Este comando remove um usuário do grupo.(kick)\n<a:setona:559528940780126218> s.ban = Com este comando alguém da equipe bane alguém do grupo.\n<a:setona:559528940780126218> s.clear = Limpa mensagens do grupo (Limete de 100 mensagens)\n<a:setona:559528940780126218> s.anuncio = Este comando anuncia/avisa coisas importantes.\n<a:setona:559528940780126218> s.say = você fala através do bot. \n <a:setona:559528940780126218>s.equipe = Mostra o nome dos jogadores da equipe, Oficial do server.\n <a:setona:559528940780126218> s.votacao = Inicia-se uma votação.\n<a:setona:559528940780126218> s.anuncioprivado = Faz um anúncio no privado de todos os membros do servidor. \n <a:setona:559528940780126218> s.mute = Muta algum úsuario por um tempo especifico. \n <a:setona:559528940780126218>  s.warn = Alerta um jogador sobre algo de errado que está fazendo."
    }});
})
qualquercoisa5.on('collect', r5 => {
    msg.edit(pornEmbed)
})
})
}

exports.help = {
    name : "ajuda"
}