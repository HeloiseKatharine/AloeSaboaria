const PedidoProduto = require('../models/PedidoProduto');

module.exports = {
  async store(req, res){
    const PedidoProduto = await PedidoProduto.create(req.body);

    return res.json(PedidoProduto);
      
    },
    async show(req, res){ 
      let PedidoProduto = await PedidoProduto.findAll({
        where : {id : req.params.id}
      });
      return res.json(PedidoProduto);
    },
  
    async destroy(req,res){
        let PedidoProduto = await PedidoProduto.findByIdAndRemove({where: {id: req.params.id}});
           return res.json(PedidoProduto);
      },
  
    async update(req,res){
        let PedidoProduto = await PedidoProduto.Update(req.body,
          {where :
            {id : req.params.id}}); 
          return res.json(PedidoProduto);
      }
   
};