import { BASE_URL } from './constants';

export const getFilms = () => fetch(`${BASE_URL}films/`)
  .then(response => response.json());

export const getFilmsDetails = filmId => fetch(`${BASE_URL}films/${filmId}`)
  .then(response => response.json());

export const getCharacter = charId => fetch(`${BASE_URL}people/${charId}`)
  .then(response => response.json());

export const getPlanet = planetId => fetch(`${BASE_URL}planets/${planetId}`)
  .then(response => response.json());

export const getStarship = shipId => fetch(
  `${BASE_URL}starships/${shipId}`, { mode: 'cors' },
)
  .then(response => response.json());

export const getVehicle = vehicleId => fetch(
  `${BASE_URL}vehicles/${vehicleId}`,
)
  .then(response => response.json());
