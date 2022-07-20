const { Sequelize, DataTypes } = require("sequelize");

const Cliente = sequelize.define("cliente",{
  nome: DataTypes.TEXT,
  cpf : DataTypes.TEXT,
  email : DataTypes.TEXT,
  senha : DataTypes.TEXT
});


module.exports = Cliente;