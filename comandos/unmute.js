module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("<:Negativo:540349058284388353> Você não tem permissão para executar este comando.")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("Mensione um usuario!");

        let role = message.guild.roles.find(r => r.name === "🤐-Mutado")
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("Este úsuario não esta mutado!");

        await toMute.removeRole(role);
        message.channel.sendMessage("O úsuario foi desmutado, com sucesso!");

        let muteEmbed = new Discord.RichEmbed()
        .setColor("#bc0000")
        .addField("<:list:537859259912945665> Usuário Desmutado", `<@${tomute.id}>`)
        .addField("<:Pinguim:548756194198814720> Mutado por", `<@${message.author.id}> `)
        .addField("<:pin:534777323577409539> Mutado em", message.channel)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp();
       
        bot.channels.get("558701281426800650").send(muteEmbed)

        message.delete();

     }
    
        module.exports.help = {
            name: "unmute"
        }