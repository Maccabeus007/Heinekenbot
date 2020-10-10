exports.run = (client, message, args) => {
    let user = message.author;
    if (user.id !== '336190681976668160') {
      return message.channel.send("Só meu dono O GOSOTO, pode me reiniciar seu merda");
    }
    
    if (args.length === 0) return message.channel.send("use h.reload <command>`");
    
    try {
      delete require.cache[require.resolve(`./${args[0]}`)];
    } catch (e) {
      return message.channel.send(`Command not found: **${args[0]}**`);
    }
    
    message.channel.send(`Reloaded command: **${args[0]}**`);
    
  }