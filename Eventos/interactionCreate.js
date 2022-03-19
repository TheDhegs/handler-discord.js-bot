module.exports = async (client, interaction) => {
  if (!interaction.isCommand()) return;
  const cmds = client.slash.get(interaction.commandName);
  if (!cmds) return interaction.reply("Comando inexistente o no encontrado");
  try {
    await cmds.execute(client, interaction);
  } catch (e) {
    console.error(e);
    return interaction.reply("Ocurrio un error inesperado.");
  }
};
