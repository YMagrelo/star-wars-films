const BASE_URL = 'https://swapi.dev/api/';

export const getUsers = page => fetch(`${BASE_URL}films/`)
  .then(response => response.json());
