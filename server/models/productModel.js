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

// TODO: The below line will remove later
/*
{
  "_id": {
    "$oid": "65d5796ec7bfcc56e1ddd627"
  },
  "ProductName": "Organic Apples",
  "ProductDescription": "Organic Fresh Apples (Bag 2lb)",
  "ProductPrice": 5.99,
  "Quantity": 150,
  "Url": "example.com/products/organic-apples",
  "CategoryId": "fruit",
  "Picture": [
    "https://assets.shop.loblaws.ca/products/20606349001/b1/en/front/20606349001_front_a06.png",
    "https://theproduceguyz.com/cdn/shop/products/image_38f13c69-1f3b-4a3f-86d5-14a06180efa8.jpg?v=1603080352",
    "https://meridianfarmmarket.ca/cdn/shop/products/Apples-5lb.jpg?v=1673029747",
    "https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/bffcf967-09f4-4b0f-8b39-9fc65641cd57/500x500.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Mq0gUqWH4geNQrBCTVqwjMOqsHRybLsUqw&usqp=CAU"
  ]
}
*/
