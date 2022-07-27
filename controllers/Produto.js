const Produto = require('../models/Produto');

module.exports = {
  async store(req, res) {
    const Produto = await Produto.create(req.body);

    return res.json(Produto);

  },
  async show(req, res) {
    let Produto = await Produto.findAll({
      where: { id: req.params.id }
    });
    return res.json(Produto);
  },

  async destroy(req, res) {
    let Produto = await Produto.findByIdAndRemove({ where: { id: req.params.id } });
    return res.json(Produto);
  },

  async update(req, res) {
    let Produto = await Produto.Update(req.body,
      {
        where:
          { id: req.params.id }
      });
    return res.json(Produto);
  }

};