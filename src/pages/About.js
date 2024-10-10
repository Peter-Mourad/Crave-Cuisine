import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="aboutpage">
      <section className="about-hero-section">
        <div className="about-image">
          <img src="https://img.freepik.com/free-photo/world-health-day-celebration-with-healthy-food_23-2151244737.jpg" alt="About Us" />
        </div>
        <div className="about-content">
          <h1>We provide healthy food for your family.</h1>
          <p>Our story began with a vision to create a unique dining experience...</p>
          <address>
            <p>Come and visit us:</p>
            <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
            <p>Call: (414) 857 – 0107</p>
            <p>Email: happy.tummy@restaurant.com</p>
          </address>
        </div>
      </section>
      
      <section className="about-details-section">
        <div className="detail">
          <h3>3</h3>
          <p>Locations</p>
        </div>
        <div className="detail">
          <h3>1995</h3>
          <p>Founded</p>
        </div>
        <div className="detail">
          <h3>65+</h3>
          <p>Staff Members</p>
        </div>
        <div className="detail">
          <h3>100%</h3>
          <p>Satisfied Customers</p>
        </div>
      </section>
      
      <section className="testimonial-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial">"The best restaurant..."</div>
          <div className="testimonial">"Simply delicious..."</div>
          <div className="testimonial">"One of a kind..."</div>
        </div>
      </section>
    </div>
  );
};

export default About;