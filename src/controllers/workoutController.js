const Workout = require("../models/Workout");

exports.createWorkout = async (req, res) => {
    try {
        const workout = await Workout.create({
            user: req.user._id,
            type: req.body.type,
            notes: req.body.notes
        });

        res.status(201).json(workout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({ user: req.user._id }).sort("-date");
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
