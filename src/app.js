const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const workoutRoutes = require("./routes/workouts");

app.use("/api/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);

// Base route
app.get("/", (req, res) => {
    res.json({ message: "Workout Tracker API is running" });
});

module.exports = app;
