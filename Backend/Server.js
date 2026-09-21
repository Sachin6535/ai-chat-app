const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./modules/config/db");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("AI Chat Backend is Running!");
});

connectDB();

app.listen(5000, () => {
    console.log("Server running on port 5000");
});