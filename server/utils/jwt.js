// backend/utils/jwt.js
const jwt = require('jsonwebtoken');

// Function to generate JWT token for a user
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '1h',  // Token expiration time
    });
};

// Function to verify JWT token
const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };