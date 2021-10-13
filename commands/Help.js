
const {CommandInteraction} = require("discord.js")

/**
 * fonction d'aide
 * @param {CommandInteraction} interaction - interaction qui appelle la commande
 */
function command(interaction){
    const embed = {
        title: "Aide",
        description: "Voici la liste des commande au quel je répond",
        color: null,
        fields: [
            {
                name: "`/help`",
                value: "C'est cette commande 😋"
            },
            {
                name: "`/ping`",
                value: "**PONG!**"
            },
            {
                name: "`/gif`",
                value: "Envoie un gif aléatoire de la librairie *giphy* \n\nvous pouvez y ajoutez un paramètre pour préciser se que vous voulez vraiment"
            },
            {
                name: "`/meteo`",
                value: "Envoie la météo en fonction de la ville que vous lui avez donner en paramètre"
            }]};

    interaction.reply({ embeds: [embed]});
}

module.exports.help = command; // exporter la commande pour que d'autre fichier (main.js) puisse l'utilisé