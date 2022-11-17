import { FILMS_REQUEST, FILMS_SUCCESS, FILMS_ERROR } from "../types/filmsTypes";

const INITIAL_STATE = {
  films: [],
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILMS_REQUEST:
      return { ...state, loading: true };
    case FILMS_SUCCESS:
      return { ...state, loading: false, films: action.films };
    case FILMS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
