import { combineReducers } from "redux";
import { reducer as filmsReducer } from "./showFilmsReducer";
import { reducer as filmReducer } from "./showFilmReducer";

export default combineReducers({
  filmsReducer,
  filmReducer,
});
