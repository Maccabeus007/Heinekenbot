exports.run = (bot,message,args) => {

    if (!message.member.hasPermission(`MANAGE_CHANNELS`)) return message.channel.send("Você não possuí permissão para isto.")

    if(!args[0]) return message.channel.send("Use (prefixo)bloquearcanal (segundos/perm)")

    if(args[0] != "perm" && isNaN(args[0])) return message.channel.send("Use (prefixo)bloquearcanal (segundos/perm)")
    if(args[0] == "perm"){
        message.channel.overwritePermissions(
            message.guild.id, {
                SEND_MESSAGES: false,
                ATTACH_FILES: false
            }
        )
        message.channel.send("O chat foi bloqueado permanentemente por " + message.author.username)
    }else{
        message.channel.overwritePermissions(
            message.guild.id, {
                SEND_MESSAGES: false,
                ATTACH_FILES: false
            }
        )
        message.channel.send("O chat foi bloqueado por " + message.author.username + " durante " + args[0] + " segundos.")
        setTimeout(function(){ 
            message.channel.overwritePermissions(
                message.guild.id, {
                    SEND_MESSAGES: true,
                    ATTACH_FILES: true
                }
            )
        }, args[0]);

    }
}