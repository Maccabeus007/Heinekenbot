const Discord = require("discord.js");

exports.run = async (bot,message,args) => {
await message.delete().catch(O_o=>{});

//úsuario que vai ser registrado
const userregistro = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//pegando os cargos da guild, e colocando na variavel
let serve = bot.guilds.get("705198156631113744");
//                    JÃO
let rjao = serve.roles.get("713233614371815478");
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
//                  ÍNICIO
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
//                      GÊNERO
let genderEmbed = new Discord.RichEmbed()
.setColor("#bc0000")
.setAuthor('Registro', message.author.avatarURL )
.addField("🤖 Registrado:", `${userregistro}`)
.addField("👮🏻 Registrador:", `<@${message.author.id}> `)
.addField('\u200B','\u200B')
.addField("Modulo:", "**Gênero**" )
.addField("Cargos:", '\u200B' )
.addField("🙎🏼‍♂️ Masculino:", `<@&708136894000529520>` )
.addField("🙎🏼 Feminino:", `<@&708136894751440966>` )
.addField("🌈 Outro:", `<@&708136896043155486>` )
.addField('Next ▶️ ','\u200B')
.setThumbnail(message.guild.iconURL)
.setFooter(`• by: ${message.author.username} • `)
.setTimestamp();
//                   IDADE
let ageEmbed = new Discord.RichEmbed()
.setColor("#bc0000")
.setAuthor('Registro', message.author.avatarURL )
.addField("🤖 Registrado:", `${userregistro}`)
.addField("👮🏻 Registrador:", `<@${message.author.id}> `)
.addField('\u200B','\u200B')
.addField("Modulo:", "**IDADE**" )
.addField("Cargos:", '\u200B' )
.addField("🔫 Mais 18", `<@&708336688815931482>` )
.addField("🔞 Menos 18:", `<@&708336690019958874>` )
.addField('Next ▶️ ','\u200B')
.setThumbnail(message.guild.iconURL)
.setFooter(`• by: ${message.author.username} • `)
.setTimestamp();
//                    SEXUALIDADE
let sexEmbed = new Discord.RichEmbed()
.setColor("#bc0000")
.setAuthor('Registro', message.author.avatarURL )
.addField("🤖 Registrado:", `${userregistro}`)
.addField("👮🏻 Registrador:", `<@${message.author.id}> `)
.addField('\u200B','\u200B')
.addField("Modulo:", "**Opção Sexual**" )
.addField("Cargos:", '\u200B' )
.addField("🏳️ Hétero:", `<@&708136896475299891>` )
.addField("🏳️‍🌈 LGBTQI+:", `<@&708136897335132230>` )
.addField('Next ▶️ ','\u200B')
.setThumbnail(message.guild.iconURL)
.setFooter(`• by: ${message.author.username} • `)
//                    SIGNO
let signoEmbed = new Discord.RichEmbed()
.setColor("#bc0000")
.setAuthor('Registro', message.author.avatarURL )
.addField("🤖 Registrado:", `${userregistro}`)
.addField("👮🏻 Registrador:", `<@${message.author.id}> `)
.addField('\u200B','\u200B')
.addField("Modulo:", "**Signo**" )
.addField("**Cargos:**", '\u200B')
.addField("♒ Aquario:", `<@&708136899667034144>` )
.addField("♈ Áries:", `<@&708136900212424735>` )
.addField("♊ Gemeos:", `<@&708138674801606686>` )
.addField("♋ Cancer:", `<@&708138675304792095>` )
.addField("♌ Leão:", `<@&708138675963166802>` )
.addField("♍ Virgem:", `<@&708138676223475724>` )
.addField("♎ Libra:", `<@&708138676223475724>` )
.addField("♏ Escorpião:", `<@&708138678027026432>` )
.addField("♐ Sargitário:", `<@&708139856399958060>` )
.addField("♑ Capricornio:", `<@&708139856727113819>` )
.addField("♉ Touro:", `<@&708139857989337100>` )
.addField("♓ Peixes:", `<@&708139858220023871>` )
.addField('Next ▶️ ','\u200B')
.setThumbnail(message.guild.iconURL)
.setFooter(`• by: ${message.author.username} • `)
.setTimestamp();

////////////////////////////////////////////////////////
const inicio = await message.channel.send(inicioEmbed),
  emojis1 = ['▶️'];

for (const i of emojis1) inicio.react(i);

const filter1 = (r, u) => emojis1.includes(r.emoji.name) && u.equals(message.author),
collector1 = inicio.createReactionCollector(filter1, { time: 120 * 1000 });

collector1.on('collect', async (r) =>  {
switch  (r.emoji.name) {
  case '▶️': {
    message.channel.bulkDelete(1)
    const gender = await message.channel.send(genderEmbed),
     emojis2 = ['🙎🏼', '🙎🏼‍♂️', '🌈', '▶️'];

    for (const am of emojis2) gender.react(am);

    const filter2 = (r, u) => emojis2.includes(r.emoji.name) && u.equals(message.author),
    collector2 = gender.createReactionCollector(filter2, { time: 120 * 1000 });

    collector2.on('collect', async (r) => {
        switch (r.emoji.name) {
          case '🙎🏼‍♂️': {
          await(userregistro.addRole(rmasculino))
          break;
          }
          case '🙎🏼': {
            await (userregistro.addRole(rfeminino))
            break;
          }
          case '🌈': {
            await (userregistro.addRole(routro))
            break;
          }
          case '▶️': {
            message.channel.bulkDelete(1)
            const age = await message.channel.send(ageEmbed),
             emojis3 = ['🔞', '🔫', '▶️'];
        
            for (const at of emojis3) age.react(at);
        
            const filter3 = (r, u) => emojis3.includes(r.emoji.name) && u.equals(message.author),
            collector3 = age.createReactionCollector(filter3, { time: 120 * 1000 });
        
            collector3.on('collect', async (r) => {
                switch (r.emoji.name) {
                    case '🔞': {
                    await (userregistro.addRole(rmenos18))
                    break;
                    }
                    case '🔫': {
                    await (userregistro.addRole(rmore18))
                    break;
                    }
                    case '▶️': {
                    message.channel.bulkDelete(1)
                    const sex = await message.channel.send(sexEmbed),
                    emojis4 = ['🏳️', '🏳️‍🌈', '▶️'];

                    for (const ay of emojis4) sex.react(ay);

                    const filter4 = (r, u) => emojis4.includes(r.emoji.name) && u.equals(message.author),
                    collector4 = sex.createReactionCollector(filter4, { time: 120 * 1000 });

                    collector4.on('collect', async (r) => {
                    switch (r.emoji.name) {
                    case '🏳️': {
                    await (userregistro.addRole(rhetero))
                    break;
                    }
                    case '🏳️‍🌈': {
                    await (userregistro.addRole(rlgbt))
                    break;
                    }
                    case '▶️': {
                        const signo = await message.channel.send(signoEmbed),
                        emojis5 = ['♒', '♈', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♉', '♓', '▶️',];
                       
                       for (const aka of emojis5) signo.react(aka);
                       
                       const filter5 = (r, u) => emojis5.includes(r.emoji.name) && u.equals(message.author),
                       collector5 = signo.createReactionCollector(filter5, { time: 120 * 1000 });
                       
                       collector5.on('collect', async (r) => {
                           switch (r.emoji.name) {
                             case '♒': {
                               await (userregistro.addRole(raquario))
                             break;
                             }
                             case '♈': {
                                await (userregistro.addRole(raries))
                              break;
                              }
                              case '♊': {
                                await (userregistro.addRole(rgemeos))
                              break;
                              }
                              case '♋': {
                                await (userregistro.addRole(rcancer))
                              break;
                              }
                              case '♌': {
                                await (userregistro.addRole(rleao))
                              break;
                              }
                              case '♍': {
                                await (userregistro.addRole(rvirgem))
                              break;
                              }
                              case '♎': {
                                await (userregistro.addRole(rlibra))
                              break;
                              }
                              case '♏': {
                                await (userregistro.addRole(rescorpion))
                              break;
                              }
                              case '♐': {
                                await (userregistro.addRole(rsargitario))
                              break;
                              }
                              case '♑': {
                                await (userregistro.addRole(rcapricornio))
                              break;
                              }
                              case '♉': {
                                await (userregistro.addRole(rtouro))
                              break;
                              }
                              case '♓': {
                                await (userregistro.addRole(rpeixes))
                              break;
                              }
                             case '▶️': {
                               message.channel.bulkDelete(1)
                               message.channel.send(`o usúario ${userregistro} foi registrado com sucesso! \n Por: <@${message.author.id}>`).then(msg => msg.delete(5000));
                               await (userregistro.removeRole(rjao))

                               break;
                             }
                           }
                       });
                       
                         break;
                           }
                          }
                        });
                    break;
                  }
                }
            })
            break;
          }
        }
      });
    break;
  }
}
})


}

exports.help = {
    name : "ajuda"
}

// message.delete()
// const gender = await message.channel.send(genderEmbed),
//  emojis2 = ['🙎🏼', '🙎🏼‍♂️', '🌈', '▶️'];

// for (const am of emojis2) gender.react(am);

// const filter1 = (r, u) => emojis2.includes(r.emoji.name) && u.equals(message.author),
// collector2 = gender.createReactionCollector(filter1, { time: 120 * 1000 });

// collector2.on('collect', async (r) => {
//     switch (r.emoji.name) {
//       case '🙎🏼‍♂️': {
//         userregistro.addRole(rmasculino)
//       break;
//       }
//       case '🙎🏼': {
//         userregistro.addRole(rfeminino)
//         break;
//       }
//       case '🌈': {
//         userregistro.addRole(routro)
//         break;
//       }
//       case '▶️': {
//         message.channel.send("oi")
//         break;
//       }
//     }
// });
