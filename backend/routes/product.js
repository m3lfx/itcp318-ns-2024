const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");

const { getProducts, getSingleProduct,
    getAdminProducts,
    deleteProduct,
    newProduct,

 } = require('../controllers/product');
 const { isAuthenticatedUser, } = require('../middlewares/auth');
 
router.get('/products', getProducts)
router.get('/product/:id', getSingleProduct)
router.get('/admin/products', getAdminProducts);
router.delete('/admin/product/:id', deleteProduct);
router.post('/admin/product/new', isAuthenticatedUser, upload.array('images', 10), newProduct);
module.exports = router