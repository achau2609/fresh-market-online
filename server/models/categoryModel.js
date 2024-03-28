const mongoose = require("mpngoose");

const categorySchema = mongoose.Schema({
  parentCategory: { type: String, required: false },
  categoryName: { type: String, required: true },
});


module.exports = mongoose.model("Category", categorySchema);