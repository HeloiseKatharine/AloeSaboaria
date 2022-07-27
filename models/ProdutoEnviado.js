const { Sequelize, DataTypes } = require("sequelize");
const Pedido = require('./Pedido');
const Transportadora = require('./Transportadora');

const ProdutoEnviado = sequelize.define("produto_enviado",{
    id_pedido: {
        type: DataTypes.INTEGER,
        references: {
            model: Pedido,
            key: 'id'
        }
    },
    id_transportadora: {
        type: DataTypes.INTEGER,
        references: {
            model: Transportadora,
            key: 'id'
        }
    },
    data_envio : DataTypes.DATE
});

module.exports = ProdutoEnviado;