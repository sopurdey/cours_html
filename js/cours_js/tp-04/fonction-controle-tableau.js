// Créer une fonction qui vérifie le contenu d’un tableau
// Si le tableau ne contient que des nombres alors la fonction retourne true
// Sinon la fonction retourne false
function testArray(arr) {
  if (arr.length === 0) {
    return console.log(0);
  } else if (!arr.some(isNaN)) {
    return console.log('true');
  } else {
    return console.log('false');
  }
}
// Réalisez 3 appels à cette fonction avec :
// Un tableau contenant des nombres
let array1 = [1, 2, 3];
testArray(array1); // true
// Un tableau contenant des nombres et une chaine de caractères
let array2 = [1, "Hi", 1, 2, 3, "four"];
testArray(array2); // false
// Un tableau vide.
let array3 = [];
testArray(array3); // retourne 0