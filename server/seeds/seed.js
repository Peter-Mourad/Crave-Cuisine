require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/productModel');

// Connect to the database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

// Seed data
const menuItems = [
  {
    productName: 'Fried Eggs',
    price: 9.99,
    description: 'Made with eggs, lettuce, salt, oil, and other ingredients.',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Fried_Egg_2.jpg/440px-Fried_Egg_2.jpg',
  },
  {
    productName: 'Hawaiian Pizza',
    price: 15.99,
    description: 'Made with pineapple, ham, mozzarella cheese, and tomato sauce.',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Pizza_with_pineapple.jpg/440px-Pizza_with_pineapple.jpg',
  },
  {
    productName: 'Martinez Cocktail',
    price: 7.25,
    description: 'A perfect blend of gin, sweet vermouth, maraschino, and bitters.',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/15-09-26-RalfR-WLC-0084.jpg/500px-15-09-26-RalfR-WLC-0084.jpg',
  },
  {
    productName: 'Mint Lemonade',
    price: 5.89,
    description: 'Refreshing lemonade with a hint of fresh mint.',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Lemon_%26_Mint.jpg/440px-Lemon_%26_Mint.jpg',
  },
  {
    productName: 'Chocolate Ice Cream',
    price: 18.05,
    description: 'Rich and creamy chocolate ice cream made with pure cocoa.',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Ice_cream_cone_%28cropped%29.jpg/440px-Ice_cream_cone_%28cropped%29.jpg',
  },
  {
    productName: 'Cheese Burger',
    price: 12.55,
    description: 'Juicy burger topped with melted cheese, lettuce, and tomato.',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/440px-Cheeseburger.jpg',
  },
  {
    productName: 'Classic Waffles',
    price: 12.99,
    description: 'Fluffy waffles served with fresh berries and syrup.',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Waffles_with_Strawberries.jpg/440px-Waffles_with_Strawberries.jpg',
  },
  {
    productName: 'Caesar Salad',
    price: 10.50,
    description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Caesar_salad_%282%29.jpg/440px-Caesar_salad_%282%29.jpg',
  },
  {
    productName: 'Pasta Primavera',
    price: 13.99,
    description: 'Pasta tossed with fresh vegetables and a light garlic sauce.',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Spaghetti_bolognese_%28hozinja%29.jpg/360px-Spaghetti_bolognese_%28hozinja%29.jpg',
  }
];

// Function to insert menu items into the database
const seedDB = async () => {
  try {
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(menuItems); // Insert the menu items
    console.log("Database seeded with menu items!");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    mongoose.connection.close(); // Close the connection after seeding
  }
};

seedDB();