/* ===================================================
===================================================
DEPLACEMENTS DE MARIO
===================================================
======================================================*/

// On défini les variables pour faire bouger Mario et son arme
const rightArrow = 39;
const leftArrow = 37;
let distance = 0;
// On créer deux fonctions qui permettent de déplacer Mario à droite et à gauche
moveMarioRight = () => {
    let marioMoving = document.getElementById('marioStanding');
    distance++;
    marioMoving.style.left = ((0.5 * distance) + "rem");
}
moveMarioLeft = () => {
    let marioMoving = document.getElementById('marioStanding');
    distance--;
    marioMoving.style.left = ((0.5 * distance) + "rem");
}
// On assigne le déplacement à droite à la flèche droite, pareil pour la gauche
moveSelection = (evt) => {
    switch (evt.keyCode) {
        case rightArrow:
            moveMarioRight();
            getTheStyle();
            break;
        case leftArrow:
            moveMarioLeft();
            getTheStyle();
        default:
            break;
    }
}
// On créé un évènment d'appui sur une touche pour déclencher la fonction de mouvement
window.addEventListener('keydown', moveSelection)

/* ===================================================
===================================================
JEU DU SHIFUMI
===================================================
======================================================*/

// Déclaration d'un tableau qui liste les armes disponibles pour l'ordinateur
const computerWeapons = ['rock', 'paper', 'scissors'];

// Déclaration des variables pour le compteur de victoires,  défaites et le pourcentage
let victoryCount = 0;
let defeatCount = 0;
let equalityCount = 0;
let percentageVictories = 0;

// Au click sur une des armes, une class 'weaponSelected' affichant une border
// est ajoutée à cette arme et retirée des autres armes
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


// On créé une fonction qui permet d'initialiser la partie
startGame = () => {
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
        // Mario se met en position de défaite
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
        $("#marioSelectedWeapon").attr('src', 'assets/img/rockHandMini.png').show(0);
    }
    else if (paperPlayer === true) {
        $("#marioSelectedWeapon").attr('src', 'assets/img/paperHandMini.png').show(0);
    }
    else if (scissorsPlayer === true) {
        $("#marioSelectedWeapon").attr('src', 'assets/img/scissorsHandMini.png').show(0);
    }
    else { }

    // Pour Bowser
    if (randomWeapon === 'rock') {
        $("#bowserSelectedWeapon").attr('src', 'assets/img/rockHandMini2.png').show(0);
    }
    else if (randomWeapon === 'paper') {
        $("#bowserSelectedWeapon").attr('src', 'assets/img/paperHandMini2.png').show(0);
    }
    else if (randomWeapon === 'scissors') {
        $("#bowserSelectedWeapon").attr('src', 'assets/img/scissorsHandMini2.png').show(0);
    }
}

// On créé une fonction qui permet de mettre fin à la partie
endGame = () => {
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
        window.location.reload()
    })
}


// Au click sur le bouton de jeu,
$("#fightButton").on('click', () => {
    // Si le nombre de points de chauqe côté est inférieur à 5, continuer la partie
    if ((victoryCount < 5) && (defeatCount < 5)) {
        startGame();
    }
    // Sinon, mettre fin à la partie
    else {
        endGame();
    }
})


/* ===================================================
===================================================
DETAILS
===================================================
======================================================*/

// Au survol de la barre vide à droite du bouton, une pièce apparait
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

// Au survol des étoiles, elles tournent sur elles-mêmes
$(".rotatingStar").on('mouseover', () => {
    $(".rotatingStar").addClass("rotate-vert-center");
})
$(".rotatingStar").on('mouseout', () => {
    $(".rotatingStar").removeClass("rotate-vert-center");
})








