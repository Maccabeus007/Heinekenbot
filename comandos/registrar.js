const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

    await message.delete().catch(O_o=>{});

    const userregister = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    const filter1 = (reaction, user) => ['▶️'].includes(reaction.emoji.name) && user.id === message.author.id;

    let inicioEmbed = new Discord.RichEmbed()
    .setColor("#bc0000")
    .setAuthor('Registro', message.author.avatarURL )
    .addField("🤖 Registrado:", `<@${userregister.id}>`)
    .addField("👮🏻 Registrador:", `<@${message.author.id}> `)
    .addField("👉🏻 Register in", message.channel)
    .addField('\u200B','\u200B')
    .setDescription("Seções:\n 👩 `Gênero` \n  👨‍👦 `Idade` \n 💑`Sexualidade` \n ⛎ `Signo` \n 🎮 `Games` ")
    .setThumbnail(message.guild.iconURL)
    .setFooter(`• by: ${message.author.username} • `)
    .setTimestamp();

    const rmasculino = message.guild.roles.get('708136894000529520'); // Masculino
    const rfeminino = message.guild.roles.get('708136894751440966'); // Feminino
    const routro = message.guild.roles.get('708136896043155486'); // Outro

    const filter2 = (reaction, user) => ['🙎🏼', '🙎🏼‍♂️', '🌈', '▶️'].includes(reaction.emoji.name) && user.id === message.author.id;

    let genderEmbed = new Discord.RichEmbed()
    .setColor("#bc0000")
    .setAuthor('Registro', message.author.avatarURL )
    .addField("🤖 Registrado:", `<@${userregister.id}>`)
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

    const rmore18 = message.guild.roles.get("708336688815931482");//+18
    const rmenos18 = message.guild.roles.get("708336690019958874"); // -18

    const filter3 = (reaction, user) => ['🔞', '🔫', '▶️'].includes(reaction.emoji.name) && user.id === message.author.id;

    let ageEmbed = new Discord.RichEmbed()
    .setColor("#bc0000")
    .setAuthor('Registro', message.author.avatarURL )
    .addField("🤖 Registrado:", `<@${userregister.id}>`)
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    message.channel.send(inicioEmbed).then(async msg => {

        await msg.react('▶️');

        msg.awaitReactions(filter1, {
            max: 1,
            time: 90000,
            errors: ['time']
        }).then(collected => {

            const reaction1 = collected.first();

            switch (reaction1.emoji.name) {
                case '▶️':
                    msg.delete();
                    message.channel.send(genderEmbed).then(async msg => {

                        await msg.react('🙎🏼‍♂️');
                        await msg.react('🙎🏼');
                        await msg.react('🌈');
                        await msg.react('▶️');
                    
                        msg.awaitReactions(filter2, {
                            max: 1,
                            time: 90000,
                            errors: ['time']
                        }).then(collected => {
                    
                            const reaction2 = collected.first();
                    
                            switch (reaction2.emoji.name) {
                                case '🙎🏼‍♂️':
                                    userregister.addRole(rmasculino).catch(err => {
                                        console.log(err);
                                        return message.channel.send(`Erro ao adicionar o cargo! **${err.message}**.`);
                                    });
                                break;
                                case '🙎🏼':
                                        userregister.addRole(rfeminino).catch(err => {
                                            console.log(err);
                                            return message.channel.send(`Erro ao adicionar o cargo! **${err.message}**.`);
                                    });
                                break;
                                case '🌈':
                                            userregister.addRole(routro).catch(err => {
                                                console.log(err);
                                                return message.channel.send(`Erro ao adicionar o cargo! **${err.message}**.`);
                                    });
                                break;
                                case '▶️':
                                    msg.delete();
                                    message.channel.send(ageEmbed).then(async msg => {

                                        await msg.react('🔫');
                                        await msg.react('🔞');
                                        await msg.react('▶️');
                                    
                                        msg.awaitReactions(filter3, {
                                            max: 1,
                                            time: 90000,
                                            errors: ['time']
                                        }).then(collected => {
                                    
                                            const reaction3 = collected.first();
                                    
                                            switch (reaction3.emoji.name) {
                                                case '🔫':
                                                    userregister.addRole(rmore18 ).catch(err => {
                                                        console.log(err);
                                                        return message.channel.send(`Erro ao adicionar o cargo! **${err.message}**.`);
                                                    });
                                                break;
                                                case '🔞':
                                                        userregister.addRole(rmenos18).catch(err => {
                                                            console.log(err);
                                                            return message.channel.send(`Erro ao adicionar o cargo! **${err.message}**.`);
                                                    });
                                                break;
                                                case '▶️':
                                                    msg.delete();
                                                break;
                                            }
                                        })
                                    });
                                break;
                            }
                        })
                    });
                break;
            }
        })
    });

};

exports.help = {
    name: 'registrar'
};

// message.channel.send(embed).then(async msg => {

//     await msg.react('🇦');
//     await msg.react('🇧');
//     await msg.react('🇨');

//     msg.awaitReactions(filter, {
//         max: 1,
//         time: 30000,
//         errors: ['time']
//     }).then(collected => {

//         const reaction = collected.first();

//         switch (reaction.emoji.name) {
//             case '🙎🏼‍♂️':
//                 userregister.addRole(a).catch(err => {
//                     console.log(err);
//                     return message.channel.send(`Erro ao adicionar o cargo! **${err.message}**.`);
//                 });
//             break;
//             case '🙎🏼':
//                     userregister.addRole(b).catch(err => {
//                         console.log(err);
//                         return message.channel.send(`Erro ao adicionar o cargo! **${err.message}**.`);
//                 });
//             break;
//             case '🌈':
//                         userregister.addRole(c).catch(err => {
//                             console.log(err);
//                             return message.channel.send(`Erro ao adicionar o cargo! **${err.message}**.`);
//                 });
//             break;
//             case '▶️':
//             break;
//         }
//     })
// });