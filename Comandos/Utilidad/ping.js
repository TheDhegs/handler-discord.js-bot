module.exports = {
    name: "ping",
    alias: "pong",
    description: "Mira el ping del bot",
    usage: "!ping",

execute: async(client, msg, args) => {
    msg.reply(`Mi ping es de **${client.ws.ping}ms**`)
}
}
