// src/components/DisplayItems.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="container">
      <h2>Available Items</h2>
      <ul className="list-group">
        {items.map(item => (
          <li key={item.id} className="list-group-item">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayItems;