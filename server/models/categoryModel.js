const mongoose = require("mpngoose");

const categorySchema = mongoose.Schema({
  parentCategory: { type: String, required: false },
  categoryName: { type: String, required: true },
});


module.exports = mongoose.model("Category", categorySchema);


// TODO: The below line will be remove later
/*
{
  "_id": {
    "$oid": "65d6ada7c837e9f2b8765133"
  },
  "parentCategory": "Fruits & Vegetables",
  "categoryName": "Fresh Vegetables"
}
*/