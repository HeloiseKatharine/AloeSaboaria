const express = require('express');
const router = express.Router('');
const PedidoController = require('../controllers/Pedido');

router.post('/', PedidoController.store);
router.get('/', PedidoController.show);
router.delete('/:id', PedidoController.destroy);
router.put('/:id', PedidoController.update);

module.exports = router;