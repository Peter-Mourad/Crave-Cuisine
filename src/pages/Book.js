// BookingPage.js
import React, { useState } from 'react';
import '../styles/book.css';

const Book = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to an API.
    console.log({ name, date, time, people });
    alert('Table booked!');
  };

  return (
    <div className="booking-container">
      <h1>Book a Table</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input 
            type="date" 
            id="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input 
            type="time" 
            id="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="people">Number of People:</label>
          <input 
            type="number" 
            id="people" 
            value={people} 
            onChange={(e) => setPeople(e.target.value)} 
            min="1" 
            required 
          />
        </div>
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
};

export default Book;
