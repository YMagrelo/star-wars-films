import { getFilms, getFilmsDetails } from '../api';

const GET_FILMS = 'GET_FILMS';
const GET_FILM_DETAILS = 'GET_FILM_DETAILS';

const initialState = {
  films: [],
  filmDetails: null,
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

export const getFilmsThunk = () => async(dispatch) => {
  const data = await getFilms();

  dispatch(setFilms(data.results));
};

export const getFilmDetailsThunk = filmId => async(dispatch) => {
  const data = await getFilmsDetails(filmId);

  dispatch(setFilmsDetails(data));
};
