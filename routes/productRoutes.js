const express = require("express");
const { createProduct,getProducts,getProductById,updateProduct,deleteProduct } = require("../controllers/productController");

const router = express.Router();

// Create a new product
router.post("/Create", createProduct);

// Get all products
router.get("/GetAll", getProducts);


// Get single product by ID
router.get("/GetById/:id", getProductById);


// Update product by ID
router.put("/Update/:id", updateProduct);


// Delete product by ID
router.delete("/Delete/:id", deleteProduct);


module.exports = router;


