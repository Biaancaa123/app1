const express = require('express');
const router = new express.Router();
const hospitalController = require('../controller/hospital_controller');

router.get('/', hospitalController.list);
router.get('/find/:id', hospitalController.getById);
router.post('/create', hospitalController.create);
router.put('/update', hospitalController.update);
router.delete('/remove/:id', hospitalController.remove);

module.exports = router;