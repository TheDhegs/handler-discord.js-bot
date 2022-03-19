require("dotenv").config({ path: "../.env" });
let commands = [];
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { readdirSync } = require("fs");

module.exports = (client) => {
  try {
    readdirSync("./Slash").forEach((subCarpeta) => {
      const carpetas = readdirSync(`./Slash/${subCarpeta}`).filter((file) =>
        file.endsWith(".js")
      );
      for (let archivo of carpetas) {
        let file = require(`../Slash/${subCarpeta}/${archivo}`);
        commands.push(file.data.toJSON());
        client.slash.set(file.data.name, file);
      }
    });
    const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);
    (async () => {
      try {
        await rest.put(
          Routes.applicationCommands(process.env.BOT, process.env.SV),
          {
            body: commands
          }
        );
      } catch (e) {
        console.log(e);
      }
    })();
  } catch (e) {
    console.error(e);
  }
};
