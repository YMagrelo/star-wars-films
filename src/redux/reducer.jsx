import {
  getFilms,
  getFilmsDetails,
  getCharacter,
  getPlanet,
  getStarship,
} from '../api';

const GET_FILMS = 'GET_FILMS';
const GET_FILM_DETAILS = 'GET_FILM_DETAILS';
const GET_CHARACTER = 'GET_CHARACTER';
const GET_PLANET = 'GET_PLANET';
const GET_STARSHIP = 'GET_STARSHIP';

const initialState = {
  films: [],
  filmDetails: null,
  character: null,
  planet: null,
  starship: null;
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.payload,
      };

    case GET_FILM_DETAILS:
      return {
        ...state,
        filmDetails: action.payload,
      };

    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload,
      };

    case GET_PLANET:
      return {
        ...state,
        planet: action.payload,
      };

      case GET_STARSHIP:
      return {
        ...state,
        starship: action.payload,
      };

    default:
      return state;
  }
};

const setFilms = payload => ({
  type: GET_FILMS,
  payload,
});

const setFilmsDetails = payload => ({
  type: GET_FILM_DETAILS,
  payload,
});

const setCharacter = payload => ({
  type: GET_CHARACTER,
  payload,
});

const setPlanet = payload => ({
  type: GET_PLANET,
  payload,
});

const setStarship = payload => ({
  type: GET_STARSHIP,
  payload,
});

export const getFilmsThunk = () => async(dispatch) => {
  const data = await getFilms();

  dispatch(setFilms(data.results));
};

export const getFilmDetailsThunk = filmId => async(dispatch) => {
  const data = await getFilmsDetails(filmId);

  dispatch(setFilmsDetails(data));
};

export const getCharacterThunk = charId => async(dispatch) => {
  const data = await getCharacter(charId);

  dispatch(setCharacter(data));
};

export const getPlanetThunk = planetId => async(dispatch) => {
  const data = await getPlanet(planetId);

  dispatch(setPlanet(data));
};

export const getStarshipThunk = shiptId => async(dispatch) => {
  const data = await getStarship(shipId);

  dispatch(setStarship(data));
};
