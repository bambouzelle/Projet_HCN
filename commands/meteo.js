const {CommandInteraction} = require("discord.js")
import { AsyncWeather } from '@cicciosgamino/openweather-apis'
const weatherInstance = await new AsyncWeather()
const {token_meteo} = require ("../config.json")
const apiKey = require ('openweather-apis')(token_meteo)
/**
 *
 * @param {CommandInteraction} interaction
 *
 */
function command(interaction)
{
    weather.setLang('fr') 
    weather.setUnits('metric')
    if (interaction.options.get("La_ville")) {
        const La_ville = interaction.options.get("La_ville").value
        weather.setCity('la_ville')
        weather.getTemperature()
        .then(result => console.log(`${typeof result} ${result}`))
        .catch(error => console.log(error))
        weather.getDescription()
        .then(result => console.log(`${typeof result} ${result}`))	
        .catch(error => console.log(error))           
    }

}