const { Sequelize, DataTypes } = require("sequelize");
const Pedido = require('Pedido');
const Produto = require('Produto');

const PedidoProduto = sequelize.define("pedido_produto",{
    id_pedido: {
        type: DataTypes.INTEGER,
        references: {
            model: Pedido,
            key: 'id'
        }
    },
    id_produto: {
        type: DataTypes.INTEGER,
        references: {
            model: Produto,
            key: 'id'
        }
    },
    quant_produto: {
        type: DataTypes.INTEGER
    }
});

module.exports = PedidoProduto;
