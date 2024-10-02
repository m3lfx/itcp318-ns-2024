const express = require('express');
const router = express.Router();

const { getProducts, getSingleProduct,
    getAdminProducts,
    deleteProduct,

 } = require('../controllers/product');
router.get('/products', getProducts)
router.get('/product/:id', getSingleProduct)
router.get('/admin/products', getAdminProducts);
router.delete('/admin/product/:id', deleteProduct);
module.exports = router