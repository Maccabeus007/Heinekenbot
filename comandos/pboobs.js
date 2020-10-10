const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let hug = [
        "https://prnt.sc/sewqve",
        "https://prnt.sc/sewrh9",
        "https://prnt.sc/sewr89",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));

        const hembed = new Discord.RichEmbed()
            .setColor("#7D1D8A")
            .setTitle(`BOOBS`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
  
    

}
//http://www.boobtit.com/beauty/