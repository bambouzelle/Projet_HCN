const {CommandInteraction} = require("discord.js")
const {giphy_API_Key} = require("../config.json")
const giphy = require('giphy-api')(giphy_API_Key);
/**
 *
 * @param {CommandInteraction} interaction
 */
function command(interaction) {
    const motClef = interaction.options.get("mot_clef").value
    if(motClef){
        giphy.random(motClef).then(
            function (res) {
                interaction.reply(res.data.url);
            }
        )
    }else {
        giphy.random().then(
            function (res) {
                interaction.reply(res.data.url);
            }
        )
    }

}

module.exports.gif = command;