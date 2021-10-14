const weather = require("openweather-apis");
const {CommandInteraction,MessageEmbed} = require("discord.js");


const {token_meteo} = require ("../config.json")

/**
 *
 * @param {CommandInteraction} interaction
 *
 */
function command(interaction)
{
    let La_ville,embed
    weather.setLang('fr') 
    weather.setUnits('metric')
    if (interaction.options.get("ville")) {
        La_ville = interaction.options.get("ville").value
        weather.setAPPID(token_meteo);
        weather.setCity(La_ville)
        weather.getSmartJSON(function (err,json) {
            if(err) console.log(err);
            embed = new MessageEmbed()
                .setColor("#0096FF2")
                .setTitle("Météo")
                .setURL("https://openweathermap.org/api")
                .setThumbnail(`attachment://sun.jfif`)
                .addField(`la Météo a ${La_ville}`, `est ${json['description']}`)
                .addField(`La Temperérature`, `est de ${json['temp']} °C`)
            console.log(json)
            interaction.reply({ embeds: [embed]})

        })

    }



}
module.exports.meteo = command