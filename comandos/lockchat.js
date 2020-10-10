const ms = require("ms");

exports.run = async (client, message, [time, reason]) => {
  if (!client.lockit) { client.lockit = []; }
  if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("❌ Você não tem permissão!")
  let validUnlocks = ["release", "unlock", "u"];
  if (!time) { return message.reply("Você não setou o tempo de bloqueio do chat!"); }

  const Lockembed = new client.methods.Embed()
    .setColor(0xDD2E44)
    .setTimestamp()
    .setTitle("🔒 LOCKCHAT 🔒")
    .setDescription(`O canal foi bloquado pelo ${message.author.tag} por ${time}`);
    if (reason != null) { Lockembed.addField("Razão: ", reason); }

  const Unlockembed = new client.methods.Embed()
    .setColor(0xDD2E44)
    .setTimestamp()
    .setTitle("🔓 LOCKCHAT 🔓")
    .setDescription("O canal foi desbloqueado.");

  if (message.channel.permissionsFor(message.author.id).has("MUTE_MEMBERS") === false) { 
    const embed = new client.methods.Embed()  
      .setColor(0xDD2E44)
      .setTimestamp()
      .setTitle("❌ ERRO: SEM PERMISSÃO! ❌")
      .setDescription("Você não tem permissão para executar este comando!!");
    return message.channel.send({embed});  
  }  

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: null }).then(() => {
      message.channel.send({embed: Unlockembed});
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => { console.log(error); });
  } else {
    message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: false }).then(() => {
      message.channel.send({embed: Lockembed}).then(() => {
        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send({embed: Unlockembed})).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));
      }).catch(error => { console.log(error); });
    });
  }
};

exports.help = {
  name: "lockchat",
};