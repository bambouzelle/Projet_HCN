const {CommandInteraction} = require("discord.js")

/**
 *
 * @param {CommandInteraction} interaction
 */
function command(interaction) {
    interaction.reply("pong!")
}

module.exports.ping = command;