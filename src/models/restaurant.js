const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    photo: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    open_hours: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);