const { Product } = require('../models/productModel'); // Adjust the path as needed
const mongoose = require('mongoose')

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

const createOrUpdateProduct = (req, res) => {

    if (!req.isAdmin)
        return res.status(401).json({ error: "You are not allowed to perform the action." })

    let newProduct = req.body;

    if (!newProduct.ProductName || !newProduct.ProductDescription || !newProduct.ProductPrice || !newProduct.Quantity ||
        !newProduct.CategoryId || !newProduct.Picture)
        return res.status(400).json({ err: 'Invalid Parameter' });


    Product.findByIdAndUpdate(newProduct._id, newProduct, {
        upsert: true
    })
        .then((data) => {
            return res.json({ msg: 'Success' })
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({ err: 'Something went wrong' })
        });
}

const getProductById = (req, res) => {
    if (!req.query.id)
        return res.status(400).json({ err: 'Invalid Parameter' });

    if(!mongoose.isValidObjectId(req.query.id))
        return res.json({});
    
    Product.findById(req.query.id)
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            return res.status(500).json({ err: 'Something went wrong' });
        })
}

const deleteProduct = (req, res) => {

    if (!req.isAdmin)
        return res.status(401).json({ error: "You are not allowed to perform the action." })

    if (!req.query.id)
        return res.status(400).json({ err: 'Invalid Parameter' });

    Product.findByIdAndDelete(req.query.id)
        .then(data => res.json({ msg: 'Success' }))
        .catch(err => {
            console.log(err)
            return res.status(500).json({ err: 'Something went wrong' })
        });

}

module.exports = { getAllProducts, getProductByName, createOrUpdateProduct, deleteProduct, getProductById }