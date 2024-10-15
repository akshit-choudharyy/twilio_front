import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [customerName, setCustomerName] = useState('');
  const [foodOrderDetails, setFoodOrderDetails] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [foodItems, setFoodItems] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the message body to be sent via WhatsApp
    const messageBody = `
      Customer Name: ${customerName}
      Food Order Details: ${foodOrderDetails}
      Total Price: ${totalPrice}
      Food Items: ${foodItems}
      Current Location: ${currentLocation}
      Description: ${description}
    `;

    // Make a POST request to send form data to the backend
    try {
      await axios.post('http://localhost:5000/send-message', {
        name: customerName,
        message: messageBody,
      });

      alert('Message sent successfully!');
      // Clear the form fields
      setCustomerName('');
      setFoodOrderDetails('');
      setTotalPrice('');
      setFoodItems('');
      setCurrentLocation('');
      setDescription('');
    } catch (error) {
      alert('Failed to send message');
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Send Food Order to WhatsApp</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="foodOrderDetails">Food Order Details:</label>
          <textarea
            id="foodOrderDetails"
            value={foodOrderDetails}
            onChange={(e) => setFoodOrderDetails(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalPrice">Total Price:</label>
          <input
            type="text"
            id="totalPrice"
            value={totalPrice}
            onChange={(e) => setTotalPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="foodItems">Food Items:</label>
          <input
            type="text"
            id="foodItems"
            value={foodItems}
            onChange={(e) => setFoodItems(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="currentLocation">Current Location:</label>
          <input
            type="text"
            id="currentLocation"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Additional Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Send to WhatsApp</button>
      </form>
    </div>
  );
}

export default App;
