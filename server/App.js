require('dotenv').config();
const express = require('express');
const connectDB = require('./configs/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use(userRoutes);
app.use(productRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));