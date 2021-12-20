// Créer une fonction qui prend en paramètre une chaine de caractères.
// Cette fonction retourne la chaine de caractères passée en paramètre avec la première lettre en majuscule.
function capitaliseFirst(string) {
  return console.log(string.charAt(0).toUpperCase() + string.slice(1));
}
let text = "hello!"
capitaliseFirst(text); // Hello!
