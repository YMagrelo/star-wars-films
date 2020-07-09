const BASE_URL = 'https://swapi.dev/api/';

export const getFilms = page => fetch(`${BASE_URL}films/`)
  .then(response => response.json());
