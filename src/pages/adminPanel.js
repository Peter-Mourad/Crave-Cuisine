// AdminPanel.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/adminPanel.css"

const AdminPanel = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        productId: "",
        productName: "",
        price: "",
        description: "",
    });
    const [editProduct, setEditProduct] = useState(null);

    // Fetch products initially
    useEffect(() => {
        const fetchProductItems = async () => {
            try {
                const response = await axios.get("http://localhost:3000/products");
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }    
        }
        fetchProductItems();
    }, []);

  // Handle input changes for the product form
  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewProduct({ ...newProduct, [name]: value });
  };

  const headers = {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
  }
  // Add a new product
  const addProduct = () => {
    axios
      .post("http://localhost:3000/product", newProduct, { headers })
      .then((response) => {
        setProducts([...products, response.data]);
        setNewProduct({ productId: "", productName: "", price: "", description: "" });
        window.location.reload();
      })
      .catch((error) => console.error("Error adding product:", error));
  };

  // Edit a product
  const updateProduct = () => {
    axios
      .put(`http://localhost:3000/product`, editProduct, {headers} )
      .then((response) => {
        const updatedProducts = products.map((product) =>
          product.productId === editProduct.productId ? response.data : product
        );
          setProducts(updatedProducts);
          setEditProduct(null);
          window.location.reload();
      })
      .catch((error) => console.error("Error editing product:", error));
  };

  // Delete a product
  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:3000/product`, {
        headers,
        data: {productId}
      })
      .then(() => {
        setProducts(products.filter((product) => product.productId !== productId));
        window.location.reload();
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      
      {/* Add Product Form */}
      <div>
        <h2>Add Product</h2>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={newProduct.productName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* Edit Product Form */}
      {editProduct && (
        <div>
          <h2>Edit Product</h2>
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            value={editProduct.productName}
            onChange={(e) => setEditProduct({ ...editProduct, productName: e.target.value })}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={editProduct.price}
            onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={editProduct.description}
            onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
          />
          <button onClick={updateProduct}>Update Product</button>
          <button onClick={() => setEditProduct(null)}>Cancel</button>
        </div>
      )}

      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <button onClick={() => setEditProduct(product)}>Edit</button>
                <button onClick={() => deleteProduct(product.productId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;