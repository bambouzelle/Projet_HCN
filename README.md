# Projet_HCN
Made by Bambouzelle, MarthTK, Amaury et Megapoi2.
<br>
<pre>
  _____           _      _     _    _  _____ _   _ 
 |  __ \         (_)    | |   | |  | |/ ____| \ | | 
 | |__) | __ ___  _  ___| |_  | |__| | |    |  \| | 
 |  ___/ '__/ _ \| |/ _ \ __| |  __  | |    | . ` |
 | |   | | | (_) | |  __/ |_  | |  | | |____| |\  |
 |_|   |_|  \___/| |\___|\__| |_|  |_|\_____|_| \_|
                _/ |      ______                   
               |__/      |______|                  
</pre>
<br>
<div>INTRODUCTION </div>
<br>
<div>
Le projet HCN est un bot discord open-source permettant l'affichage de gif et de la météo. <br>
Il a été réaliser lors d'un projet JS proposé pendant le cursus EPSI en deuxième année. <br>
Celui-ci à été entièrement réaliser en JS, avec l'utilisation des librairies : Discord.js, OpenWeather-Apis et Giphy-Api <br>
</div>
<hr>
<div>DEPLOIEMENT</div>
<br>
<div>
  Si vous voulez ajouter le bot à votre serveur discord : <br>
  
    -Cliquez sur le lien ci-dessous : https://discord.com/api/oauth2/authorize?client_id=895217015499931649&permissions=517543947328&scope=bot%20applications.commands .
    
    -Choisissez votre serveur, puis cliquez sur "Continuer".

    -Choisissez les permissions, il est recommandé de toutes les cochés pour le bon fonctionnement du bot.
  
    -Cliquez sur "Autoriser".
</div>

<br>
<hr>
<div>INSTALLATION</div>
<br>
<div>
Prérequis : Node.js version 16.0 ou <, avoir un bot discord de crée. 
</div>
<div>
  Si vous voulez heberger le programme : <br>
  <br>
  Clonez le git dans le dossier vide que vous voulez : <br>
  
  
  ```bash
  $ git clone https://github.com/bambouzelle/Projet_HCN.git 
  ```
  <br>
  Installer les dépendances utilisés dans le projet (A faire dans le dossier où il y a le projet) :
  
  
  ```bash
  $ npm install
  ```
  <br>
  
  Modifiez le fichier "config.json" :
  
  -Pour le token du bot
  
  ```JSON
    - Allez sur https://discord.com/developers/applications/{id_de_votre_bot}/bot
  
    - Récuperez le token de votre bot
  
    -Le copier dans "token": "Votre_Token"
  ```
  
  -Pour le token de l'API Giphy
  
    
      -Allez sur https://developers.giphy.com/dashboard/
  
      -Récuperez le token de l'API
  
      -Le copier dans "giphy_API_Key" : "Votre_Token"

  -Pour le token de l'API Météo
  
      
      -Allez sur https://home.openweathermap.org/api_keys
  
      -Récuperez le token de l'API
  
      -Le copier dans "token_meteo" = "Votre_Token"
  
  
  Lancez votre bot avec (A faire dans le dossier du bot) :
  
  ```bash
  $ node main.js
  ```
  
  </div>

