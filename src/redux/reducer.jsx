import {
  getFilms,
  getFilmsDetails,
  getCharacter,
  getPlanet,
  getStarship,
  getVehicle,
  getSpecies,
  getSearchFilm,
} from '../api';
import {
  GET_FILMS,
  GET_FILM_DETAILS,
  GET_CHARACTER,
  GET_PLANET,
  GET_STARSHIP,
  GET_VIHECLE,
  setFilms,
  setFilmsDetails,
  setCharacter,
  setPlanet,
  setStarship,
  setVehicle,
  GET_SPECIES,
  setSpecies,
  GET_SEARCH_FILM,
  setSearchFilm,
} from '../constants';

const initialState = {
  films: [],
  searchFilm: [],
  filmDetails: null,
  character: null,
  planet: null,
  starship: null,
  vehicle: null,
  species: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.payload,
      };

    case GET_SEARCH_FILM:
      return {
        ...state,
        searchFilm: action.payload,
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

    case GET_VIHECLE:
      return {
        ...state,
        vehicle: action.payload,
      };

    case GET_SPECIES:
      return {
        ...state,
        species: action.payload,
      };

    default:
      return state;
  }
};

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

export const getStarshipThunk = starshipId => async(dispatch) => {
  const data = await getStarship(starshipId);

  dispatch(setStarship(data));
};

export const getVehicleThunk = vehicleId => async(dispatch) => {
  const data = await getVehicle(vehicleId);

  dispatch(setVehicle(data));
};

export const getSpeciesThunk = speciesId => async(dispatch) => {
  const data = await getSpecies(speciesId);

  dispatch(setSpecies(data));
};

export const getSearchFilmThunk = query => async(dispatch) => {
  const data = await getSearchFilm(query);

  console.log(data);
  dispatch(setSearchFilm(data));
};
