// Middleware
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Restaurant = require("./models/restaurant.js");
const Product = require(   "./models/product.js")
const restaurantsRoute = require("./routes/restaurantRoutes.js");
const productRoute = require("./routes/productRoutes.js");
const { logRequest, logError } = require("./middleware/logRequest");


app.use(express.json());
app.use(logRequest);
app.use(logError);

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