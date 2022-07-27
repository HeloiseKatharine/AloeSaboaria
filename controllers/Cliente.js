const Cliente = require('../models/Cliente');

module.exports = {
  
  async store(req, res){
    const Cliente = await Cliente.create(req.body);
    return res.json(Cliente);
    },
  
  async show(req, res){ 
      let Cliente = await Cliente.findAll({
        where : {id : req.params.id}
      });
      return res.json(Cliente);
    },
  
  async destroy(req,res){
        let Cliente = await Cliente.findByIdAndRemove({where: {id: req.params.id}});
           return res.json(Cliente);
      },
  
  async update(req,res){
        let Cliente = await Cliente.Update(req.body,
          {where :
            {id : req.params.id}}); 
          return res.json(Cliente);
      }
};