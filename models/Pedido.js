const { Sequelize, DataTypes } = require("sequelize");

const Pedido = sequelize.define("pedido",{
  endereco: DataTypes.TEXT,
  frete : DataTypes.TEXT,
  valor_pedido : DataTypes.TEXT,
});


module.exports = Cliente;



id SERIAL primary key ,
endereco varchar(300) not null,
frete numeric(10,2),
valor_pedido numeric(10,2)