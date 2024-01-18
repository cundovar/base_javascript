const button=document.querySelector("#but")
const overlay= document.querySelector('.overlay')


function darken() {
 

// Toggle entre les classes "light" et "dark" sur le bouton
button.classList.toggle('light');
button.classList.toggle('dark');

overlay.classList.toggle('overlay-bg');


if(button.classList.contains('light')){
    button.textContent="light"
}else{
    button.textContent='dark'
}
}
const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');

// Boucle pour itérer sur les cinq images
for (let i = 1; i <= 5; i++) {
    // Création d'un nouvel élément img
    const newImage = document.createElement('img');

    // Définition de l'attribut src avec le chemin de l'image
    newImage.src = 'images/pic' + i + '.jpg';

    // Ajout d'un gestionnaire d'événements onclick à chaque nouvelle image
    newImage.onclick = function(event) {
        // Récupération de la valeur de l'attribut src de l'image cliquée
        const srcValue = event.target.getAttribute('src');

        // Appel de la fonction pour changer l'image affichée
        changeDisplayedImg(srcValue);
    };

    // Ajout de l'élément img à thumbBar
    thumbBar.appendChild(newImage);
}

// Fonction pour changer l'image affichée
function changeDisplayedImg(srcValue) {
    // Définition de la valeur de l'attribut src de displayed-img à la valeur fournie
    displayedImg.src = srcValue;
}


const clikToMe=document.querySelector('.btn')
let isBlack=false


clikToMe.onclick=function(){
if(isBlack){
    
    overlay.classList.remove('overlay-bg')
    clikToMe.textContent='lumière'
}else{
    
    overlay.classList.add('overlay-bg')
    clikToMe.textContent='nuit'
}
isBlack = !isBlack;
}

