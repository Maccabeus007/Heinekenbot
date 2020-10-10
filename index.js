const Discord = require("discord.js");//Fala que precisa do Discord pra funfar '-
const fs = require("fs");
const config = require("./config.json");// fala que precisa do .jon pra funfar tmb
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const client = new Discord.Client();
const Ytdl = require('ytdl-core');
let tobao = false;

bot.on('message', (msg) => {
  if (msg.content === 'y.join'){
    if(msg.member.voiceChannel){
      msg.member.voiceChannel.join();
      tobao = true;
    }
    else {
      message.channel.send(`<@${message.author.id}>, você precisa estar em um **canal de voz** para conectar-me!`);
    }
  }

  else if (msg.content === 'y.leave'){
    if(msg.member.voiceChannel){
      msg.member.voiceChannel.leave();
      tobao = false;
    }
    else {
      message.channel.send(`<@${message.author.id}>, você precisa estar em um **canal de voz** para conectar-me!`);
    }

  }

  else if (msg.content.startsWith('y.play')){
    if(tobao){
      let oqtocar = msg.content.replace('y.play','');
      if (Ytdl.validateURL(oqtocar)){
        msg.member.voiceChannel.connection.playStream(Ytdl(oqtocar));
      } else {
        msg.channel.send("Este link não pertence ao Youtube, vsfd! ")
      }
    }
  }
});

bot.on('message', message => {
  if(message.content.startsWith(`<@702246607667593307>`)){
    message.channel.send(`oi <@702246607667593307>`);
  }
});


bot.on("guildMemberAdd", member => {
    const guild = member.guild
    //na linha de baixo, é adicionado o chat entrada... 
    //oq vc faz é somente colocar o nome do chat em que deseja 
    //deixar a msg de entrada nos respectivos nomes entrada.
    const channel = guild.channels.find('name', '┃🏰-chegadas┃')
    if(!channel) return guild.createChannel("┃🏰-chegadas┃")
    
    message.send(`<@${member.id}>`)
    
    const haki1 = new Discord.RichEmbed()
       //aq o embed normal
    .setTimestamp()
    .setTitle("👋Bem-Vindo(a)!")
    .setColor("#00ff1d")
    .setThumbnail(member.user.displayAvatarURL)
    .setAuthor(`${member}`, `${member.user.displayAvatarURL}`)
    .setDescription(`Olá ${member} ,\nespero que você se divirta no nosso servidor!\n**Siga as regras para não ser Banido! '-'**\n**Divulgue para os seus amigos !**😄\nUtilize **($ajuda)** para ver os meus comandos!`)
    .setFooter(`Id do úsuario:${member.id}`)
    .setImage("https://cdn.discordapp.com/attachments/547934957230751767/559191578900692992/asdasdasdasd.gif")
    
    channel.send(haki1); // aq envia a menssage pro chat em que vc colocou la em cima
    member.send(haki1); // aq manda a messagem no pv do membro, no caso eu coloquei a mesma!

    if(guild.name === '😢 Zona Sad 😢'){
        const autorole = guild.roles.find(r => r.name === "🎒 Sadzinhos");//extra autorole
        member.addRole(autorole) // coloque o cargo de autorole no lugar de Membro.
    }
});//MzM2MTkwNjgxOTc2NjY4MTYw.D3aNNw.b4ZScxPe9sdAWWe2U6kaUD-2mtE

bot.on("guildMemberRemove", member => {
    const guild = member.guild
    //na linha de baixo, é adicionado o chat saida... 
    //oq vc faz é somente colocar o nome do chat em que deseja 
    //deixar a msg de saida nos respectivos nomes saida.
    const channel = guild.channels.find('name', '')
    if(!channel) return guild.createChannel(" ")
    
    const haki2 = new Discord.RichEmbed()
               // embed normal!
    .setTimestamp()
    .setTitle("😭ADeus")
    .setColor("#ff0000")
    .setThumbnail(member.user.displayAvatarURL)
    .setAuthor(`${member.username}`, `${member.user.displayAvatarURL}`)
    .setDescription(`Tchal ${member}\n**VÁ COM DEUS!**`)
    .setFooter(`Id do úsuario:${member.id}`);

    channel.send(haki3); // envia o embed para o chat(recomendo não mudar!!)
});

bot.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);

    let args = message.content.split(" ").slice(1);

    let arquivocmd = bot.commands.get(command.slice(config.prefix.lenght));

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run(bot, message, args);
      } catch (err) {
          // message.channel.send(`__${message.author.username}__ **Não consegui achar este comando no meu banco de dados.**`)
        console.error(err);
      }
});
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      bot.on(eventName, event.bind(null, bot));
    });
  });



bot.login(config.token)




//fs.readdir("./comandos/", (err, files) => {
//    if(err) console.error(err);
//
//    let arquivojs = files.filter(f => f.split(".").pop() == "js");
//   arquivojs.forEach((f, i) => {
//        let props = require(`./comandos/${f}`);
//        console.log(`Comando ${f} carregado com sucesso!`);
//       bot.commands.set(props.help.name, props);
//    });
//});             
//
//
//
//if(arquivocmd) arquivocmd.run(bot,message,args);
//
//
//
//
//
//
//
//
//