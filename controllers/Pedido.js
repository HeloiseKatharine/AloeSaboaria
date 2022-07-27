const Pedido = require('../models/Pedido');

module.exports = {
  async store(req, res){
    const Pedido = await Pedido.create(req.body);

    return res.json(Pedido);
      
    },
    async show(req, res){ 
      let Pedido = await Pedido.findAll({
        where : {id : req.params.id}
      });
      return res.json(Pedido);
    },
  
    async destroy(req,res){
        let Pedido = await Pedido.findByIdAndRemove({where: {id: req.params.id}});
           return res.json(Pedido);
      },
  
    async update(req,res){
        let Pedido = await Pedido.Update(req.body,
          {where :
            {id : req.params.id}}); 
          return res.json(Pedido);
      }
   
};