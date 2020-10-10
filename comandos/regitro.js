const Discord = require("discord.js");

exports.run = (bot,message,args) => {
//úsuario que vai ser registrado
const userregistro = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//pegando os cargos da guild, e colocando na variavel
let serve = bot.guilds.get("705198156631113744");
//               seção Gênero
let rfeminino = serve.roles.get("708136894000529520");//cargo feminino
let rmasculino = serve.roles.get("708136894000529520");//cargo masculino
let routro = serve.roles.get("708136896043155486");//cargo outro
//                  Idade
let rmore18 = serve.roles.get("708336688815931482");
let rmenos18 = serve.roles.get("708336690019958874");
//                Opção Sexual
let rhetero = serve.roles.get("708136896475299891");
let rlgbt  = serve.roles.get("708136897335132230");
//                    Signo
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
//                   Jogo
let rfreefire = serve.roles.get("708139859801538703");
let rpubg = serve.roles.get("708139859868385301");
let rpaladins = serve.roles.get("708139860216512572");
let rminecraft = serve.roles.get("708139860698988605");
let rcod = serve.roles.get("708136898631041075");
let rcsgo = serve.roles.get("708142577609605130");
let rfortnite = serve.roles.get("708143429518884944");
let rlol = serve.roles.get("708143747266773002");
//                  EMBED'S
let inicioEmbed = new Discord.RichEmbed()
.setColor("#bc0000")
.setAuthor('Registro', message.author.avatarURL )
.addField("🤖 Registrado:", `${userregistro}`)
.addField("👮🏻 Registrador:", `<@${message.author.id}> `)
.addField("👉🏻 Register in", message.channel)
.addField('\u200B','\u200B')
.setDescription("Seções:\n 👩 `Gênero` \n  👨‍👦 `Idade` \n 💑`Sexualidade` \n ⛎ `Signo` \n 🎮 `Games` ")
.setThumbnail(message.guild.iconURL)
.setFooter(`• by: ${message.author.username} • `)
.setTimestamp();

message.channel.send(inicioEmbed).then(msg=>{
    msg.react('⏭')
});
const filter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;
const collector = message.createReactionCollector(filter, { time: 15000 });
collector.on('collect', r => {
    message.channel.send("AOBA");
})

}
exports.help = {
    name : "registro"
}