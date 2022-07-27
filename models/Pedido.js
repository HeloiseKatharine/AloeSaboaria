const { Sequelize, DataTypes } = require("sequelize");

const Pedido = sequelize.define("pedido",{
  endereco: DataTypes.TEXT,
  frete : DataTypes.TEXT,
  valor_pedido : DataTypes.TEXT,
  data : DataTypes.DATE
});


module.exports = Cliente;


