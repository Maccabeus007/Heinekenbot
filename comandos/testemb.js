const Discord = require("discord.js");

exports.run = (bot,message,args) => {

    let userregister = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let mma = '708136894751440966'
//embed's

let inicioEmbed = new Discord.RichEmbed()
.setColor("#bc0000")
.setAuthor('Registro', message.author.avatarURL )
// .addField("🤖 Registrado:", `<@${userregister.id}>`)
.addField("👮🏻 Registrador:", `<@${message.author.id}> `)
.addField('\u200B','\u200B')
.addField("Modulo:", "**Signo**" )
.addField("**Cargos:**", '\u200B')
.addField("Aquario:", `<@&708136899667034144>` )
.addField("Áries:", `<@&708136900212424735>` )
.addField("Gemeos:", `<@&708138674801606686>` )
.addField("Cancer:", `<@&708138675304792095>` )
.addField("Leão:", `<@&708138675963166802>` )
.addField("Virgem:", `<@&708138676223475724>` )
.addField("Libra:", `<@&708138676223475724>` )
.addField("Escorpião:", `<@&708138678027026432>` )
.addField("Sargitário:", `<@&708139856399958060>` )
.addField("Capricornio:", `<@&708139856727113819>` )
.addField("Touro:", `<@&708139857989337100>` )
.addField("Peixes:", `<@&708139858220023871>` )
.addField('Next ▶️ ','\u200B')
.setThumbnail(message.guild.iconURL)
.setFooter(`• by: ${message.author.username} • `)
.setTimestamp();

message.channel.send(inicioEmbed);
let raquario = serve.roles.get("708136899667034144");
let raries = serve.roles.get("708136900212424735");
let rgemeos = serve.roles.get("708138674801606686");
let rcancer = serve.roles.get("708138675304792095");
let rleao = serve.roles.get("708138675963166802");
let rvirgem = serve.roles.get("708138676223475724");
let rlibra = serve.roles.get("708138677112537169");
let rescorpion = serve.roles.get("708138678027026432");
let rsargitario = serve.roles.get("708139856399958060");
let rcapricornio = serve.roles.get("708139856727113819");
let rtouro = serve.roles.get("708139857989337100");
let rpeixes = serve.roles.get("708139858220023871");
}
exports.help = {
    name : "testemb"
}
