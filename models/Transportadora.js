const { Sequelize, DataTypes } = require("sequelize");

const Transportadora = sequelize.define("transportadora",{
    codigo_rastreio : DataTypes.TEXT,
    nome : DataTypes.TEXT,
    URL : DataTypes.TEXT
});

moduleExports = Transportadora;