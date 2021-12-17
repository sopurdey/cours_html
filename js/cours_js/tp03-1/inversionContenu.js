let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Créer un tableau arrayCopy et copier tous les éléments de array dans arrayCopy mais dans l’ordre inverse.
let arrayCopie = array.slice().reverse();

// Afficher l’ensemble des éléments des 2 tableaux
console.log('Original : ' + array);
console.log('Copie : ' + arrayCopie);