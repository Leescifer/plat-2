const Product = require('../model/products.model');

exports.index = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            message: 'Success',
            data: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

exports.show = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }
        res.status(200).json({
            message: 'Success',
            data: product
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

exports.store = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json({
            message: 'Product created succesfully',
            data: savedProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        })
    }
}