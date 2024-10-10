// backend/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware to protect routes and check for valid JWT
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    console.log(token);
    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach user ID to the request object
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token, authorization denied' });
    }
};

module.exports = authMiddleware;