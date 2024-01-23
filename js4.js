const input = document.querySelector('.numberInput');
const para = document.querySelector('p');


function carre(nombre) {
    return nombre * nombre;
  }
  
  function cube(nombre) {
    return nombre * nombre * nombre;
  }
  
  function factorielle(nombre) {
    if (nombre < 0) return undefined;
    if (nombre === 0) return 1;
    let x = nombre - 1;
    while (x > 1) {
      nombre *= x;
      x--;
    }
    return nombre;
  }

  input.addEventListener("change", () => {
    const nombre = parseFloat(input.value);
    if (isNaN(nombre)) {
      para.textContent = "Vous devez saisir un nombre.";
    } else {
      para.textContent = `Le carré de ${nombre} vaut ${carre(nombre)}. `;
      para.textContent += `Le cube de ${nombre} vaut ${cube(nombre)}. `;
      para.textContent += `La factorielle de ${nombre} vaut ${factorielle(
        nombre,
      )}. `;
    }
  });