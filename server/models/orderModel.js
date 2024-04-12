const mongoose = require("mongoose");

const { productSchema } = require("./productModel")

const deliveryAddressSchema = mongoose.Schema({
  Address1: { type: String, required: true },
  City: { type: String, required: false },
  State: { type: String, required: false },
  ZIP: { type: String, required: false },
  _id: false
});

const orderSchema = mongoose.Schema({
  _id: { type: mongoose.ObjectId, required: true },
  orderNo: { type: Number, required: true },
  CustomerId: { type: mongoose.ObjectId, required: true },
  CustomerName: { type: String, required: true },
  DeliveryAddress: { type: deliveryAddressSchema, required: true },
  OrderType: { type: String, required: false },
  ContactNo: { type: String, required: false },
  PickupDateTime: { type: Date, default: Date.now },
  Products: { type: [productSchema], required: true },
  Status: { type: String, required: true },
  orderDate: { type: Date, required: true },
});

module.exports = mongoose.model("Order", orderSchema, "ORDER");
