const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

exports.register = async (req, res) => {
    const { email, password } = req.body;

    try {
        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: "Email already used" });
        }

        const user = await User.create({ email, password });

        return res.status(201).json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id)
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        return res.json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id)
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
