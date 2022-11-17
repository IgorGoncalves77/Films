import {
  FILM_REQUEST,
  FILM_SUCCESS,
  FILM_ERROR,
  FILMS_REQUEST,
  FILMS_SUCCESS,
  FILMS_ERROR,
} from "../types/filmsTypes";

import { getFilm, getFilms } from "../../services/api";

//GET FILM
export const filmRequest = (id) => {
  return (dispatch) => {
    getFilm(id)
      .then((data) => dispatch(filmSuccess(data)))
      .catch((error) => dispatch(filmError(error)));

    return { type: FILM_REQUEST };
  };
};

export const filmSuccess = (film) => ({
  type: FILM_SUCCESS,
  film,
});

export const filmError = (error) => ({
  type: FILM_ERROR,
  error,
});

//GET FILMS
export const filmsRequest = () => {
  return (dispatch) => {
    getFilms()
      .then((data) => dispatch(filmsSuccess(data)))
      .catch((error) => dispatch(filmsError(error)));

    return { type: FILMS_REQUEST };
  };
};

export const filmsSuccess = (films) => ({
  type: FILMS_SUCCESS,
  films,
});

export const filmsError = (error) => ({
  type: FILMS_ERROR,
  error,
});
