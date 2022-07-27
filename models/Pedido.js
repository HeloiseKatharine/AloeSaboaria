const { Sequelize, DataTypes } = require("sequelize");
const Cliente = require('Cliente');


const Pedido = sequelize.define("pedido",{
  endereco: DataTypes.TEXT,
  frete : DataTypes.TEXT,
  valor_pedido : DataTypes.TEXT,
  data : DataTypes.DATE,
  cpf_cliente: {
    type: DataTypes.STRING,
    references: {
      model: Cliente,
      key: 'cpf'
    }
  }
});


module.exports = Pedido;


