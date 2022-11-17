import { FILM_REQUEST, FILM_SUCCESS, FILM_ERROR } from "../types/filmsTypes";

const INITIAL_STATE = {
  film: {},
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILM_REQUEST:
      return { ...state, loading: true };
    case FILM_SUCCESS:
      return { ...state, loading: false, film: action.film };
    case FILM_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
