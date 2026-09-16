const Product = require("../models/Product");

// POST /products
// Create a new product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Product created",
      product: product
    });
  } catch (error) {
    res.status(400).json({
      message: "Product creation failed",
      error: error.message
    });
  }
};


// GET /products
// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json({
      message: "Products fetched successfully",
      products: products
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message
    });
  }
};


// GET /products/:id
// Get single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json({
      message: "Product fetched successfully",
      product: product
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch product",
      error: error.message
    });
  }
};


// PUT /products/:id
// Update product by ID
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Product updated successfully",
      product: product
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update product",
      error: error.message
    });
  }
};


// DELETE /products/:id
// Delete product by ID
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product deleted successfully",
      product: product
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete product",
      error: error.message
    });
  }
};


module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
};


