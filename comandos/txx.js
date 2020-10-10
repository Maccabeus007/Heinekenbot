const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

	
	
	    if(!message.member.hasPermission("KICK_MEMBERS"))     return message.channel.send(`<a:erro:557377670174998529> | Os superiores não te deram poder para usa esse comando!`);
	let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let usuario = message.mentions.users.first() || message.guild.users.get(args[0]);

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
            if(!message.guild.member(usuario).kickable) return message.channel.send(`<a:erro:557377670174998529> | você não pode expulsar um membro que tenha um poder superior a vc ou ao meu!`)

        let  Serve = message.guild.iconURL

            const Embed = new Discord.RichEmbed()
            .setAuthor("<a:sirenehk:559532794808893440> REPORT <a:sirenehk:559532794808893440>", bot.user.displayAvatarURL)
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

        msg.react( bot.emojis.get("557770651935703050"))
		msg.react( bot.emojis.get("557377670174998529"))
        const sure = (reaction, user) => reaction.emoji.id === `557770651935703050` && user.id === message.author.id;
    const r1 = msg.createReactionCollector(sure, {time: 60000 });
	
				
				r.remove(message.author.id);
		message.guild.member(usuario).kick(motive);
		let serve = message.guild.iconURL
        let embed = new Discord.RichEmbed()
		.setColor(7320887)
        .setThumbnail(message.author.avatarURL)
		.setAuthor(`${target.user.tag} | KIKADO`, target.user.avatarURL)
		.setThumbnail(target.user.avatarURL)
		.setDescription(`:pencil: **Quebrou as regras da ${message.guild.name} e foi expulso** \n\n <:376473590901637120:557268365429702660> Staff que lhe baniu: ${message.author} \n  usuário banido: ${usuario}\n Motivo: **${motive}**`)
		.setFooter(`ID do usuário: ${target.user.id}`)
        message.channel.send(embed)
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
                
                
                  

            })

        
        })
        })
    })
}