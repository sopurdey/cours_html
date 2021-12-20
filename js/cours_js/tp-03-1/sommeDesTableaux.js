let tab1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let tab2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1] ;

// Créer un tableau qui contient la somme des 2 précédents tableaux
let tab3 = [];
for(i = 0; i < tab1.length; i++) {
  tab3.push(tab1[i] + tab2[i]);
}
console.log('tab3 : ' + tab3);