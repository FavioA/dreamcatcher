const User = require('./models/User');
const Dream = require('./models/Dream');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    currentUser: async (parent, args, context) => {
        // Ensure user is authenticated
        if (!context.user) {
            throw new AuthenticationError('Not Authenticated');
        }
        // Find and return the current user
        return await User.findById(context.user._id);
    },
    userDreams: async (parent, args, context) => {
        // Ensure user is authenticated
        if (!context.user) {
            throw new AuthenticationError('Not Authenticated');
        }
        // Find and return dreams for the current user
        return await Dream.find({ user: context.user._id });
    },
  },
  Mutation: {
    signUp: async (parent, { username, email, password }, context) => {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists with that email');
        }

        // Hash the password and create a new user
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        // Create a JWT token
        const token = jwt.sign(
            { _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Return the authentication payload
        return { token, user };
    },
    login: async (parent, { email, password }, context) => {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            throw new AuthenticationError('No user found with that email');
        }

        // Check the password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new AuthenticationError('Invalid password');
        }

        // Create a JWT token
        const token = jwt.sign(
            { _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Return the authentication payload
        return { token, user };
    }
    // Add other mutations here as needed
  }
};

module.exports = resolvers;
