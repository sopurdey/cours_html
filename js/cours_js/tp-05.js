// Exo 1
// Améliorez votre fonction afin que cette dernière renvoie une exception dans le cas où il manque un paramètre
// Améliorez votre fonction afin que cette dernière renvoie une exception dans le cas où un paramètre n’est pas un nombre.
function sum(a, b) {
  if (!a || !b) {
    throw 'Il manque un paramètre';
  } else if(isNaN(a) || isNaN(b)) {
    throw 'Il faut saisir un nombre';
  }
  return a * b + a + b;
}
console.log('exo 1');
let testSum1 = sum(1, 3);
// Test 1 avec nombres
console.log(testSum1); // retourne 7
// Test 2 param manquant
let testSum2 = sum(4);
console.log(testSum2); // il manque un paramètre
// Test 3 param non nombre
// let testSum3 = sum("one", "two");
console.log(testSum3); // Il faut saisir un nombre



// Exo 2
// Améliorez votre fonction afin que cette dernière renvoie une exception dans le cas où le paramètre reçu par la fonction n’est pas un nombre
// Améliorez votre fonction afin que cette dernière renvoie une exception dans le cas où un élément du tableau n’est pas un nombre
console.log('exo 2');
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
console.log('avgA : ' + avgA); // retourne 6
// Le cas avec un tableau contenant des nombres et une chaine de caractères
let arrayB = ["Hello", ",", "World", "!"];
average(arrayB); // L'élément n'est pas un nombre
// Le cas avec un paramètre qui n’est pas un tableau
let arrayC = 20;
average(arrayC); // Il faut passer un tableau en paramètre