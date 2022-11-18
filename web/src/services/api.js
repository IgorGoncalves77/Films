import axios from "axios";

const apiGhibli = "https://ghibliapi.herokuapp.com";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export function searchFilms() {
  return new Promise(function (resolve, reject) {
    fetch(apiGhibli + "/films")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });
}

export function addFilm(data) {
  return new Promise((resolve, reject) => {
    api
      .post("/api/films", data)
      .then((response) => response.data)
      .then((data) => resolve(data))
      .catch(reject);
  });
}

export function getFilm(id) {
  return new Promise((resolve, reject) => {
    api
      .get("/api/films.details/" + id)
      .then((response) => response.data)
      .then((data) => resolve(data))
      .catch(reject);
  });
}

export function getFilms() {
  return new Promise(function (resolve, reject) {
    api
      .get("/api/films")
      .then((response) => response.data)
      .then((data) => resolve(data))
      .catch(reject);
  });
}
