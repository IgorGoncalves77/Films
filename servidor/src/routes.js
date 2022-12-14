const express = require("express");

const routes = express.Router();

const Film = require("./controllers/films.controller");

routes.get("/", Film.index);

//Rotas de Clientes
routes.post("/api/films", Film.create);
routes.get("/api/films", Film.index);

module.exports = routes;
