import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Book from './pages/Book';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminPanel from './pages/adminPanel';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/book' element={<Book />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {
            (localStorage.getItem('accessToken')) ? 
              <Route path='/adminPanel' element={<AdminPanel />} /> : ""
          }
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;