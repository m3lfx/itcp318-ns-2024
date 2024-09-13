const Product = require('../models/product')
exports.getProducts = async (req, res, next) => {
    const products = await Product.find();
    const productsCount = await Product.countDocuments();
	if (!products) 
        return res.status(400).json({message: 'error loading products'})
   return res.status(200).json({
        success: true,
        count: productsCount,
        products,
		
    })
}