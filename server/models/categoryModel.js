const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  _id: { type: mongoose.ObjectId, required: true },
  parentCategory: { type: String, required: false },
  categoryName: { type: String, required: true },
});


module.exports = mongoose.model("Category", categorySchema, "CATEGORY");