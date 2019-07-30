import React from 'react';

const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <img src={require('./img/house-1.jpeg')} alt=""/>
        <h3>Beautiful Family House</h3>
        <div className="details">
          <span>USA</span>
          <span>5 rooms</span>
          <span>USA</span>
          <span>$1,200,000</span>
        </div>
        <button>CONTACT REALTOR</button>
      </div>
      <div className="card">
        <img src={require('./img/house-2.jpeg')} alt=""/>
        <h3>Modern Glass Villa</h3>
        <div className="details">
          <span>USA</span>
          <span>5 rooms</span>
          <span>USA</span>
          <span>$1,200,000</span>
        </div>
        <button>CONTACT REALTOR</button>
      </div>
      <div className="card">
        <img src={require('./img/house-3.jpeg')} alt=""/>
        <h3>Cozzy Country House</h3>
        <div className="details">
          <span>USA</span>
          <span>5 rooms</span>
          <span>USA</span>
          <span>$1,200,000</span>
        </div>
        <button>CONTACT REALTOR</button>
      </div>
      <div className="card">
        <img src={require('./img/house-4.jpeg')} alt=""/>
        <h3>Large Rustical Villa</h3>
        <div className="details">
          <span>USA</span>
          <span>5 rooms</span>
          <span>USA</span>
          <span>$1,200,000</span>
        </div>
        <button>CONTACT REALTOR</button>
      </div>
      <div className="card">
        <img src={require('./img/house-5.jpeg')} alt=""/>
        <h3>Majestic Palase House</h3>
        <div className="details">
          <span>USA</span>
          <span>5 rooms</span>
          <span>USA</span>
          <span>$1,200,000</span>
        </div>
        <button>CONTACT REALTOR</button>
      </div>
      <div className="card">
        <img src={require('./img/house-6.jpeg')} alt=""/>
        <h3>Modern Family Apartment</h3>
        <div className="details">
          <span>USA</span>
          <span>5 rooms</span>
          <span>USA</span>
          <span>$1,200,000</span>
        </div>
        <button>CONTACT REALTOR</button>
      </div>
    </div>
  );
}

export default Cards;