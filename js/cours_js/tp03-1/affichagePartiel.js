let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Combiner une boucle et un test de manière à n’afficher que les entiers supérieurs à 3
for (i = 0; i < array.length; i++) {
  if(array[i] > 3) {
    console.log(array[i]);
  }
}

console.log('---------------------');

// Combiner une boucle et un test de manière à n’afficher que les entiers pairs
for (i = 0; i < array.length; i++) {
  if(array[i] % 2 == 0) {
    console.log(array[i]);
  }
}

// Combiner une boucle et un test de manière à n’afficher que les valeurs correspondant aux index pairs


// Combiner une boucle et un test de manière à n’afficher que les entiers impairs