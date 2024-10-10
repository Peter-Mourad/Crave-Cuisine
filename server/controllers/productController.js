const Product = require('../models/productModel');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const addProduct = async (req, res) => {
    const { productName, price, description } = req.body;

    try {
        const newProduct = new Product({
            productName,
            price,
            description
        });

        await newProduct.save();
        res.status(201).json({message: 'product added successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const editProduct = async (req, res) => {
    const product = await Product.findOne({ productId: req.body.productId });
    if (!product) {
        return res.status(404).json({ error: 'product not found' });
    }

    const newProduct = {
        productName: req.body.productName || product.productName,
        price: req.body.price || product.price,
        description: req.body.description || product.description
    };
    
    try {
        await product.updateOne(newProduct);
        return res.json({ message: 'product updated successfully' });
    } catch (error) {
        return res.status(400).json({ error: 'failed to update product' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const result = await Product.findOneAndDelete({ productId: req.body.productId });
        if (result) {
            return res.json({ message: "product is deleted successfully" });
        }
        return res.status(404).json({ error: "product is not found" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error });
    };
};

module.exports = { addProduct, getProducts, editProduct, deleteProduct};