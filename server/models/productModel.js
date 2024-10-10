const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    default: ()=> uuidv4(),
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: false
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;