let tab1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let tab2 = [-1, 12, 17, 14, 5, -9, 0, 18] ;

// Créer un tableau qui contient la somme des 2 précédents tableaux.
// Attention à tenir compte de la différence de taille des tableaux.
let tab3 = [];

for(i = 0; i < tab1.length; i++) {
  if(tab2[i]) {
    tab3.push(tab1[i] + tab2[i]);
  } else {
    tab3.push(tab1[i]);
  }
}
console.log('tab3 : ' + tab3);