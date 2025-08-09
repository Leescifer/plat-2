const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller')


router.get('/products', productController.index);
router.get('/products/:id', productController.show);
router.post('/products', productController.store);

module.exports = router;