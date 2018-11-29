var affiche = [];
var Dos = "Dos.png";
var choix1 = 0;
var choix2 = 0;
var id = [];
var timer = 0;
var timed = 0;
var Temps = 0;
var Essais = 0;
var cartesvues = [];

var time = document.getElementById("chrono");
var jouer = document.getElementById("jouer");
var accueil = document.getElementById("accueil");
var jeu = document.getElementById("Jeu");
var chronometre = 0;


// Chronometer function
function chrono() {

    var minutes = Math.floor(timer/60) % 60;
    var secondes = timer % 60;

    timer++;
    if (secondes < 10 && secondes >= 0) {
        secondes = "0" + secondes;
    }
    if ( minutes < 10 && minutes >= 0){
        minutes = "0" + minutes;
    }
    time.innerHTML = "Temps " + " " + minutes + " : " + secondes ;
    chronometre = setTimeout(chrono,1000);
}


//Listen Start button and lunch the game.

jouer.addEventListener("click", function(){

    accueil.style.display = "none";
    jeu.style.display = "inherit";

    placement();
    chrono();
});

// Create Table and random choice img placement

function placement() {
    var images = ["BlackM.png" , "DragonBYB.jpg" , "DragonMill.png" , "DragonYR.png" , "MS.jpg" , "UltimateDBYB.png" , "BlackM.png" ,
        "DragonBYB.jpg" , "DragonMill.png" , "DragonYR.png" , "MS.jpg" , "UltimateDBYB.png"];
    affiche = [];

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
    id.push(0);
    console.log(id);
    if (choix1 === 0) {
        choix1 = affiche[0];
    }
    else {
        if (id[0] !== id[1]) {
            choix2 = affiche[0];
            compare();
        }
        else {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
        }
    }
});

document.getElementById("image1").addEventListener("click", function() {
    document.getElementById("image1").style.backgroundImage = "url(" + affiche[1] + ")";
    id.push(1);
    console.log(id);
    if (choix1 === 0) {
        choix1 = affiche[1];
    }
    else {
        if (id[0] !== id[1]) {
            choix2 = affiche[1];
            compare();
        }
        else {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
        }
    }
});

document.getElementById("image2").addEventListener("click", function() {
    document.getElementById("image2").style.backgroundImage = "url(" + affiche[2] + ")";
    id.push(2);
    console.log(id);
    if (choix1 === 0) {
        choix1 = affiche[2];
    }
    else {
        if (id[0] !== id[1]) {
            choix2 = affiche[2];
            compare();
        }
        else {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
        }
    }
});

document.getElementById("image3").addEventListener("click", function() {
    document.getElementById("image3").style.backgroundImage = "url(" + affiche[3] + ")";
    id.push(3);
    console.log(id);
    if (choix1 === 0) {
        choix1 = affiche[3];
    }
    else {
        if (id[0] !== id[1]) {
            choix2 = affiche[3];
            compare();
        }
        else {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
        }
    }
});

document.getElementById("image4").addEventListener("click", function() {
    document.getElementById("image4").style.backgroundImage = "url(" + affiche[4] + ")";
    id.push(4);
    console.log(id);
    if (choix1 === 0) {
        choix1 = affiche[4];
    }
    else {
        if (id[0] !== id[1]) {
            choix2 = affiche[4];
            compare();
        }
        else {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
        }
    }
});

document.getElementById("image5").addEventListener("click", function() {
    document.getElementById("image5").style.backgroundImage = "url(" + affiche[5] + ")";
    id.push(5);
    if (choix1 === 0) {
        choix1 = affiche[5];
    }
    else {
        if (id[0] !== id[1]) {
            choix2 = affiche[5];
            compare();
        }
        else {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
        }
    }
});

document.getElementById("image6").addEventListener("click", function() {
    document.getElementById("image6").style.backgroundImage = "url(" + affiche[6] + ")";
    id.push(6);
    if (choix1 === 0) {
        choix1 = affiche[6];
    }
    else {
        if (id[0] !== id[1]) {
            choix2 = affiche[6];
            compare();
        }
        else {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
        }
    }
});

document.getElementById("image7").addEventListener("click", function() {
    document.getElementById("image7").style.backgroundImage = "url(" + affiche[7] + ")";
    id.push(7);
    if (choix1 === 0) {
        choix1 = affiche[7];
    }
    else {
        if (id[0] !== id[1]) {
            choix2 = affiche[7];
            compare();
        }
        else {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
        }
    }
});

document.getElementById("image8").addEventListener("click", function() {
    document.getElementById("image8").style.backgroundImage = "url(" + affiche[8] + ")";
    id.push(8);
    if (choix1 === 0) {
        choix1 = affiche[8];
    }
    else {
        if (id[0] !== id[1]) {
            choix2 = affiche[8];
            compare();
        }
        else {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
        }
    }
});

document.getElementById("image9").addEventListener("click", function() {
    document.getElementById("image9").style.backgroundImage = "url(" + affiche[9] + ")";
    id.push(9);

    if (choix1 === 0) {
        choix1 = affiche[9];
    }
    else {
        if (id[0] !== id[1]) {
            choix2 = affiche[9];
            compare();
        }
        else {
            document.getElementById("image" + id[0]).style.backgroundImage = "url(" + Dos + ")";
            id = [];
            choix1 = 0;
            choix2 = 0;
        }
    }
});

document.getElementById("image10").addEventListener("click", function() {
    document.getElementById("image10").style.backgroundImage = "url(" + affiche[10] + ")";
    id.push(10);
    if (choix1 === 0) {
        choix1 = affiche[10];
    }
    else {
        if (id[0] !== id[1]) {
            choix2 = affiche[10];
            compare();
        }
        else {  document.getElementById("image"+id[0]).style.backgroundImage = "url(" + Dos + ")";
        id = []; choix1 = 0; choix2 = 0;
        }
    }
});

document.getElementById("image11").addEventListener("click", function() {
    document.getElementById("image11").style.backgroundImage = "url(" + affiche[11] + ")";
    id.push(11);
    if (choix1 === 0) {
        choix1 = affiche[11];
    }
    else {
        if (id[0] !== id[1]) {
        choix2 = affiche[11];
        compare();
    }
        else {  document.getElementById("image"+id[0]).style.backgroundImage = "url(" + Dos + ")";
        id = []; choix1 = 0; choix2 = 0;
        }
    }
});


// compare img
function compare() {
    Essais++;
    console.log("Nb Essai = " + Essais);
    document.getElementById("nbEssais").innerHTML = "Nombre d'essais : " + Essais;
    if (choix1 !== choix2 && id !== "") {
        chronoCartes();
    }
    else {
        cacheImages();
    }
}

// timer display Cards & display True / False
function chronoCartes() {
    if (Temps <= 1) {
        Temps++;
        setTimeout(chronoCartes,1000);
        console.log("Temps =" + Temps);
    }
    else {
        document.getElementById("image"+id[0]).style.backgroundImage = "url(" + Dos + ")";
        document.getElementById("image"+id[1]).style.backgroundImage = "url(" + Dos + ")";
        console.log("Temps =" + Temps);
        clearTimeout(chronoCartes);
        id = []; choix1 = 0 ; choix2 = 0;
        Temps = 0;
    }
}

function cacheImages() {

    if (timed  <= 1) {

        if (timed <= 1) {
            console.log("Contenu ID Animation" + id);
            document.getElementById("image" + id[0]).style.animationName = "fondu";
            document.getElementById("image" + id[0]).style.animationDuration = "1s";
            document.getElementById("image" + id[1]).style.animationName = "fondu";
            document.getElementById("image" + id[1]).style.animationDuration = "1s";
            setTimeout(cacheImages, 1000);
        }
        console.log("timed = " + timed);
        document.getElementById("image" + id[0]).style.opacity = "0";
        document.getElementById("image" + id[1]).style.opacity = "0";
        timed++;
    }
    else
    {
        console.log ("Valeur id: " + id);
        clearTimeout(cacheImages);
        timed = 0;
        id = []; choix1 = 0 ; choix2 = 0;
    }
}

//id = []; choix1 = 0 ; choix2 = 0;
