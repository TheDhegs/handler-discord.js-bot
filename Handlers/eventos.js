const {readdirSync} = require('fs')
module.exports = (client) => {
    for (const file of readdirSync('./Eventos').filter(file => file.endsWith('.js'))) {
        const eventName = file.split('.').shift();
        const event = require(`../Eventos/${file}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`../Eventos/${file}`)]
    }
}