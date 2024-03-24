const express = require("express");
const { check } = require("express-validator");
const {getRestaurants, getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant} = require("../controllers/restaurantController.js");

const router = express.Router();

// Validate restaurant fields
const validateRestaurant = [
  check("photo").notEmpty().withMessage("La foto es requerida"),
  check("name").notEmpty().withMessage("El nombre es requerido"),
  check("address").notEmpty().withMessage("La dirección es requerida"),
  check("open_hours").notEmpty().withMessage("El horario de apertura es requerido"),
];

// Create a restaurant
router.post("/", validateRestaurant, createRestaurant);

// Get all restaurants
router.get("/", getRestaurants);

// Get a restaurant by ID
router.get("/:id", getRestaurant);

// Delete a restaurant by ID
router.delete("/:id", deleteRestaurant);

// Update a restaurant by ID
router.put("/:id", validateRestaurant, updateRestaurant);

module.exports = router;
