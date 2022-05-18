/*
-> Le joueur choisi une arme 
    1- Indiquer visuellement quelle arme est choisie

-> Le joueur clique sur le bouton
    1- Récupérer l'arme choisie par le joueur
    2- Générer aléatoirement une arme pour l'ordinateur
    3- Comparer les deux armes pour déterminer le gagnant
            joueur pierre / ordi pierre = égalité
            joueur feuille / ordi feuille = égalité
            joueur ciseaux / ordi ciseaux = égalité

            joueur pierre / ordi feuille = défaite
            joueur feuille / ordi ciseaux = défaite
            joueur ciseaux / ordi pierre = défaite

            joueur pierre / ordi ciseaux = victoire
            joueur feuille / ordi pierre = victoire
            joueur ciseaux / ordi feuille = victoire
    4- Afficher le résultat aléatoire de l'arme de l'ordinateur
    5- Afficher le résultat du jeu : victoire, défaite, égalité
*/

// Au click sur une des armes, une class 'weaponSelected' affichant une border est ajoutée à cette arme et retirée des autres armes
$("#rockHand").on('click', () => {
    $("#rockHand").addClass("weaponSelectedStyle");
    $("#paperHand").removeClass("weaponSelectedStyle");
    $("#scissorsHand").removeClass("weaponSelectedStyle");
})

$("#paperHand").on('click', () => {
    $("#paperHand").addClass("weaponSelectedStyle");
    $("#rockHand").removeClass("weaponSelectedStyle");
    $("#scissorsHand").removeClass("weaponSelectedStyle");
})

$("#scissorsHand").on('click', () => {
    $("#scissorsHand").addClass("weaponSelectedStyle");
    $("#rockHand").removeClass("weaponSelectedStyle");
    $("#paperHand").removeClass("weaponSelectedStyle");
})

// Au clic sur le bouton de jeu,
$("#fightButton").on('click', () => {
    // Déclaration des variables pour l'arme choisie par le joueur (donc qui a la class 'weaponSelected')
    const rockPlayer = $("#rockHand").hasClass("weaponSelectedStyle");
    const paperPlayer = $("#paperHand").hasClass("weaponSelectedStyle");
    const scissorsPlayer = $("#scissorsHand").hasClass("weaponSelectedStyle");
    
    // Déclaration d'un tableau qui liste les armes disponibles pour l'ordinateur
    const computerWeapons = ['rock', 'paper', 'scissors'];
    // Choix aléatoire une arme dans le tableau pour l'ordinateur
    let randomWeapon = computerWeapons[Math.floor(Math.random() * computerWeapons.length)]
    $("#displayRandomWeapon p").replaceWith("<p>L'ordinateur a choisi : " + "" + randomWeapon + "</p>");

    // Comparaison des armes du joueur et de l'ordinateur
    // Si armes similaires, égalité
    if (((rockPlayer === true) && (randomWeapon === 'rock')) || ((paperPlayer === true) && (randomWeapon === 'paper')) || ((scissorsPlayer=== true) && (randomWeapon === 'scissors'))) {
        $("#displayResult p").replaceWith("<p>Vous êtes à égalité !</p>");
    }
    // Si arme du joueur plus faible, défaite
    else if (((rockPlayer === true) && (randomWeapon === 'paper')) || ((paperPlayer === true) && (randomWeapon === 'scissors')) || ((scissorsPlayer === true) && (randomWeapon === 'rock'))) {
        $("#displayResult p").replaceWith("<p>Vous avez perdu !</p>");
    }
    // Sinon, victoire
    else {
        $("#displayResult p").replaceWith("<p>Vous avez gagné !</p>");
    }
})

// Au survol du bouton, 
$("#fightButton").on('mouseover', () => {
    $("#yellowCoin").show(400);
})
$("#fightButton").on('mouseout', () => {
    $("#yellowCoin").hide(400);
})

