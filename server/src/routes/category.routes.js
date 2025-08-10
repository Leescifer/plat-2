const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category.controller');

router.get('/categories', categoryController.index);
router.get('/categories', categoryController.show);
router.post('/categories', categoryController.store);
router.put('/categories', categoryController.update);
router.delete('/categories', categoryController.destroy);

module.exports = router;