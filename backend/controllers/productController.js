const Product = require('../models/product');

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });  // Fixed to use status().json()
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });  // Fixed to use status().json()
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });  // Fixed status code and message
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });  // Fixed to use status().json()
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,  // Fixed to use the correct option name
    });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });  // Fixed status code and message
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });  // Fixed to use status().json()
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);  // Fixed parameters
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });  // Fixed status code and message
    }
    res.json({ message: 'Product deleted successfully' });  // Added success message
  } catch (error) {
    res.status(500).json({ error: error.message });  // Fixed to use status().json()
  }
};
