const Discord = require("discord.js");

exports.run = (bot,message,args) => {


    const filter3 = (reaction, user) => ['A'].includes(reaction.emoji.name) && user.id === message.author.id;

message.channel.send(embed).then(async msg => {

    await msg.react('🇦');
    await msg.react('🇧');
    await msg.react('🇨');

    msg.awaitReactions(filter, {
        max: 1,
        time: 30000,
        errors: ['time']
    }).then(collected => {

        const reaction = collected.first();

        switch (reaction.emoji.name) {
            case 'A':
                const maccabeus = addRole
                const c1 = message.react
        }
    })
});

}
exports.help = {
name : "say"
}