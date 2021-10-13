const {CommandInteraction} = require("discord.js")


const {token_meteo} = require ("../config.json")
//const apiKey = require ('openweather-apis')(token_meteo)
/**
 *
 * @param {CommandInteraction} interaction
 *
 */
function command(interaction)
{

    const { AsyncWeather } = require('@cicciosgamino/openweather-apis')
    const weather = new AsyncWeather()
    weather.setLang('fr') 
    weather.setUnits('metric')
    weather.setApiKey(token_meteo)
    if (interaction.options.get("ville")) {
        const La_ville = interaction.options.get("ville").value
        weather.setCity(La_ville)
        weather.getTemperature()
        .then(result => console.log(`${typeof result} ${result}`))
        .catch(error => console.log(error))
        weather.getDescription()
        .then(result => console.log(`${typeof result} ${result}`))	
        .catch(error => console.log(error))           
    }

}
module.exports.meteo = command