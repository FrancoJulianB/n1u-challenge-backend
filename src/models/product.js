const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description_offer: {
        type: String,
        required: false,
    },
    price_offer: {
        type: Number,
        required: false,
    },
    days_offer: {
        type: Array,
        required: false,
    },
    valid_hours_offer: {
        type: Array,
        required: false,
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurante',
        required: true,
    },
});

module.exports = mongoose.model('Product', ProductSchema);