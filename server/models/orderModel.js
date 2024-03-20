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



// TODO: The below line will be remove later

/*
{
  "_id": {
    "$oid": "65d579e5c7bfcc56e1ddd630"
  },
  "Order#": 5001,
  "CustomerId": {
    "$oid": "65d6129033192b070a1a18cd"
  },
  "CustomerName": "John Smith",
  "DeliveryAddress": {
    "Address1": "100 Main St",
    "City": "Metropolis",
    "State": "NY",
    "ZIP": "10001"
  },
  "OrderType": "Delivery",
  "Contact#": "555-1234",
  "PickupDateTime": "2024-03-10T14:00:00Z",
  "Products": [
    {
      "id": {
        "$oid": "65d5796ec7bfcc56e1ddd627"
      },
      "ProductName": "Organic Apples",
      "Quantity": 2,
      "ProductPrice": 4.99,
      "Url": "example.com/products/apples"
    }
  ],
  "Status": "Processing"
}

*/
