const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productDescription: { type: String, required: false },
  productPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  url: { type: String, required: false },
  categoryId: { type: String, required: true },
  picture: { type: [String], required: false },
});

const Product = mongoose.model("PRODUCT", productSchema, 'PRODUCT');
module.exports = { Product };