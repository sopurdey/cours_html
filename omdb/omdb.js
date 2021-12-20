const apiKey = 'f6e256e1';
const submit = document.querySelector('#submit');
const clear = document.querySelector('#reset');
let filmTitle = '';
let filmGenre = '';
let filmYear = '';
let card = document.querySelector('.card-container');
let cardTitle = document.querySelector('.card-title');
let cardYear = document.querySelector('.film-year');
let filmRelease = document.querySelector('.film-release')
let filmPlot = document.querySelector('.film-plot')
let poster = document.querySelector('.img-fluid')
let filmList = document.querySelector('.film-list');
let listContainer = document.querySelector('.list-container');


submit.onclick = function (e) {
  e.preventDefault();
  if (document.querySelector('#title').value == '' && document.querySelector('#year').value == '') {
    console.log('Merci de saisir le titre ou l\'année d\'un film');
  } else {
    console.log(document.querySelector('#title').value);
    filmTitle = document.querySelector('#title').value;
    filmYear = document.querySelector('#year').value;
    getFilm();
  }
}

function getFilm() {
  return fetch(`https://www.omdbapi.com/?&apikey=${apiKey}&s=${filmTitle}&y=${filmYear}`)
    .then(res => res.json())
    .then(data => {
      displayAllFilms(data);
    })
    .then(data => {
      displayFilm();
    })
    .catch(console.error);
}

function displayAllFilms(data) {
  // console.log(data['Search']);
  console.log(data['Search']);
  for (i = 0; i < data['Search'].length; i++) {
    // console.log(data['Search'][i]);
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `<img width="50px" src="${data['Search'][i]['Poster']}" alt="" /> ${data['Search'][i]['Title']} <em>${data['Search'][i]['Year']}</em>`;
    filmList.appendChild(li);


  }
  listContainer.classList.remove('hidden');

}

function displayFilm(title) {
  return fetch(`https://www.omdbapi.com/?&apikey=${apiKey}&s=${title}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(console.error);


  card.classList.remove('hidden');
  cardTitle.textContent = data['Title'];
  cardYear.textContent = 'Année : ' + data['Year'];
  filmRelease.textContent = 'Date de sortie : ' + data['Released'];
  filmPlot.textContent = data['Plot'];
  poster.src = data['Poster'];
  poster.alt = data['Title'];
  console.log(data);
}

clear.onclick = function () {
  card.classList.add('hidden');
  console.log('click sur effacer');
}