const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET /products
router.get('/', productController.getAllProducts);

// POST /products
router.post('/', productController.addProduct);

module.exports = router;

