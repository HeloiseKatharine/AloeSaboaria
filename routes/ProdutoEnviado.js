const express = require('express');
const router = express.Router('');
const ProdutoEnviadoController = require('../controllers/ProdutoEnviado');

router.post('/', ProdutoEnviadoController.store);
router.get('/', ProdutoEnviadoController.show);
router.delete('/:id', ProdutoEnviadoController.destroy);
router.put('/:id', ProdutoEnviadoController.update);

module.exports = router;