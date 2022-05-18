/*
-> Le joueur choisi une arme 
    1- Indiquer visuellement quelle arme est choisie

-> Le joueur clique sur le bouton
    1- Récupérer l'arme choisie par le joueur
    2- Générer aléatoirement une arme pour l'ordinateur
    3- Comparer les deux armes pour déterminer le gagnat
            joueur pierre / ordi pierre = égalité
            joueur feuille / ordi feuille = égalité
            joueur ciseaux / ordi ciseaux = égalité

            joueur pierre / ordi feuille = défaite
            joueur feuille / ordi ciseaux = défaite
            joueur ciseaux / ordi pierre = défaite

            joueur pierre / ordi ciseaux = victoire
            joueur feuille / ordi pierre = victoire
            joueur ciseaux / ordi feuille = victoire

    5- Afficher le résultat
*/

// Déclaration des variables pour les armes du joueur
const rockPlayer = $("#rockHand");
const paperPlayer = $("#paperHand");
const scissorsPlayer = $("#scissorsHand");

// Au click sur une des armes, une class 'weaponSelected' affichant une border est ajoutée à cette arme et retirée des autres armes
rockPlayer.on('click', () => {
    rockPlayer.addClass("weaponSelectedStyle");
    paperPlayer.removeClass("weaponSelectedStyle");
    scissorsPlayer.removeClass("weaponSelectedStyle");
})

paperPlayer.on('click', () => {
    paperPlayer.addClass("weaponSelectedStyle");
    rockPlayer.removeClass("weaponSelectedStyle");
    scissorsPlayer.removeClass("weaponSelectedStyle");
})

scissorsPlayer.on('click', () => {
    scissorsPlayer.addClass("weaponSelectedStyle");
    rockPlayer.removeClass("weaponSelectedStyle");
    paperPlayer.removeClass("weaponSelectedStyle");
})

// Au clic sur le bouton de jeu, on récupère l'élément qui a la class 'weaponSelected'
$("#fightButton").on('click', () => {
    let playerWeapon = $('li.weaponSelectedStyle');
    console.log(playerWeapon);

    // Déclaration d'un tableau pour les armes de l'ordinateur
    const computerWeapons = ['rock', 'paper', 'scissors'];
    // Choix aléatoire une arme dans le tableau pour l'ordinateur
    let randomWeapon = computerWeapons[Math.floor(Math.random() * computerWeapons.length)]
    console.log(randomWeapon);

    // Comparaison des armes 
    // Si arme similaire, égalité
    if ((($("#rockHand").hasClass("weaponSelectedStyle")) && (randomWeapon === 'rock')) || (($("#paperHand").hasClass("weaponSelectedStyle")) && (randomWeapon === 'paper')) || (($("#scissorsHand").hasClass("weaponSelectedStyle")) && (randomWeapon === 'scissors'))) {
        console.log('égalité');
    }
    else if ((($("#rockHand").hasClass("weaponSelectedStyle")) && (randomWeapon === 'paper')) || (($("#paperHand").hasClass("weaponSelectedStyle")) && (randomWeapon === 'scissors')) || (($("#scissorsHand").hasClass("weaponSelectedStyle")) && (randomWeapon === 'rock'))) {
        console.log('défaite');
    }
})
