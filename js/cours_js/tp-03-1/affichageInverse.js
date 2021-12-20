let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Afficher l’ensemble des éléments du tableau grâce à une boucle
for(i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log('---------------------');

// Afficher l’ensemble des éléments dans l’ordre inverse du tableau
inverse = array.slice().reverse();


console.log('inversé : ' + inverse);

console.log('---------------------');

// Créer un tableau arrayCopy, copie du tableau array
let arrayCopy = array.slice();

console.log('Copie : ' + arrayCopy);