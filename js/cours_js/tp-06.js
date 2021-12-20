// Déclarez une variable contenant du JSON
const json = {
  "nom": "Google",
  "siegeSocial": "Googleplex, Mountain View, Californie, États-Uni",
  "Fondateurs": [
    {
      "nom": "Larry Page",
      "dateNaissance": "26/03/1973",
      "lieuNaissance": "East Lansing, Michigan, États-Uni"
    },
    {
      "nom": "Sergey Brin",
      "dateNaissance": "21/08/1973",
      "lieuNaissance": "Moscou, Union Soviétique"
    }
  ],
  "chiffreAffaireMilliards": [
    {
      "2008": "16.49",
      "2012": "37.97",
      "2016": "89.46",
      "2018": "136.2"
    }
  ]
}

// Faites une boucle pour afficher les fondateurs de la société ainsi que les chiffres d’affaires de la société.

for (key in json) {
  if (key === "Fondateurs" || key === "chiffreAffaireMilliards") {
    console.log(json[key]);
  }
}