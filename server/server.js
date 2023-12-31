const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { ApolloServer } = require('@apollo/server');
const {typeDefs, resolvers} = require('./schemas');

const authRoutes = require('./routes/authRoutes');
const dreamRoutes = require('./routes/dreamRoutes');
// Add other route imports here

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dreamcatcher')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/dreams', dreamRoutes);
// Add other routes here

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});