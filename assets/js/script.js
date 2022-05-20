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

    2 victoires 6 parties
    x           100 parties 
*/




// Déclaration d'un tableau qui liste les armes disponibles pour l'ordinateur
const computerWeapons = ['rock', 'paper', 'scissors'];

// déclaration d'une variable quand il y a une victoire
let OneVictory;

// Déclaration des variables pour le compteur de victoires,  défaites et le pourcentage
let victoryCount = 0;
let defeatCount = 0;
let equalityCount = 0;
let percentageVictories = 0;

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

    // Si aucun des joueurs n'a plus de 5 victoires
    if ((victoryCount < 5) && (defeatCount < 5)) {
        // Déclaration des variables pour l'arme choisie par le joueur (donc qui a la class 'weaponSelected')
        const rockPlayer = $("#rockHand").hasClass("weaponSelectedStyle");
        const paperPlayer = $("#paperHand").hasClass("weaponSelectedStyle");
        const scissorsPlayer = $("#scissorsHand").hasClass("weaponSelectedStyle");

        // Choix aléatoire une arme dans le tableau pour l'ordinateur
        let randomWeapon = computerWeapons[Math.floor(Math.random() * computerWeapons.length)]

        // Comparaison des armes du joueur et de l'ordinateur
        // Si pas d'arme sélectionnée par le joueur
        if ((rockPlayer === false) && (paperPlayer === false) && (scissorsPlayer === false)) {
            $(".displayWinner p").replaceWith("<p>Select a weapon first</p>");
        }
        // Si armes similaires, égalité
        else if (((rockPlayer === true) && (randomWeapon === 'rock')) || ((paperPlayer === true) && (randomWeapon === 'paper')) || ((scissorsPlayer === true) && (randomWeapon === 'scissors'))) {
            $(".displayWinner p").replaceWith("<p>No winner</p>");
            // Mario reste ou se remet en position neutre
            $("#marioStanding").attr('src', 'assets/img/marioStanding.png');
            // On incrémente le nombre de parties à égalité
            equalityCount++;
            // Calcul et affichage du pourcentage de victoire
            percentageVictories = (victoryCount * 100 / (victoryCount + defeatCount + equalityCount)).toFixed(0)
            $(".averageVictories").replaceWith("<p class='averageVictories'>" + percentageVictories + " " + "%</p>")

        }
        // Si arme du joueur plus faible, défaite
        else if (((rockPlayer === true) && (randomWeapon === 'paper')) || ((paperPlayer === true) && (randomWeapon === 'scissors')) || ((scissorsPlayer === true) && (randomWeapon === 'rock'))) {
            $(".displayWinner p").replaceWith("<p>Bowser wins</p>");
            // Mario reste ou se remet en position neutre
            $("#marioStanding").attr('src', 'assets/img/marioLooser.png');
            // On incrémente le nombre de défaites et on l'affiche
            defeatCount++;
            $(".numberOfDefeats").replaceWith("<p class='numberOfDefeats'>" + defeatCount + "</p>");
            // Calcul et affichage du pourcentage de victoire
            percentageVictories = (victoryCount * 100 / (victoryCount + defeatCount + equalityCount)).toFixed(0)
            $(".averageVictories").replaceWith("<p class='averageVictories'>" + percentageVictories + " " + "%</p>")

        }
        // Sinon, victoire
        else {
            $(".displayWinner p").replaceWith("<p>Mario wins</p>");
            // Mario se met en position de victoire
            $("#marioStanding").attr('src', 'assets/img/marioWinner.png');
            // On incrémente le nombre de victoires et on l'affiche
            victoryCount++;
            $(".numberOfVictories").replaceWith("<p class='numberOfVictories'>" + victoryCount + "</p>");
            // Calcul et affichage du pourcentage de victoire
            percentageVictories = (victoryCount * 100 / (victoryCount + defeatCount + equalityCount)).toFixed(0)
            $(".averageVictories").replaceWith("<p class='averageVictories'>" + percentageVictories + " " + "%</p>")

        }


        // Affichage des choix d'armes 
        // Pour Mario
        if (rockPlayer === true) {
            $("#marioSelectedWeapon").attr('src', 'assets/img/rockHand2.png').show(0);
        }
        else if (paperPlayer === true) {
            $("#marioSelectedWeapon").attr('src', 'assets/img/paperHand2.png').show(0);
        }
        else if (scissorsPlayer === true) {
            $("#marioSelectedWeapon").attr('src', 'assets/img/scissorsHand2.png').show(0);
        }
        else { }

        // Pour Bowser
        if (randomWeapon === 'rock') {
            $("#bowserSelectedWeapon").attr('src', 'assets/img/rockHand2.png').show(0);
        }
        else if (randomWeapon === 'paper') {
            $("#bowserSelectedWeapon").attr('src', 'assets/img/paperHand2.png').show(0);
        }
        else if (randomWeapon === 'scissors') {
            $("#bowserSelectedWeapon").attr('src', 'assets/img/scissorsHand2.png').show(0);
        }
    }


    // Affichage de quel joueur est le gagnant final
    else {
        $(".displayWinOrLoose").show(200)

        // Si Mario gagne
        if (victoryCount > defeatCount) {
            $(".winnerName").replaceWith("<p class='winnerName'>" + "1." + " " + "Mario" + "</p>");
            $(".looserName").replaceWith("<p class='looserName'>" + "2." + " " + "Bowser" + "</p>");
            $(".winnerTotalNumberOfVictories").replaceWith("<p class='winnerTotalNumberOfVictories'>" + victoryCount + "</p>");
            $(".looserTotalNumberOfVictories").replaceWith("<p class='looserTotalNumberOfVictories'>" + defeatCount + "</p>");
            $(".winnerTotalNumberOfDefeats").replaceWith("<p class='winnerTotalNumberOfDefeats'>" + defeatCount + "</p>");
            $(".looserTotalNumberOfDefeats").replaceWith("<p class='looserTotalNumberOfDefeats'>" + victoryCount + "</p>");
        }
        // Si Bowser gagne
        else {
            $(".winnerName").replaceWith("<p class='winnerName'>" + "1." + " " + "Bowser" + "</p>");
            $(".looserName").replaceWith("<p class='looserName'>" + "2." + " " + "Mario" + "</p>");
            $(".winnerTotalNumberOfVictories").replaceWith("<p class='winnerTotalNumberOfVictories'>" + defeatCount + "</p>");
            $(".looserTotalNumberOfVictories").replaceWith("<p class='looserTotalNumberOfVictories'>" + victoryCount + "</p>");
            $(".winnerTotalNumberOfDefeats").replaceWith("<p class='winnerTotalNumberOfDefeats'>" + victoryCount + "</p>");
            $(".looserTotalNumberOfDefeats").replaceWith("<p class='looserTotalNumberOfDefeats'>" + defeatCount + "</p>");
        }
        $(".replayButton").on('click', () => {
            // Remise à 0 des victoires
            victoryCount = 0;
            $(".numberOfVictories").replaceWith("<p class='numberOfVictories'>" + victoryCount + "</p>");
            // Remise à 0 des défaites
            defeatCount = 0;
            $(".numberOfDefeats").replaceWith("<p class='numberOfDefeats'>" + defeatCount + "</p>");
            // Remise à 2 du pourcentage
            // REINITIALISATION DU POURCENTAGE NE FONCTIONNE PAS 
            percentageVictories = 0;
            $(".averageVictories").replaceWith("<p class='averageVictories'>" + percentageVictories + " " + "%</p>");
            // Fermeture de l'affichage du gagnant final
            $(".displayWinOrLoose").hide(200);
        })
    }

})





// Au survol des deux barres, une pièce apparait
$(".coinPoping1").on('mouseover', () => {
    $("#yellowCoin1").show(400);
})
$(".coinPoping1").on('mouseout', () => {
    $("#yellowCoin1").hide(400);
})
$(".coinPoping2").on('mouseover', () => {
    $("#yellowCoin2").show(400);
})
$(".coinPoping2").on('mouseout', () => {
    $("#yellowCoin2").hide(400);
})





