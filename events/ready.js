module.exports = async bot => {
    console.log('Bot iniciado com ' + bot.users.size + ' usuários, em ' + bot.channels.size + ' canais de ' + bot.guilds.size + ' servidores.');
    
    
    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log(" ██████╗ ███╗   ██╗██╗     ██╗███╗   ██╗███████")
    console.log("██╔═══██╗████╗  ██║██║     ██║████╗  ██║██╔════╝")
    console.log("██║   ██║██╔██╗ ██║██║     ██║██╔██╗ ██║█████╗")
    console.log("██║   ██║██║╚██╗██║██║     ██║██║╚██╗██║██╔══╝")
    console.log("╚██████╔╝██║ ╚████║███████╗██║██║ ╚████║███████╗")
    console.log(" ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝╚═╝  ╚═══╝╚══════╝")
                                                                                                        
                                    
    for (i=0; i<10;){
    bot.user.setPresence({ game: { name: `para ${bot.users.size} usuários `, url: "https://twitch.tv/youngnoowtz", type: 1} });
        await sleep(10000)
        bot.user.setPresence({ game: { name: "Eae galera!!", type: 1 } });
    await sleep(10000)
    bot.user.setPresence({ game: { name: `Utilize: h.ajuda `, url: "https://twitch.tv/youngnoowtz", type: 1} });
    await sleep(10000)  

    }
}