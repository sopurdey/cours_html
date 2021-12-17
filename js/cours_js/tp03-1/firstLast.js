// Déclarez un tableau d’entiers
let array = [15, -6, 1, 8, 2, 9, 11, 28, -1, 17, 12, 6];

// On calcule une valeur booléenne qui contrôle le tableau de la sorte :
// Elle vaut true si le tableau est de longueur supérieure ou égale à 1 et que le premier et le dernier élément du tableau ont la même valeur
// Elle vaut false dans les autres cas
if(array.length >= 1 && array[0] == array[array.length-1]) {
  console.log('vrai');
} else {
  console.log('faux');
}