const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: String,
  company: String,
  price: Number,
  category: String,
});
module.exports = mongoose.model("products", productSchema);
