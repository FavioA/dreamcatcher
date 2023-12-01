const express = require('express');
const Dream = require('../models/Dream');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have an authentication middleware
const router = express.Router();
// Middleware to verify the token and protect routes
router.use(authMiddleware);
// POST route to add a new dream
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;
        const userId = req.user.userId; // Assuming user's ID is attached to req.user by authMiddleware
        const newDream = new Dream({ title, description, user: userId });
        await newDream.save();
        res.status(201).json(newDream);
    } catch (error) {
        res.status(500).send('Error saving dream');
    }
});
// GET route to retrieve all dreams of a user
router.get('/', async (req, res) => {
    try {
        const userId = req.user.userId;
        const dreams = await Dream.find({ user: userId });
        res.status(200).json(dreams);
    } catch (error) {
        res.status(500).send('Error fetching dreams');
    }
});
// Add more routes as needed (e.g., delete dream, update dream, etc.)
module.exports = router;