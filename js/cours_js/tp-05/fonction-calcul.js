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
let testSum1 = sum(1, 3);
// Test 1 avec nombres
console.log(testSum1); // retourne 7
// Test 2 param manquant
let testSum2 = sum(4);
console.log(testSum2); // il manque un paramètre
// Test 3 param non nombre
// let testSum3 = sum("one", "two");
console.log(testSum3); // Il faut saisir un nombre
