const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");

const { getProducts, getSingleProduct,
    getAdminProducts,
    deleteProduct,
    newProduct,
    updateProduct,
    createProductReview,
    getProductReviews,
    deleteReview,
    productSales,

 } = require('../controllers/product');
 const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.get('/products', getProducts)
router.get('/product/:id', getSingleProduct)
router.get('/admin/products', isAuthenticatedUser, authorizeRoles('admin'), getAdminProducts);
router.route('/admin/product/:id', isAuthenticatedUser, authorizeRoles('admin')).delete(deleteProduct).put(updateProduct);
router.post('/admin/product/new', isAuthenticatedUser, authorizeRoles('admin'), upload.array('images', 10), newProduct);
router.put('/review', isAuthenticatedUser, createProductReview);
router.get('/reviews', getProductReviews)
router.delete('/reviews', isAuthenticatedUser, authorizeRoles('admin'), deleteReview)
router.get('/admin/product-sales', productSales);
module.exports = router