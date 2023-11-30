const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'YOUR_SECRET_KEY');
        req.user = decoded; // Attach user info (e.g., userId) to request
        next();
    } catch (error) {
        res.status(401).send('Please authenticate.');
    }
};
module.exports = authMiddleware;