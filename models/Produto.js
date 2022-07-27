const { sequelize, DataTypes } = require("sequelize");

const Produto = sequelize.define("produto",{
    peso : DataTypes.Number,
    categoria : DataTypes.Text,
    valor : DataTypes.Number,
    nome : DataTypes.Text,
    descricao : DataTypes.Text,
    quantidade : DataTypes.Number
});

module.exports = Produto;