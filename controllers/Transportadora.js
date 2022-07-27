const Transportadora = require('../models/Transportadora');

module.exports = {
  async store(req, res){
    const Transportadora = await Transportadora.create(req.body);

    return res.json(Transportadora);
      
    },
  async show(req, res){ 
    let Transportadora = await Transportadora.findAll({
      where : {id : req.params.id}
    });
    return res.json(Transportadora);
  },

  async destroy(req,res){
      let Transportadora = await Transportadora.findByIdAndRemove({where: {id: req.params.id}});
         return res.json(Transportadora);
    },

  async update(req,res){
      let Transportadora = await Transportadora.Update(req.body,
        {where :
          {id : req.params.id}}); 
        return res.json(Transportadora);
    }
 
};