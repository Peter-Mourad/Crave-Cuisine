const express = require('express');
const { addProduct, getProducts, editProduct, deleteProduct } = require('../controllers/productController');
const authMiddleware = require('../middlewares/auth');
const authenticateAdmin = require('../middlewares/authenticateAdmin');
const router = express.Router();

router.post('/product', authMiddleware, authenticateAdmin,  addProduct);
router.put('/product', authMiddleware, authenticateAdmin, editProduct);
router.delete('/product', authMiddleware, authenticateAdmin, deleteProduct);
router.get('/products', getProducts);

module.exports = router;