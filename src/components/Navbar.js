import React from 'react';
import '../styles/navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Bistro Bliss
        </Link>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-links">Home</Link></li>
          <li><Link to="/about" className="nav-links">About</Link></li>
          <li><Link to="/contact" className="nav-links">Contact</Link></li>
          <li><Link to="/menu" className="nav-links">Menu</Link></li>
        </ul>
        <div>
          <button className="btn-table"
            onClick={() => navigate('/book')}
          >
              Book A Table
          </button>
          <button className="register"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
          <button className="login"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          {
            (localStorage.getItem("role")==='admin') ?
              <button className="admin panel"
                onClick={() => navigate('/adminPanel')}
              >
                admin panel
              </button> : ""
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;