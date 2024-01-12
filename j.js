
function changecouleur(){
   const couleurActuelle=document.body.style.backgroundColor

   if(couleurActuelle==="white"|| couleurActuelle === "" ){
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
}else{
    document.body.style.backgroundColor="white"
    document.body.style.color="red"

   }
    
}

function isPalindrome(str) {
    const check = str.replace(/ /g, "").toLowerCase();
    let low = 0;
    let high = check.length - 1;

    while (low < high) {
        if (check[low] !== check[high]) {
            return false;
        }
        low++;
        high--;
    }

    // Mettre le return true en dehors de la boucle
    return true;
}

function verifierPalindrom(button) {
    const paragraphe = button.previousElementSibling; // Accéder au paragraphe précédent
    const resultatParagraphe = button.nextElementSibling; // Accéder au paragraphe suivant pour afficher le résultat

    const str = paragraphe.textContent.trim();
    const isPalin = isPalindrome(str);

    resultatParagraphe.textContent = "Résultat : " + (isPalin ? "Palindrome" : "Pas un palindrome");
}


// array reverse
const arrayReverse=(arr)=>{
    let low=0
    let high=arr.length-1 // taille du tableau

    while(low<high){

     //destructuration
   [ arr[low] ,arr[high] ]=[ arr[high] , arr[low] ]
     low++
     high--
    }
    return arr
}
let seq=["r","e","m","i"]

console.log("arratreverse",arrayReverse(seq))


let reversedData; // Déclarez une variable globale pour stocker le tableau inversé
let isReversed = false; // Variable pour indiquer si le tableau a été inversé
fetch("json.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log("data", data);

    const array_reverse = document.getElementById('reverse_array');

    // Création de l'élément dans le DOM
    const htmlElement = `
      <p>donné json 1</p>
      <ul>
        <li>${data.array[0]}</li>
        <li>${data.array[1]}</li>
        <li>${data.array[2]}</li>
        <li>${data.array[3]}</li>
      </ul>
    `;

    // Insérer le contenu dans l'élément HTML
    array_reverse.innerHTML = htmlElement;

    // Cloner le tableau pour éviter de modifier l'original
    reversedData = [...data.array];
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données :', error);
  });

// Fonction appelée lors du clic sur le bouton
function revese_click() {
    if (!isReversed) { // Vérifier si le tableau n'a pas déjà été inversé
        const reverse_array = document.getElementById('array_reverse');
    
        // Utiliser la variable globale reversedData
        arrayReverse(reversedData);
    
        const htmlElement2 = `
          <p>renverser json</p>
          <ul>
            <li>${reversedData[0]}</li>
            <li>${reversedData[1]}</li>
            <li>${reversedData[2]}</li>
            <li>${reversedData[3]}</li>
          </ul>
        `;
    
        reverse_array.innerHTML = htmlElement2;
    
        isReversed = true; // Mettez à jour la variable pour indiquer que le tableau a été inversé
      }
    }





