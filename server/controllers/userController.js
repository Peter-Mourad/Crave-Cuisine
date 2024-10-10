const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('../utils/jwt');

const registerUser = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'This email arleady registered to another Account!' });

        // hash the password using bcrypt library
        const hashedPassword = await bcrypt.hash(password, 10);

        // initialize user object
        user = new User({
            username,
            email,
            password: hashedPassword,
            role: role
        });

        await user.save();

        // Generate token
        const token = await jwt.generateToken(user.userId);

        res.status(201).json({ token: token, userId: user.userId, role: user.role });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {  
        // try to find user with the given email first
        let user = await User.findOne({ username });
        if (!user) return res.status(400).json({ error: 'Invalid credentials' });

        // compare hashed password with entered password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ error: 'Invalid credentials' });

        console.log('match');

        // Generate token
        const token = await jwt.generateToken(user.userId);
        
        res.status(200).json({ token: token, userId: user.userId, role: user.role });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { registerUser, loginUser };