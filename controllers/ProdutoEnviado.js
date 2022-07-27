const ProdutoEnviado = require('../models/ProdutoEnviado');

module.exports = {
  async store(req, res){
    const ProdutoEnviado = await ProdutoEnviado.create(req.body);

    return res.json(ProdutoEnviado);
      
    },
    async show(req, res){ 
      let ProdutoEnviado = await ProdutoEnviado.findAll({
        where : {id : req.params.id}
      });
      return res.json(ProdutoEnviado);
    },
  
    async destroy(req,res){
        let ProdutoEnviado = await ProdutoEnviado.findByIdAndRemove({where: {id: req.params.id}});
           return res.json(ProdutoEnviado);
      },
  
    async update(req,res){
        let ProdutoEnviado = await ProdutoEnviado.Update(req.body,
          {where :
            {id : req.params.id}}); 
          return res.json(ProdutoEnviado);
      }
   
};