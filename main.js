const {Client, Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS]});
const {token} = require("./config.json");
const {commands} = require('./commands.json');

client.login(token);//login du bot

function updateCommand(server){
    const { REST } = require('@discordjs/rest');
    const { Routes } = require('discord-api-types/v9');
    const rest = new REST({ version: '9' }).setToken(token);

    rest.put(Routes.applicationGuildCommands(client.user.id, server.id), { body: commands })
        .then(() => console.log('Successfully registered application commands.'))
        .catch(console.error);
}


client.on("guildCreate", function (server) {
    updateCommand(server);
})

client.on("ready", function () {
    client.guilds.fetch().then(function (servers) {
        servers.forEach(function (server) {
            updateCommand(server);
        })
    });
})

client.on("interactionCreate", async function (interaction) {
    if(interaction.isCommand()){
       switch (interaction.commandName){
           /* case "<nom de la commande>":
            *   var {command} = require("<NomDecommand.js>");
            *   break;
            */
           case "ping":
               const {ping} = require("./commands/Ping")
               ping(interaction);
               break;
           case "gif":
               const {gif} = require("./commands/Gif")
               gif(interaction);
               break;
           default:
               interaction.reply("l'action de la commande n'est pas défini")
               break;
       }
    }
})