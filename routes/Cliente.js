const express = require('express');
const router = express.Router('');
const ClienteController = require('../controllers/Cliente');

router.post('/', ClienteController.store);
router.get('/', ClienteController.show);
router.delete('/:id', ClienteController.destroy);
router.put('/:id', ClienteController.update);

module.exports = router;