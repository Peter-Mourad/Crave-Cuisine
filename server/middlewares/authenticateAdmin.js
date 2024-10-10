const User = require('../models/userModel');

const authenticateAdmin = async (req, res, next) => {
    try {
        const user = await User.findOne({ userId: req.userId });
        if (user.role !== 'admin') {
            return res.status(403).json({ error: `Unauthorized can't access this page `});
        }
        next();
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

module.exports = authenticateAdmin;