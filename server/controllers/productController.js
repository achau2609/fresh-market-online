const mongoose = require('mongoose');
const { Product } = require('../models/productModel'); // Adjust the path as needed

// Get all products
const getAllProducts = (req, res) => {
    let query = {};
    if (req.query.category) {
        query.CategoryId = req.query.category;
    }

    Product.find(query)
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to retrieve products', msg: err });
        });
};

// Get a single product by ID
const getProductByName = (req, res) => {
    const productName = req.params.name;

    Product.find({ ProductName: productName })
        .then(products => {
            if (products && products.length > 0) {
                res.json(products);
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to retrieve product', msg: err });
        });
};

const createOrUpdateProduct = () => {
    return 
}

const deleteProduct = () => {
    return 
}

module.exports = {getAllProducts, getProductByName, createOrUpdateProduct, deleteProduct}