// variables creation
var affiche = [];
var Dos = "Dos.png";
var choix1 = 0;
var choix2 = 0;
var id = [];
var timer = 0;
var timed = 0;
var Temps = 0;
var Essais = 0;
var compteur = 0;
var clic = 0;
var minutes;
var secondes;
var imagesSauvegardees = [];
var Plus = 0;
var time = document.getElementById("chrono");
var jouer = document.getElementById("jouer");
var accueil = document.getElementById("accueil");
var jeu = document.getElementById("Jeu");
var chronometre = 0;


// Chronometer function
var chrono = function() {

    minutes = Math.floor(timer/60) % 60;
    secondes = timer % 60;

    timer++;
    if (secondes < 10 && secondes >= 0) {
        secondes = "0" + secondes;
    }
    if ( minutes < 10 && minutes >= 0){
        minutes = "0" + minutes;
    }
    time.innerHTML = "Temps " + " " + minutes + " : " + secondes ;
    chronometre = setTimeout(chrono,1000);
};


//Listen Start button and lunch the game.

jouer.addEventListener("click", function(){

    accueil.style.display = "none";
    jeu.style.display = "inherit";
    Essais = 0;
    document.getElementById("nbEssais").innerHTML = "Nombre d'essais : " + Essais;


    placement();
    chrono();
});

// Create Table and random choice img placement

function placement() {

     var images = ["BlackM.png" , "DragonBYB.jpg" , "DragonMill.png" , "DragonYR.png" , "MS.jpg" , "UltimateDBYB.png" , "BlackM.png" ,
        "DragonBYB.jpg" , "DragonMill.png" , "DragonYR.png" , "MS.jpg" , "UltimateDBYB.png"];

        affiche = [];

        imagesSauvegardees = images.slice();

    for (var i = images.length ; i > 0 ; i--) {
        var x = images.length - 1;
        var aleatoire = Math.round(Math.random() * x);
        var j = images[aleatoire];

        affiche.push(j);
        images.splice(aleatoire,1);
    }
}

// Listen "cards" & compare
document.getElementById("image0").addEventListener("click", function() {
    document.getElementById("image0").style.backgroundImage = "url(" + affiche[0] + ")";

    if (id.length <= 1) {
        id.push(0);
        clic++;

        if (choix1 === 0) {

            choix1 = affiche[0];
        }
        if (id.length === 2 && id[0] !== id[1] && clic === 2) {

            choix2 = affiche[0];
            compare();
            clic = 0;
        }
        if ( id[0] === id[1]) {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
        }
    }
    else
    {
        document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
        document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
        id = [];
        choix1 = 0;
        choix2 = 0;
    }
});

document.getElementById("image1").addEventListener("click", function() {

    document.getElementById("image1").style.backgroundImage = "url(" + affiche[1] + ")";

    if (id.length <= 1) {
        id.push(1);
        clic++;

        if (choix1 === 0) {

            choix1 = affiche[1];
        }
        if (id.length === 2 && id[0] !== id[1] && clic === 2) {

            choix2 = affiche[1];
            compare();
            clic = 0;
        }
        if ( id[0] === id[1]) {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
            clic = 0;
        }
    }
    else
    {
        document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
        document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
        id = [];
        choix1 = 0;
        choix2 = 0;
    }
});

document.getElementById("image2").addEventListener("click", function() {

    document.getElementById("image2").style.backgroundImage = "url(" + affiche[2] + ")";

    if (id.length <= 1) {
        id.push(2);
        clic++;

        if (choix1 === 0) {

            choix1 = affiche[2];
        }
        if (id.length === 2 && id[0] !== id[1] && clic === 2) {

            choix2 = affiche[2];
            compare();
            clic = 0;
        }
        if ( id[0] === id[1]) {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
            clic = 0;
        }
    }
    else
    {
        document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
        document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
        id = [];
        choix1 = 0;
        choix2 = 0;
    }
});

document.getElementById("image3").addEventListener("click", function() {

    document.getElementById("image3").style.backgroundImage = "url(" + affiche[3] + ")";

    if (id.length <= 1) {
        id.push(3);
        clic++;

        if (choix1 === 0) {

            choix1 = affiche[3];
        }
        if (id.length === 2 && id[0] !== id[1] && clic === 2) {

            choix2 = affiche[3];
            compare();
            clic = 0;
        }
        if ( id[0] === id[1]) {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
            clic = 0;
        }
    }
    else
    {
        document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
        document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
        id = [];
        choix1 = 0;
        choix2 = 0;
    }
});

document.getElementById("image4").addEventListener("click", function() {

    document.getElementById("image4").style.backgroundImage = "url(" + affiche[4] + ")";

    if (id.length <= 1) {
        id.push(4);
        clic++;

        if (choix1 === 0) {

            choix1 = affiche[4];
        }
        if (id.length === 2 && id[0] !== id[1] && clic === 2) {

            choix2 = affiche[4];
            compare();
            clic = 0;
        }
        if ( id[0] === id[1]) {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
            clic = 0;
        }
    }
    else
    {
        document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
        document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
        id = [];
        choix1 = 0;
        choix2 = 0;
    }
});

document.getElementById("image5").addEventListener("click", function() {

    document.getElementById("image5").style.backgroundImage = "url(" + affiche[5] + ")";


    if (id.length <= 1) {
        id.push(5);
        clic++;

        if (choix1 === 0) {

            choix1 = affiche[5];
        }
        if (id.length === 2 && id[0] !== id[1] && clic === 2) {

            choix2 = affiche[5];
            compare();
            clic = 0;
        }
        if ( id[0] === id[1]) {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
            clic = 0;
        }
    }
    else
    {
        document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
        document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
        id = [];
        choix1 = 0;
        choix2 = 0;
    }
});

document.getElementById("image6").addEventListener("click", function() {

    document.getElementById("image6").style.backgroundImage = "url(" + affiche[6] + ")";

    if (id.length <= 1) {
        id.push(6);
        clic++;

        if (choix1 === 0) {

            choix1 = affiche[6];
        }
        if (id.length === 2 && id[0] !== id[1] && clic === 2) {

            choix2 = affiche[6];
            compare();
            clic = 0;
        }
        if ( id[0] === id[1]) {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
            clic = 0;
        }
    }
    else
    {
        document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
        document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
        id = [];
        choix1 = 0;
        choix2 = 0;
    }
});

document.getElementById("image7").addEventListener("click", function() {

    document.getElementById("image7").style.backgroundImage = "url(" + affiche[7] + ")";

    if (id.length <= 1) {
        id.push(7);
        clic++;

        if (choix1 === 0) {

            choix1 = affiche[7];
        }
        if (id.length === 2 && id[0] !== id[1] && clic === 2) {

            choix2 = affiche[7];
            compare();
            clic = 0;
        }
        if ( id[0] === id[1]) {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
            clic = 0;
        }
    }
    else
    {
        document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
        document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
        id = [];
        choix1 = 0;
        choix2 = 0;
    }
});

document.getElementById("image8").addEventListener("click", function() {

    document.getElementById("image8").style.backgroundImage = "url(" + affiche[8] + ")";

    if (id.length <= 1) {
        id.push(8);
        clic++;

        if (choix1 === 0) {

            choix1 = affiche[8];
        }
        if (id.length === 2 && id[0] !== id[1] && clic === 2) {

            choix2 = affiche[8];
            compare();
            clic = 0;
        }
        if ( id[0] === id[1]) {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
            clic = 0;
        }
    }
    else
    {
        document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
        document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
        id = [];
        choix1 = 0;
        choix2 = 0;
    }
});

document.getElementById("image9").addEventListener("click", function() {

    document.getElementById("image9").style.backgroundImage = "url(" + affiche[9] + ")";

    if (id.length <= 1) {
        id.push(9);
        clic++;

        if (choix1 === 0) {

            choix1 = affiche[9];
        }
        if (id.length === 2 && id[0] !== id[1] && clic === 2) {

            choix2 = affiche[9];
            compare();
            clic = 0;
        }
        if ( id[0] === id[1]) {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
            clic = 0;
        }
    }
    else
    {
        document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
        document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
        id = [];
        choix1 = 0;
        choix2 = 0;
    }
});

document.getElementById("image10").addEventListener("click", function() {

    document.getElementById("image10").style.backgroundImage = "url(" + affiche[10] + ")";

    if (id.length <= 1) {
        id.push(10);
        clic++;

        if (choix1 === 0) {
            choix1 = affiche[10];
        }
        if (id.length === 2 && id[0] !== id[1] && clic === 2) {
            choix2 = affiche[10];
            compare();
            clic = 0;
        }
        if ( id[0] === id[1]) {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
            clic = 0;
        }
    }
    else
    {
        document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
        document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
        id = [];
        choix1 = 0;
        choix2 = 0;
    }
});

document.getElementById("image11").addEventListener("click", function() {

    document.getElementById("image11").style.backgroundImage = "url(" + affiche[11] + ")";

    if (id.length <= 1) {
        id.push(11);
        clic++;

        if (choix1 === 0 && id.length < 1) {

            choix1 = affiche[11];
        }
        if (id.length === 2 && id[0] !== id[1] && clic === 2) {

            choix2 = affiche[11];
            compare();
            clic = 0;
        }
        if ( id[0] === id[1]) {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
            clic = 0;
        }
    }
    else
    {
        document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
        document.getElementById("image" + id[1]).style.backgroundImage = "url(" + Dos + ")";
        id = [];
        choix1 = 0;
        choix2 = 0;
    }
});

// compare img
function compare() {

    Essais++;
    document.getElementById("nbEssais").innerHTML = "Nombre d'essais : " + Essais;
    console.log("id.length = " + id.length);
    console.log("Choix1 = " + choix1);
    console.log("Choix2 = " + choix2);
    if (choix1 !== choix2 && id.length === 2 && id[0] !== id[1]) {
        chronoCartes();
    }
    else
    {
        cacheImages();
    }
}

// timer display Cards & display True / False
function chronoCartes() {

        if (Temps <= 1 ) {
            Temps++;
            setTimeout(chronoCartes,1000);
        }
        else
        {
            document.getElementById("image"+id[0]).style.backgroundImage = "url(" + Dos + ")";
            document.getElementById("image"+id[1]).style.backgroundImage = "url(" + Dos + ")";
            clearTimeout(chronoCartes);
            id = []; choix1 = 0 ; choix2 = 0;
            Temps = 0;
        }

}

// Lunch CSS animation and hide them.
function cacheImages() {

    if (timed  <= 1) {

        if (timed  >= 0) {
            console.log("Contenu ID Animation" + id);
            document.getElementById("image" + id[0]).style.animationName = "fondu";
            document.getElementById("image" + id[0]).style.animationDuration = "3s";
            document.getElementById("image" + id[1]).style.animationName = "fondu";
            document.getElementById("image" + id[1]).style.animationDuration = "3s";

            setTimeout(cacheImages, 1000);
        }
        timed++;
    }
    else
    {
        document.getElementById("image" + id[0]).style.visibility = "hidden";
        document.getElementById("image" + id[1]).style.visibility = "hidden";
        console.log ("Valeur id: " + id);
        clearTimeout(cacheImages);
        timed = 0;
        id = []; choix1 = 0 ; choix2 = 0; compteur++;
        if (compteur === 6) {
            StopChrono();
        }
    }

}

// function to stop chronometer and lunch functions to reinitialise the game.
function StopChrono() {
    clearTimeout(chronometre);
    resulatTableau();
    RetourAccueil();
}

// function for create div in the "historique" div.
function resulatTableau() {

    var Tableau = document.getElementById("tableau");
    var ligneTableau = document.createElement("div");
    Tableau.appendChild(ligneTableau);
    ligneTableau.id = "identity" + Plus;
    document.getElementById("identity"+Plus).style.height = "20px";
    document.getElementById("identity"+Plus).style.fontSize = "1vm";
    document.getElementById("identity"+Plus).innerHTML = " Vos Essais : " + Essais + " --- " + "Votre temps : " + minutes + ":" + secondes ;
    Plus++;
}

//function to show again the accueil page & reset value of variables.
function RetourAccueil() {
    accueil.style.display = "inherit";
    jeu.style.display = "none";
    compteur = 0; minutes = 0; secondes = 0; chronometre = 0; timer = 0;

    for (var r = 0 ; r < imagesSauvegardees.length ; r++) {
        document.getElementById("image" + r).style.animationName = "";
        document.getElementById("image" + r).style.animationDuration = "";
        document.getElementById("image" + r).style.visibility = "visible";
        document.getElementById("image" + r).style.backgroundImage = "url(" + Dos + ")";
    }
}

var tempo = id.slice();