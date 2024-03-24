const express = require("express");
const { check } = require("express-validator");
const upload = require("../middleware/multerUpload.js"); 
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/productController.js");

// Validate product fields
const validateProduct = [
  upload.single("photo"),
  check("name").notEmpty().withMessage("El nombre es requerido"),
  check("price").notEmpty().withMessage("El precio es requerido"),
  check("category").notEmpty().withMessage("La categoría es requerida"),
  check("description_offer")
    .notEmpty()
    .withMessage("La descripción de la oferta es requerida"),
  check("price_offer").notEmpty().withMessage("El precio de la oferta es requerido"),
  check("days_offer").isArray({ min: 1 }).withMessage("Se requieren días de oferta"),
  check("valid_hours_offer")
    .isArray({ min: 1 })
    .withMessage("Se requieren horas válidas de oferta"),
];

// Create a product
router.post("/", validateProduct, createProduct);

// Get all products
router.get("/", getProducts);

// Get a product by ID
router.get("/:id", getProduct);

// Delete a product by ID
router.delete("/:id", deleteProduct);

// Update a product by ID
router.put("/:id", validateProduct, updateProduct);

module.exports = router;