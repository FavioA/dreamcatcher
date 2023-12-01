const jwt = require('jsonwebtoken');
const User = require('../models/User');

const getUserFromToken = (token) => {
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const auth = {
  async getUser(req) {
    const token = req.headers.authorization || '';
    if (token) {
      const user = getUserFromToken(token);
      const foundUser = await User.findById(user.userId);
      return foundUser;
    }
    return null;
  },
};

module.exports = auth;
