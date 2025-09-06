const mongoose = require("mongoose");

const ProductModel = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: String,
    required: true,
  },
  isInStock: {
    type: Boolean,
    required: true,
  },
  ratings: {
    type: Number,
  },
});
let product_model = mongoose.model("products", ProductModel);

module.exports = product_model