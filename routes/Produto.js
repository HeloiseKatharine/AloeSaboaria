const express = require('express');
const router = express.Router('');
const ProdutoController = require('../controllers/Produto');

router.post('/', ProdutoController.store);
router.get('/', ProdutoController.show);
router.delete('/:id', ProdutoController.destroy);
router.put('/:id', ProdutoController.update);

module.exports = router;