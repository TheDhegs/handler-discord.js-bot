const Discord = require('discord.js-light')
let prefix = "w/"
module.exports = async (client, msg) => {
    if(!msg.guild) return;
    if(msg.author.bot) return;
    if(msg.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
        msg.reply({ embeds: [
            new Discord.MessageEmbed()
            .setTitle('Hola')
            .setColor('LIGHT_GREY')
            .setDescription('#SpyMierdas')
        ] })
    }
    if(!msg.content.startsWith(prefix)) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    const comando = args.shift().toLowerCase()
    if(!comando) return msg.reply('¡Bien haz encontrado mi prefix!')
    let cmd = client.commands.find( c => c.name === comando || c.alias && c.alias.includes(comando))
    if(!cmd){
        return msg.reply('ese comando no existe!')
    }else{
        try{
            await cmd.execute(client, msg, args)
        }catch(e){
            msg.reply(' 💥 | Ah sucedido un error inesperado.!!! \n' + `\`\`\`js\n ${error} \n\`\`\``)
        }
    }
}