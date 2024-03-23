const express = require('express');
const mongoose = require("mongoose");
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const mongoURI = `mongodb://localhost/mongodb/n1u-challenge`;
const app = express();
const port = process.env.PORT || 9000;

// routes
app.get("/", (req, res) => {
    res.send("Welcome visitor!");
  });

// mongodb
mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Connection error", error));


app.listen(port, () => console.log(`Server running on port ${port}`));