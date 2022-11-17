const { Sequelize } = require("sequelize");

const db = require("./db");

const Filme = db.define("filmes", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  original_title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  movie_banner: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.TEXT("long"),
    allowNull: true,
  },
  release_date: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  rt_score: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

// Cria a tabela se não existir
Filme.sync();

module.exports = Filme;
