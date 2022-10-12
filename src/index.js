import './css/styles.css';
import pokemonCard from './fetchCountries';

const list = document.querySelector('.country-list');

// const DEBOUNCE_DELAY = 300;

function fetchCountries(name) {
  return fetch('https://pokeapi.co/api/v2/pokemon/2')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}

function getEvents() {
  fetchCountries().then(data => console.log(data));
  renderEvents();
}

getEvents();

function renderEvents() {
  const markup = `<li>
    <img src="${sprites.front_default}" alt="${name}"/>
    <p>Имя:${name}</p>
    <p>Вес:${weight}</p>
    <p>Рост:${height}</p>
    </li>`;
  list.innerHTML = markup;
}
