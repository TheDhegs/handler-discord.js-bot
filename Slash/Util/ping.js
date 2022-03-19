const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping del bot"),
  execute: async (client, interaction) => {
    interaction.reply(`Mi ping es de **${client.ws.ping}ms**`);
  },
};
