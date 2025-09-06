const ProductModel = require('../models/product')

const getProduct = async (req, res) => {
  
}
const createProduct = async (req, res) => {
  let course = await ProductModel.create({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    isInStock: req.body.isInStock,
    ratings: req.body.ratings,
  });
  res.send(course);
}
const updateProduct = async (req, res) => {
  
}
const deleteProduct = async (req, res) => {
  
}


module.exports = {createProduct,updateProduct,getProduct,deleteProduct}