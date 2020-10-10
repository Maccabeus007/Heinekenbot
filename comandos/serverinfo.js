const Discord = require("discord.js");
const moment = require("moment");

exports.run = (bot,message,args) => {
      let online = message.guild.members.filter(a => a.presence.status == "online").size;
      let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
      let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
      let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
      let bots = message.guild.members.filter(a => a.user.bot).size;
      let totalmembros = message.guild.memberCount;
      let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
      let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
      let cargos = message.guild.roles.map(a => a).join(", ")
          const embed = new Discord.RichEmbed()
          .setTitle(`<:discordlogo:533511559805140993> Informações do servidor: ${message.guild.name}`)
          .setColor("#FF0000")
          .addField('<:Eusouochefe:533511078743638016> Dono', `<@${message.guild.owner.id}>`, false)
          .addField(':calendar: Criado em:', moment(message.guild.createdAt).format('LLLL'), false)
          .addField("🆔 ID", message.guild.id, false)
          .addField(`<:grupo:533511913968107530> Membros [${totalmembros}]`, `<:online:532723665956241409> Online: ${online} | <:ausente:533509774764146719> Ausente: ${ausente} | <:ocupado:533509669390385152> Ocupado: ${ocupado} | <:pessoas:533510458137640970> Offline: ${offline} | <:robotface_1f916:532406864865001492> Bots: ${bots}`, false)
          .addField(`💬 Canais [${canaistexto+canaisvoz}]`, `📝 Texto: ${canaistexto}\n🗣 Voz: ${canaisvoz}`, false)
          .setThumbnail(message.guild.iconURL)
          .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
          message.channel.send(embed)
}

exports.help = {
    name : "serverinfo"
}
// const Discord = require('discord.js');
// const client = new Discord.Client();
// module.exports.run = (client, message, args) => {

//     const moment = require("moment")
//     moment.locale("pt-BR")
//     let online = message.guild.members.filter(a => a.presence.status == "online").size;
//     let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
//     let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
//     let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
//     let bot = message.guild.members.filter(a => a.user.bot).size;
//     let totalmembros = message.guild.memberCount;
//     let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
//     let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
//     let cargos = message.guild.roles.map(a => a).join(", ")
    
//         const embed = new Discord.RichEmbed()
//         .setTitle(`📑 Informações do servidor: **${message.guild.name}**`)
//         .setColor("#0051FF")
//         .setThumbnail(message.guild.iconURL)
//         .setTimestamp()
//         .addField('  Criador do servidor:', `<@${message.guild.owner.id}>`)
//         .addField('  Criado em:', moment(message.guild.createdAt).format('LLLL'))
//         .addField("  ID do servidor:", message.guild.id)
//         .addField(`  Membros [${totalmembros}]`, ` Online: **${online}**\n Ausente: **${ausente}**\n Ocupado: **${ocupado}**\n Offline: **${offline}**\n Bots: ${bot}`)
//         .addField(`  Canais [${canaistexto+canaisvoz}]`, `Texto: **${canaistexto}**\n Voz: **${canaisvoz}**`)
//         .addField(`  Todos os cargos do servidor [${message.guild.roles.size}]`, cargos)
//         .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
//         message.channel.send(embed)
// }

// module.exports.info = { 
//     name: "serverinfo",
//     aliases: ["infoserver"]
// }