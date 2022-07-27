const express = require('express');
const router = express.Router('');
const PedidoProdutoController = require('../controllers/PedidoProduto');

router.post('/', PedidoProdutoController.store);
router.get('/', PedidoProdutoController.show);
router.delete('/:id', PedidoProdutoController.destroy);
router.put('/:id', PedidoProdutoController.update);

module.exports = router;