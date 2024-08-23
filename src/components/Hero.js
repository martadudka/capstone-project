import React from "react";


function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src="/restaurant.jpg" alt="Delicious food" />
      </div>
    </div>
  );
}

export default Hero;
