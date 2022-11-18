const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const app = express();
const port = process.env.PORT || 5000;

const db = require("./src/models/db");

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port, function () {
  console.log("Servidor rodando na porta", port);
});
