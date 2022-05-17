/*
-> Le joueur choisi une arme 
    1- Indiquer visuellement quelle arme est choisie

-> Le joueur clique sur le bouton
    1- Récupérer l'arme choisie par le joueur
    2- Générer aléatoirement une arme pour l'ordinateur
    3- Comparer les deux armes 
    4- Déterminer qui est le gagnant
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
    const weaponSelected = $('li').hasClass("weaponSelectedStyle");
    console.log(weaponSelected);

    // Déclaration d'un tableau pour les armes de l'ordinateur
    const computerWeapons = ['rock', 'paper', 'scissors'];
    // Choix aléatoire une arme dans le tableau pour l'ordinateur
    let randomWeapon = computerWeapons[Math.floor(Math.random()*computerWeapons.length)]
    console.log(randomWeapon);

    // Comparaison des armes 
})
