import React from "react";
import "../styles/menuCard.css"; // Import CSS for the card

const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <img src={item.photoUrl} alt={item.name} className="menu-card-image" />
      <h3 className="menu-card-title">{item.productName}</h3>
      <p className="menu-card-price">${item.price}</p>
      <p className="menu-card-description">{item.description}</p>
    </div>
  );
};

export default MenuCard;