const express = require("express");
const cors = require("cors");
//const cookieParser = require("cookie-parser");
//const path = require("path");
const routes = require("./src/routes");
const app = express();
const port = process.env.PORT || 5000;

const db = require("./src/models/db");

app.use(cors());
//app.use(cookieParser());
app.use(express.json());
app.use(routes);
app.listen(port, function () {
  console.log("Servidor rodando na porta", port);
});
