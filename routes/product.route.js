const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts,getProduct,pushProduct,updateProduct,deleteProduct} = require("../controllers/product.controller.js")

router.get('/',getProducts)
router.get("/:id",getProduct )

router.post('/',pushProduct)

router.put('/:id',updateProduct)

router.delete('/api/product/:id',deleteProduct );


module.exports = router;