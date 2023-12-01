const User = require('../models/User');
const Dream = require('../models/Dream');

const queries = {
  async currentUser(_, args, { user }) {
    if (!user) throw new Error('You are not authenticated');
    return await User.findById(user.userId);
  },

  async userDreams(_, args, { user }) {
    if (!user) throw new Error('You are not authenticated');
    return await Dream.find({ user: user.userId });
  },

};

module.exports = queries;
