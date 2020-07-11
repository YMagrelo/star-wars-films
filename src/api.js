const BASE_URL = 'https://swapi.dev/api/';

export const getFilms = () => fetch(`${BASE_URL}films/`)
  .then(response => response.json());

export const getFilmsDetails = filmId => fetch(`${BASE_URL}films/${filmId}`)
  .then(response => response.json());

export const getCharacter = charId => fetch(`${BASE_URL}people/${charId}`)
  .then(response => response.json());

export const getPlanet = planetId => fetch(`${BASE_URL}planets/${planetId}`)
  .then(response => response.json());

export const getStarship = starshipId => fetch(`${BASE_URL}starships/${starshipId}`)
  .then(response => response.json());
