const mongoose = require("mpngoose");
import ProductModel from "./productModel";

const deliveryAddressSchema = mongoose.Schema({
  address1: { type: String, required: true },
  city: { type: String, required: false },
  state: { type: String, required: false },
  zip: { type: String, required: false },
});

const orderSchema = mongoose.Schema({
  orderNo: { type: Number, required: true },
  customerId: { type: mongoose.ObjectId, required: true },
  customerName: { type: String, required: true },
  deliveryAddress: { type: deliveryAddressSchema, required: true },
  orderType: { type: String, required: false },
  contactNo: { type: String, required: false },
  pickupDateTime: { type: Date, default: Date.now },
  products: { type: [ProductModel], required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model("Order", orderSchema);