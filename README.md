# Tank Conqueror

##  Presentation du Projet:

Tank Conqueror est un jeu web à la manière de la bataille navale, qui peut se jouer en solo contre une IA avec plusieurs niveaux de difficultés, ou en multijoueurs local et en ligne.


## Objectif:

Ici deux joueurs doivent détruire les tanks de l'adversaire. 
Le gagnant est celui qui parvient à détruire tous les véhicules de l'adversaire. Une grille est composé d’un convoi de tanks qui prend 5*2 cases, d’un tank de 4 cases, 3 tanks de 2 cases, et 3 tanks de 1 cases, deux tanks ne peuvent pas être collés l’un à l’autre. Si un des joueurs arrive à toucher un tank il a une tentative de plus.Le placement des tanks en début de partie est automatique et aléatoire.
* ### Mode Solo :

    * Dans le mode solo vous jouerez contre un IA avec une possibilité de choisir plusieurs niveaux d’IA.


### Fonctionnalités :

* Menu interactif avec choix de mode:
    * Solo
    * Multijoueurs
    * Tutoriel
* Choix de différentes cartes sur lesquelles jouer:
    * Montagne
    * Desert
    * Ville
* Différents skins/apparences pour les chars:
    * Bleu
    * Vert
    * Marron
* Pour l’IA :
    * Un niveau de difficulté simple
    * Un niveau de difficulté moyen
    * Un niveau de difficulté difficile


## Technologies utilisés : 
    
* Github
* Docker
* JavaScript
* React
* Tailwind
* Next.js


## Delais:
 -> 2 à 3 semaines

## Contrainte : 

* Langage côté serveur : Js
* Langage côté front : Html, Css

---
## Installation et lancement: 

- ### Depuis le code source:

    ```
    git pull https://github.com/TomJegou/TANK-CONQUEROR.git
    ```
    ```
    cd TANK-CONQUEROR
    ```
    ```
    npm ci
    ```
    - ### Avec node:
        ```
        npm run build
        ```
        ```
        npm run start
        ```
    - ### Avec Docker Compose:
        - Pour build l'image: 
            ``` 
            docker compose build 
            ```
            
        ```
        docker compose up -d
        ```
- ### Depuis Docker
    ```
    docker pull tomyj/tank-conqueror
    ```
    ```
    docker run -p 80:80 tomyj/tank-conqueror
    ```
## Utilisation:

- Une fois lancé, ouvrez votre navigateur favori et rendez-vous à l'adresse suivante: ```http://localhost```

 ![](https://brand.ynov.com/img/logos/ynov_campus/logo_ynov_campus.svg)
[Tom Jegou](https://github.com/TomJegou) & [Louis Rouxelin](https://github.com/L0uxe)