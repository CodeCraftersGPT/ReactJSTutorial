// src/components/Home.js
import React from 'react';
import {  useNavigate } from 'react-router';



function Home() {
const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
      <button onClick={() => navigate('order')}>Proceed To Order</button>
    </div>
  );
}

export default Home;
