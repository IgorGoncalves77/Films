const Film = require("../models/film.model");

module.exports = {
  async index(req, res) {
    const films = await Film.findAll();
    res.json(films);
  },

  async create(req, res) {
    const {
      id,
      title,
      original_title,
      image,
      movie_banner,
      description,
      release_date,
      rt_score,
    } = req.body;
    let data = {};
    let film = await Film.findOne({
      where: {
        id: id,
      },
    });
    if (!film) {
      data = {
        id,
        title,
        original_title,
        image,
        movie_banner,
        description,
        release_date,
        rt_score,
      };
      film = await Film.create(data);
      res.status(200);
    } else {
      res.status(200);
    }
  },

  async details(req, res) {
    const { id } = req.params;
    const film = await Film.findByPk(id);
    res.json(film);
  },
};
