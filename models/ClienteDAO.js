const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgresql::memory:");

const Cliente = sequelize.define("cliente",{
  nome: DataTypes.TEXT,
  cpf : DataTypes.TEXT,
  email : DataTypes.TEXT,
  senha : DataTypes.TEXT
});


module.exports = Cliente;