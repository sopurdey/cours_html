let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Calculer et afficher la moyenne des éléments du tableau
let moyenne = 0;

for(i = 0; i < array.length; i++) {
  moyenne += array[i];
}

moyenne = moyenne/array.length;

console.log(moyenne);