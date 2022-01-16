const Discord = require('discord.js-light')
require('dotenv').config()
const client = new Discord.Client({
    makeCache: Discord.Options.cacheWithLimits({
        ApplicationCommandManager: Infinity, // guild.commands
        BaseGuildEmojiManager: Infinity, // guild.emojis
        ChannelManager: Infinity, // client.channels
        GuildChannelManager: Infinity, // guild.channels
        GuildBanManager: Infinity, // guild.bans
        GuildManager: Infinity, // client.guilds
        GuildMemberManager: Infinity, // guild.members
        MessageManager: Infinity, // channel.messages
        PermissionOverwriteManager: Infinity, // channel.permissionOverwrites
        RoleManager: Infinity, // guild.roles
        UserManager: Infinity, // client.users
    }),
    intents: [Discord.Intents.FLAGS.GUILDS, "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS", "GUILDS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INVITES", "GUILD_WEBHOOKS", "GUILD_INTEGRATIONS", "GUILD_VOICE_STATES", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING"],
	rejectOnRateLimit: () => true,
	shards: 'auto',
	messageCacheLifetime: 180,
	messageCacheMaxSize: 50,
    });
module.exports = client;
client.commands = new Discord.Collection();
['cmds', 'eventos'].forEach(handler => {
    require(`./Handlers/${handler}`)(client);
})

client.login(process.env.TOKEN).then(m => console.log(`Iniciado como ${client.user.tag}`))