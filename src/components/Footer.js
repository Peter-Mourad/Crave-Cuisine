import React from 'react';
import '../styles/footer.css';
import foodImage from '../assets/food.jpg';

const Footer = () => {
  return (
    <footer>
        <div class="footer-container">
            <div class="footer-logo">
                <h1>Bistro Bliss</h1>
                <p>In the new era of technology we look to the future with certainty and pride for our company and.</p>
                <div class="footer-socials">
                </div>
            </div>
            <div class="footer-links">
                <div>
                    <h3>Pages</h3>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Delivery</li>
                </div>
                <div>
                    <h3>Utility Pages</h3>
                    <li>Start Here</li>
                    <li>Styleguide</li>
                    <li>Password Protected</li>
                    <li>404 Not Found</li>
                    <li>Licenses</li>
                    <li>Changelog</li>
                    <li>View More</li>
                </div>
                <div>
                    <h3>Follow Us On Instagram</h3>
                    <div class="footer-images">
                        <img src={foodImage} alt="Food 1"/>
                        <img src={foodImage} alt="Food 2"/>
                        <img src={foodImage} alt="Food 3"/>
                        <img src={foodImage} alt="Food 4"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 Hashtag Developer. All Rights Reserved</p>
        </div>
    </footer>
  );
};

export default Footer;