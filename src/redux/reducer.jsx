
const GET_FILMS = 'GET_FILMS';

const initialState = {
  films: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: [...action.payload],
      };

    default:
      return state;
  }
};

const setFilms = payload => ({
  type: GET_FILMS,
  payload,
});
