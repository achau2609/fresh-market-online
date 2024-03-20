const mongoose = require("mpngoose");
import ProductModel from "./productModel";

const shoppingCartSchema = mongoose.Schema({
  customerId: { type: mongoose.ObjectId, required: true },
  products: { type: [ProductModel], required: true },
});


module.exports = mongoose.model("ShoppingCart", shoppingCartSchema);



// TODO: The below line will be remove later

/*
{
  "_id": {
    "$oid": "65d579bdc7bfcc56e1ddd62e"
  },
  "CustomerId": {
    "$oid": "65d6129033192b070a1a18cd"
  },
  "Products": [
    {
      "ProductName": "Organic Apples",
      "Quantity": 2,
      "Url": "example.com/products/apples",
      "_id": {
        "$oid": "65d5796ec7bfcc56e1ddd627"
      }
    }
  ]
}
*/