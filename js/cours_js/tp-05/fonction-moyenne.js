// Améliorez votre fonction afin que cette dernière renvoie une exception dans le cas où le paramètre reçu par la fonction n’est pas un nombre
// Améliorez votre fonction afin que cette dernière renvoie une exception dans le cas où un élément du tableau n’est pas un nombre
function average(arr) {
  let moyenne = 0;
  if (arr.length === 0) {
    return console.log(0);
  } else if (!Array.isArray(arr)) {
    throw 'Il faut passer un tableau en paramètre'
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
// Mettez en œuvre plusieurs appels différents pour tester :
// Le cas avec un tableau nombre
let arrayA = [2, 6, 10];
let avgA = average(arrayA);
console.log(avgA); // retourne 6
// Le cas avec un tableau contenant des nombres et une chaine de caractères
let arrayB = ["Hello", ",", "World", "!"];
average(arrayB); // L'élément n'est pas un nombre
// Le cas avec un paramètre qui n’est pas un tableau
let arrayC = 20;
average(arrayC); // Il faut passer un tableau en paramètre