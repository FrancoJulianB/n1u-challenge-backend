// Middleware
const express = require('express');
const mongoose = require("mongoose");
// const Product = require(   "./models/product.js")
const productRoute = require("./routes/productRoutes.js");
// const Restaurant = require("./models/restaurant.js");
const restaurantsRoute = require("./routes/restaurantRoutes.js");
const requestLogger = require('./middleware/logRequest.js');

const app = express();

app.use(express.json());
app.use(requestLogger);

// routes

app.use("/products", productRoute);
app.use("/restaurants", restaurantsRoute);
app.get("/", (req, res) => {
    res.send("Welcome visitor!");
});

// mongodb
const mongoURI = process.env.MONGODB_URI || "mongodb://mongodb/n1u-challenge";
mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Connection error", error));

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));