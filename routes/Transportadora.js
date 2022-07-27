const express = require('express');
const router = express.Router('');
const TransportadoraController = require('../controllers/Transportadora');

router.post('/', TransportadoraController.store);
router.get('/', TransportadoraController.show);
router.delete('/:id', TransportadoraController.destroy);
router.put('/:id', TransportadoraController.update);

module.exports = router;