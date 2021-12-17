// Exo 1
// Ecrivez une fonction qui ne prend pas de paramètre et retourne le nombre 33.
function return33() {
  return 33;
}

let result = return33();
console.log('exo 1 :');
console.log(result); // retourne 33

// Exo 2
// Ecrivez une fonction qui prend en paramètre une variable de type chaine de caractères et affichage « Bonjour » suivi de la variable.
function hello(name) {
  console.log('Bonjour ' + name);
}

console.log('exo 2 :');
hello('Marcel'); // Bonjour Marcel

// Exo 3
// Ecrivez une fonction qui prend 2 nombres a et b en paramètres et retourne le résultat suivant : a * b + a + b
function sum(a, b) {
  return a * b + a + b;
}
let testSum = sum(2, 3);
console.log('exo 3 :');
console.log(testSum); // retourne 11

// Exo 4
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
console.log('exo 4 :');
testArray(array1); // true
// Un tableau contenant des nombres et une chaine de caractères
let array2 = [1, "Hi", 1, 2, 3, "four"];
testArray(array2); // false
// Un tableau vide.
let array3 = [];
testArray(array3); // retourne 0

// Exo 5
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
console.log('exo 5 :');
let avgA = average(arrayA);
console.log('avgA : ' + avgA); // retourne 6
// Un tableau vide. Que se passe-t-il dans ce second cas ? Faites-en sorte que votre fonction retourne 0 dans le cas où le tableau est vide.
let arrayB = [];
average(arrayB); // retourne 0
// Une chaine de caractères. Que se passe-t-il dans ce troisième cas ?
let arrayC = ["Hello", ",", "World", "!"];
average(arrayC); // L'élément n'est pas un nombre
// Exo 6
// Créer une fonction qui prend en paramètre une chaine de caractères.
// Cette fonction retourne la chaine de caractères passée en paramètre avec la première lettre en majuscule.
function capitaliseFirst(string) {
  return console.log(string.charAt(0).toUpperCase() + string.slice(1));
}
let text = "hello!"
console.log('exo 6 :');
capitaliseFirst(text); // Hello!

// Exo 7
// Créer une fonction qui prend en paramètre une chaine de caractères.
// Cette fonction retourne cette chaine de caractères dans laquelle chaque mot a sa première lettre mis en majuscule
function capitaliseFirstLetters(string) {
  let stringArray = string.split(' ');
  for(i = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].substring(1);
  }
  return console.log(stringArray.join(' '));
}
console.log('exo 7 :');
let testString = "hello, world!";
capitaliseFirstLetters(testString); // Hello, World!