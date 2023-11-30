const mongoose = require('mongoose');
const dreamSchema = new mongoose.Schema({
    title: String,
    description: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // Add more fields as needed (e.g., date, tags, etc.)
});
module.exports = mongoose.model('Dream', dreamSchema);