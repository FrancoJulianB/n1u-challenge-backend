const { validationResult } = require("express-validator");
const Product = require("../models/product");
const Image = require("../models/image");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Save image if exists
    let savedImage;
    if (req.file) {
      savedImage = await Image.create({
        filename: req.file.originalname,
        mimetype: req.file.mimetype,
      });
    }
    // Create product with reference to the saved image
    const product = await Product.create({
      ...req.body,
      // Add photo field only if image is provided
      ...(savedImage && { photo: savedImage._id }), 
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    // Check if product exists
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Save image if exists
    let savedImage;
    if (req.file) {
      savedImage = await Image.create({
        filename: req.file.originalname,
        mimetype: req.file.mimetype,
      });
    }
    // Update product
    const updatedProductData = {
      ...req.body,
      // Update photo only if a new image is provided
      ...(savedImage && { photo: savedImage._id }),
    };
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedProductData, { new: true });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
