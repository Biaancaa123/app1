const express = require('express');
const router = new express.Router();
const ciudadController = require('../controller/ciudad_controller');

router.get('/', ciudadController.list);
router.get('/find/:id', ciudadController.getById);
router.post('/create', ciudadController.create);
router.put('/update', ciudadController.update);
router.delete('/remove/:id', ciudadController.remove);

module.exports = router;