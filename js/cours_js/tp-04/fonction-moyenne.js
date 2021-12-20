// Créer une fonction qui calcule et retourne la moyenne d’un tableau passé en paramètre.
// Cette fonction doit retourner un message d’erreur dans le cas où un élément du tableau n’est pas un nombre
function average(arr) {
  let moyenne = 0;
  if (arr.length === 0) {
    return console.log(0);
  } else {
    for (i = 0; i < arr.length; i++) {
      if (!Number.isInteger(arr[i])) {
        return console.log('L\'élément n\'est pas un nombre');
      } else {
        moyenne += arr[i];
      }
    }
    return moyenne / arr.length;
  }
}
// Réalisez 3 appels à cette fonction avec :
// Un tableau contenant des éléments
let arrayA = [2, 6, 10];
let avgA = average(arrayA);
console.log(avgA); // retourne 6
// Un tableau vide. Que se passe-t-il dans ce second cas ? Faites-en sorte que votre fonction retourne 0 dans le cas où le tableau est vide.
let arrayB = [];
average(arrayB); // retourne 0
// Une chaine de caractères. Que se passe-t-il dans ce troisième cas ?
let arrayC = ["Hello", ",", "World", "!"];
average(arrayC); // L'élément n'est pas un nombre