import React from 'react';
import './Deals.css';
import ladakh from '../../assets/ladakh.jpeg';
import goa from '../../assets/goa.jpeg';
import switzerland from '../../assets/switzerland.jpeg';
import maldieves from '../../assets/maldieves.jpeg';
import callifornia from '../../assets/callifornia.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Deals() {
  return (
    <div>
        <div className="deals">
        <div className="deal">
            <p><i className="fa-solid fa-plane"></i>Tour Package</p>
            <p><i className="fa-solid fa-hotel"></i>Hotel</p>
            <p><i className="fa-solid fa-car"></i>Transport</p>
        </div>
        <div className="row">
            <div className="deal-item">
              <img src={ladakh} alt="Ladakh" />
              <div className="caption">
              <p>Discover, Plan, and Experience with TravelHuB!</p>
            </div>
              <div className="content">
                <div className="content-top">
                  <h3><a href="package-details.html">4N Exciting Domestic Trip - Rich Culture, History, and Cuisine.</a></h3>
                </div>
                <div className="price-box">
                  <div className="price-info">
                    <span>Starting From:</span>
                    <h4>₹16,000</h4>
                    <p>TAXES INCL/PERS</p>
                  </div>
                  <button className="book-btn">Book A Trip ✈</button>
                </div>
              </div>
            </div>
            <div className="deal-item">
              <img src={goa} alt="Goa" />
              <div className="content">
                <div className="content-top">
                  <h3><a href="package-details.html">8N Exciting Domestic Trip- Special Package.</a></h3>
                </div>
                <div className="price-box">
                  <div className="price-info">
                    <span>Starting From:</span>
                    <h4>₹28,000</h4>
                    <p>TAXES INCL/PERS</p>
                  </div>
                  <button className="book-btn">Book A Trip ✈</button>
                </div>
              </div>
            </div>
            <div className="deal-item">
              <img src={switzerland} alt="Switzerland" />
              <div className="content">
                <div className="content-top">
                  <h3><a href="package-details.html">3N Magical Gateway- Special Package.</a></h3>
                </div>
                <div className="price-box">
                  <div className="price-info">
                    <span>Starting From:</span>
                    <h4>₹17,000</h4>
                    <p>TAXES INCL/PERS</p>
                  </div>
                  <button className="book-btn">Book A Trip ✈</button>
                </div>
              </div>
            </div>
        </div>
        <div className="row">
            <div className="deal-item">
              <img src={maldieves} alt="Maldieves" />
              <div className="content">
                <div className="content-top">
                  <h3><a href="package-details.html">3N Fun Domestic Holiday.</a></h3>
                </div>
                <div className="price-box">
                  <div className="price-info">
                    <span>Starting From:</span>
                    <h4>₹16,000</h4>
                    <p>TAXES INCL/PERS</p>
                  </div>
                  <button className="book-btn">Book A Trip ✈</button>
                </div>
              </div>
            </div>
            <div className="deal-item">
              <img src={callifornia} alt="California" />
              <div className="content">
                <div className="content-top">
                  <h3><a href="package-details.html">2N Short Domestic Holiday- Special Package.</a></h3>
                </div>
                <div className="price-box">
                  <div className="price-info">
                    <span>Starting From:</span>
                    <h4>₹9999</h4>
                    <p>TAXES INCL/PERS</p>
                  </div>
                  <button className="book-btn">Book A Trip ✈</button>
                </div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Deals;
