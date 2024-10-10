import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuCard from "../components/MenuCard";
import "../styles/menu.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  // Fetch data from backend when the component mounts
  useEffect(() => {
    console.log("test");
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products"); // Update this URL with your backend route
        console.log(response.data);
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching the menu items", error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>
      <p className="menu-description">
        We consider all the drivers of change to give you the components you need to create a truly special meal.
      </p>
      <div className="menu-categories">
        <button className="category-button">All</button>
        <button className="category-button">Breakfast</button>
        <button className="category-button">Main Dishes</button>
        <button className="category-button">Drinks</button>
        <button className="category-button">Desserts</button>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;