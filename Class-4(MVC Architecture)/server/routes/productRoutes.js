const ProductModel = require("../models/product");
const express = require("express");
const {createProduct,updateProduct,getProduct,deleteProduct} = require('../controllers/productControllers')


const router = express.Router();

router.post("/",createProduct);
router.get("/", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
