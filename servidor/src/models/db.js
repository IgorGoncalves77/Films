const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("films", "root", "admin", {
  //database, username, password
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("Conectado com o banco de dados!");
  })
  .catch(function () {
    console.log("Erro de conexão com o banco de dados!");
  });

module.exports = sequelize;
