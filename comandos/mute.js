const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!mute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send({embed: {
    color: 0x00ff00,
    description: `<> - Campos obrigatórios\n() - Campos opcionais\n\n${message.author} Utilize:\n**s.mute <@Membro> <tempo>**`
  }});
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:Negativo:540349058284388353> Você não tem permissão para executar este comando.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Eu não posso mutar este úsuario");
  if (tomute.id === message.author.id) return message.channel.send("Você não pode se mutar!");
  let muterole = message.guild.roles.find(`name`, "🤐-Mutado");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "🤐-Mutado",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Você não especificou o tempo!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> foi mutado por ${ms(ms(mutetime))}`);
  
  let muteEmbed = new Discord.RichEmbed()
  .setColor("#bc0000")
  .addField("<:list:537859259912945665> Usuário mutado", `<@${tomute.id}>`)
  .addField("<:Pinguim:548756194198814720> Mutado por", `<@${message.author.id}> `)
  .addField("<:pin:534777323577409539> Mutado em", message.channel)
  .addField("<:minecrafttnt:543878773792309259> Tempo",`${ms(ms(mutetime))}`)
  .setThumbnail(message.guild.iconURL)
  .setTimestamp();
 

  message.guild.member(bUser).ban(bReason);
  if (`${message.guild.id}` === '468139468038340629') {
    bot.channels.get("703390496097304638").send(muteEmbed);
}else {
    bot.channels.get("705514183424213133").send(muteEmbed)
}
  message.channel.send("O Úsuario foi mutado com sucesso!").then(msg => msg.delete(15000));
  

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    bot.channels.get("705514183424213133").send(`<@${tomute.id}> foi desmutado!`);
  }, ms(mutetime));

  message.delete();

}

module.exports.help = {
  name: "mute"
}
