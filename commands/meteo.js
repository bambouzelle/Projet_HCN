const weather = require("openweather-apis");
const {CommandInteraction} = require("discord.js")


const {token_meteo} = require ("../config.json")

/**
 *
 * @param {CommandInteraction} interaction
 *
 */
function command(interaction)
{
    weather.setLang('fr') 
    weather.setUnits('metric')
    if (interaction.options.get("ville")) {
        const La_ville = interaction.options.get("ville").value
        weather.setAPPID(token_meteo);
        weather.setCity(La_ville)
        weather.getTemperature(function (err,temp) {
            if(err) console.log(err);
            console.log(temp)
        })
        weather.getDescription(function (err,desc) {
            if(err) console.log(err);
            console.log(desc)
        })

    }

}
module.exports.meteo = command