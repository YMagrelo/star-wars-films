export const BASE_URL = 'https://swapi.dev/api/';

// action types
export const GET_FILMS = 'GET_FILMS';
export const GET_FILM_DETAILS = 'GET_FILM_DETAILS';
export const GET_CHARACTER = 'GET_CHARACTER';
export const GET_PLANET = 'GET_PLANET';
export const GET_STARSHIP = 'GET_STARSHIP';
export const GET_VIHECLE = 'GET_VEHICLE';
export const GET_SPECIES = 'GET_SPECIES';

// action creators
export const setFilms = payload => ({
  type: GET_FILMS,
  payload,
});
export const setFilmsDetails = payload => ({
  type: GET_FILM_DETAILS,
  payload,
});
export const setCharacter = payload => ({
  type: GET_CHARACTER,
  payload,
});
export const setPlanet = payload => ({
  type: GET_PLANET,
  payload,
});
export const setStarship = payload => ({
  type: GET_STARSHIP,
  payload,
});
export const setVehicle = payload => ({
  type: GET_VIHECLE,
  payload,
});
export const setSpecies = payload => ({
  type: GET_SPECIES,
  payload,
});

export const charUrlLength = 28;
export const planetUrlLength = 29;
export const starshipsUrlLength = 31;
export const filmsUrlLength = 27;
export const vehicleUrlLength = 30;
export const speciesUrlLength = 29;
