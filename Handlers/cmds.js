const {readdirSync} = require('fs')
module.exports = (client) => {
try{
    readdirSync('./Comandos').forEach(subCarpeta => {
        const carpetas = readdirSync(`./Comandos/${subCarpeta}`).filter(file => file.endsWith('.js'))
        for(let archivo of carpetas){
            let file = require(`../Comandos/${subCarpeta}/${archivo}`)
            client.commands.set(file.name, file)
        }
    })
}catch(e){
    console.error(e)
}

}