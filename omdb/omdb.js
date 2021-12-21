const apiKey = 'f6e256e1';
// Boutons
const submit = document.querySelector('#submit');
const search = document.querySelectorAll('.search');
const clear = document.querySelector('#reset');
// Formulaire
const form = document.querySelector('form');
// Données des films
let filmTitle = '';
let filmYear = '';
// Données de la liste de films
let filmList = document.querySelector('.film-list');
let listContainer = document.querySelector('.list-container');
let filmBtns = document.querySelectorAll('.film-btn');
// Données pour les cartes de films
let card = document.querySelector('.card-container');
let cardTitle = document.querySelector('.card-title');
let cardYear = document.querySelector('.film-year');
let filmRelease = document.querySelector('.film-release')
let filmGenre = document.querySelector('.film-genre');
let filmPlot = document.querySelector('.film-plot')
let poster = document.querySelector('.img-fluid')
// Gestion d'erreurs
const errorFlash = document.querySelector('.error');

search.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    // Remettre l'affichage à zéro avant chaque recherche
    removeChildNodes(filmList);
    card.classList.add('hidden');
    if (document.querySelector('#title').value == '' || document.querySelector('#title').value.length < 3) {
      errorFlash.textContent = 'Merci de saisir le titre d\'un film';
      errorFlash.classList.add('display');
      errorFlash.classList.remove('hidden');
    } else {
      console.log(document.querySelector('#title').value);
      filmTitle = document.querySelector('#title').value;
      if (errorFlash.classList.contains('display')) {
        errorFlash.classList.remove('display');
        errorFlash.classList.add('hidden');
      }
      getAllFilms();
    }
  });
});

/**
 * Fonction pour rechercher les films avec titre contenant le text du input
 * @returns promise
 */
function getAllFilms() {
  return fetch(`https://www.omdbapi.com/?&apikey=${apiKey}&s=${filmTitle}&y=${filmYear}`)
    .then(res => {
      if (res.ok) return res.json();
      else throw new TypeError("Pas de données");
    })
    .then(data => {
      displayAllFilms(data);
    })
    .catch(console.error);
}

/**
 * Fonction pour afficher la liste de films depuis le text recherché
 * @param {object} data 
 */
function displayAllFilms(data) {
  // Gérer erreur : trop de réponses
  if (data['Search'] === undefined) {
    errorFlash.classList.add('display');
    errorFlash.classList.remove('hidden');
    errorFlash.textContent = "Merci de saisir un titre plus long";
    console.log(data['Search']);
  } else {
    for (i = 0; i < data['Search'].length; i++) {
      // Données pour l'item de la liste
      let li = document.createElement('li');
      let liTitle = data['Search'][i]['Title']
      let liID = data['Search'][i]['imdbID'];
      let liImg = '';
      if (data['Search'][i]['Poster'] === 'N/A') {
        // Image par défaut si pas de poster
        liImg = 'https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80';
      } else {
        liImg = data['Search'][i]['Poster'];
      }

      li.classList.add('list-group-item');
      li.innerHTML =
        `<img width="50px" src="${liImg}"alt="" /> 
    ${liTitle} <em>${data['Search'][i]['Year']}</em>
    <button type="submit" class="btn btn-outline-success film-btn">Plus d'info</button>`;
      filmList.appendChild(li);

      li.addEventListener('click', () => {
        console.log('click sur film : ' + liID);
        getFilm(liID);
      });
    }
    // Afficher la liste de films après recherche
    listContainer.classList.remove('hidden');
  }
}

/**
 * Fonction pour rechercher le film selectionné dans la liste
 * @param {string} id 
 * @returns promise
 */
function getFilm(id) {
  return fetch(`https://www.omdbapi.com/?&apikey=${apiKey}&i=${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      displayFilm(data)
    })
    .catch(console.error);
}

/**
 * Fonction pour effacer la recherche et cacher les résultats
 */
clear.onclick = function () {
  listContainer.classList.add('hidden');
  card.classList.add('hidden');
  if (errorFlash.classList.contains('display')) {
    errorFlash.classList.remove('display');
    errorFlash.classList.add('hidden');
  }
  console.log('click sur effacer');
}

/**
 * Fonction pour afficher les information sur le film selectionné
 * @param {object} data 
 */
function displayFilm(data) {
  listContainer.classList.add('hidden');
  card.classList.remove('hidden');
  cardTitle.textContent = data['Title'];
  cardYear.textContent = 'Année : ' + data['Year'];
  filmRelease.textContent = 'Date de sortie : ' + data['Released'];
  filmGenre.textContent = 'Genre : ' + data['Genre'];
  filmPlot.textContent = data['Plot'];
  if (data['Poster'] === 'N/A') {
    // Image par défaut si pas de poster
    poster.src = 'https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  } else {
    poster.src = data['Poster'];
  }
  poster.alt = data['Title'];
  console.log(data);
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}