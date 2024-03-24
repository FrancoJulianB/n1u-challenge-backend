const { validationResult } = require("express-validator");
const Restaurant = require("../models/restaurant");
const Image = require("../models/image");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRestaurant = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Save image
    const savedImage = await Image.create({
      filename: req.file.originalname,
      mimetype: req.file.mimetype,
    });
    // Create restaurant with reference to the saved image
    const { name, address, open_hours } = req.body;
    const restaurant = new Restaurant({
      name,
      address,
      open_hours,
      photo: savedImage._id
    });
    await restaurant.save();
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    // Check if restaurant exists
    const existingRestaurant = await Restaurant.findById(id);
    if (!existingRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
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
    // Update restaurant
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, {
      ...req.body,
   // Update photo only if a new image is provided
      ...(savedImage && { photo: savedImage._id }),
    }, { new: true });
    
    res.status(200).json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findByIdAndDelete(id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
};
