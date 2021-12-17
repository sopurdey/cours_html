// Déclarez un tableau d’entiers
let array = [15, -6, 1, 8, 2, 9, 11, 28, -1, 17, 12, 6];

// On calcule une valeur booléenne qui contrôle le tableau de la sorte :
// Elle vaut true si le tableau a au moins 1 élément et si le premier élément ou le dernier élément vaut 6.
// Elle vaut false dans les autres cas

if(array.length >= 1 && array[0] == 6 || array[array.length-1] ==6) {
  console.log('vrai');
} else {
  console.log('faux');
}