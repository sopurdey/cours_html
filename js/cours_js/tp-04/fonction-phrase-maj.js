// Créer une fonction qui prend en paramètre une chaine de caractères.
// Cette fonction retourne cette chaine de caractères dans laquelle chaque mot a sa première lettre mis en majuscule
function capitaliseFirstLetters(string) {
  let stringArray = string.split(' ');
  for(i = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].substring(1);
  }
  return console.log(stringArray.join(' '));
}
let testString = "hello, world!";
capitaliseFirstLetters(testString); // Hello, World!