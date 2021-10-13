const {CommandInteraction} = require("discord.js")
const {giphy_API_Key} = require("../config.json")
const giphy = require('giphy-api')(giphy_API_Key);
/**
 * Fonction de la commande /gif sur discord
 *
 * @param {CommandInteraction} interaction - interaction ou la commande a été appeler
 *
 * @return void - renvoie un message dans le channel ou la commande a été appeler
 */
function command(interaction) {

    if(interaction.options.get("mot_clef")){
        const motClef = interaction.options.get("mot_clef").value
        giphy.random(motClef).then(
            function (res) {
                interaction.reply(res.data.url);
            }
        )
    }else{
        giphy.random().then(
            function (res) {
                interaction.reply(res.data.url);
            }
        )
    }

}

module.exports.gif = command;