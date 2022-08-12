import React from 'react';
import './Hero.css';
import Header from '../Header/Header';

function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div />
          <span>The best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Idea body</span>
          </div>
        </div>
      </div>
      <div className="right-h">right side</div>
    </div>
  );
}

export default Hero;
