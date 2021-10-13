# Projet_HCN
*Made by Bambouzelle, MarthTK, Amaury et Megapoi2.*
```
  _____           _      _     _    _  _____ _   _ 
 |  __ \         (_)    | |   | |  | |/ ____| \ | | 
 | |__) | __ ___  _  ___| |_  | |__| | |    |  \| | 
 |  ___/ '__/ _ \| |/ _ \ __| |  __  | |    | . ` |
 | |   | | | (_) | |  __/ |_  | |  | | |____| |\  |
 |_|   |_|  \___/| |\___|\__| |_|  |_|\_____|_| \_|
                _/ |      ______                   
               |__/      |______|                  
```

## INTRODUCTION


  Le projet HCN est un bot discord open-source permettant l'affichage de gif et de la météo. 
Il a été réaliser lors d'un projet JS proposé pendant le cursus EPSI en deuxième année. 
Celui-ci a été entièrement réaliser en JS, avec l'utilisation des librairies : 
* Discord.js 
* OpenWeather-Apis 
* Giphy-Api 

## DEPLOIEMENT


  Si vous voulez ajouter le bot à votre serveur discord voici quelque instruction
  
1. Cliquez sur le lien ci-dessous pour inviter le bot : https://discord.com/api/oauth2/authorize?client_id=895217015499931649&permissions=517543947328&scope=bot%20applications.commands
    
2. Choisissez votre serveur, puis cliquez sur "Continuer".

3. Choisissez les permissions, il est recommandé de toutes les cocher pour le bon fonctionnement du bot.
  
4. Cliquez sur "Autoriser".

## INSTALLATION

### Prérequis 
* Node.js version 16.0 ou <
* Avoir un bot discord de crée (https://discord.com/developers/applications)

### Pour heberger le programme : 
1. Clonez le git dans le dossier vide que vous voulez
  ```bash
  $ git clone https://github.com/bambouzelle/Projet_HCN.git 
  ```
2. Installez les dépendances utilisées dans le projet (A faire dans le dossier où il y a le projet)
  ```bash
  $ npm install
  ```
3. Modifiez le fichier [config.json](/config.json) :
  * Pour le token du bot Discord
    - Allez sur {id_de_votre_bot}/bot
    - Récupérez le token de votre bot dans le [portail developpeur discord](https://discord.com/developers/applications) 
    - Le copier dans le fichier
      ```JSON
      "token": "Votre_Token"
      ```
  * Pour le token de l'API Giphy  
    - Allez sur https://developers.giphy.com/dashboard/
    - Récupérez le token de l'API
    - Le copier dans le fichier
      ```JSON
      "giphy_API_Key" : "Votre_Token"
      ```
  * Pour le token de l'API Météo
    - Allez sur https://home.openweathermap.org/api_keys
    - Récupérez le token de l'API
    - Le copier dans le fichier
      ```JSON
      "token_meteo" = "Votre_Token"
      ```
  
  
4. Lancez votre bot (A exécuter dans le dossier du bot) :
  ```bash
  $ node main.js
  ```
