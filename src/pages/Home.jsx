import { useState } from "react";
import homeVideo from "../assets/videos/home-video.mp4";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";

import playStore from "../assets/images/Google_Play_Store_badge.png";
import appStore from "../assets/images/download-on-the-app-store.png";
import appPreview from "../assets/images/Designer__5_-removebg-preview.png";

import "../styles/home.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [busType, setBusType] = useState("");

  const searchBus = () => {
    alert(`Searching buses from ${fromCity} to ${toCity} on ${journeyDate}`);
  };

  return (
    <>
      <Header />
      {/* HERO SECTION */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={homeVideo} type="video/mp4" />
        </video>

        <div className="hero-content">
          <h1>TripBuddy – Book Smart. Travel Easy.</h1>

          <div className="search-box">
            <div className="input-group">
              <input
                type="text"
                placeholder="From City"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                placeholder="To City"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
              />
            </div>

            <input
              type="date"
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
            />

            <select
              value={busType}
              onChange={(e) => setBusType(e.target.value)}
            >
              <option value="">All Bus Types</option>
              <option value="ac">AC</option>
              <option value="non-ac">Non-AC</option>
              <option value="sleeper">Sleeper</option>
              <option value="semi-sleeper">Semi-Sleeper</option>
              <option value="volvo">Volvo</option>
            </select>

            <button onClick={searchBus}>Search</button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <h2>Why Choose <span>TripBuddy</span>?</h2>
          <div className="features">
            <div className="feature-card">
              <i className="fa-solid fa-bolt"></i>
              <h3>Instant Booking</h3>
              <p>Book your bus ticket instantly with real-time availability.</p>
            </div>
            <div className="feature-card">
              <i className="fa-solid fa-bus"></i>
              <h3>Wide Network</h3>
              <p>We cover 70+ cities and 2000+ routes across India.</p>
            </div>
            <div className="feature-card">
              <i className="fa-solid fa-user-shield"></i>
              <h3>Safe & Secure</h3>
              <p>Verified buses with tracking, CCTV, and emergency support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HELP */}
      <section className="help-section" id="help">
        <h2>Need Help?</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h4>How do I book a ticket?</h4>
            <p>You can search buses and make payment securely online.</p>
          </div>
          <div className="faq-item">
            <h4>Can I cancel my ticket?</h4>
            <p>Yes, cancellation is available before departure.</p>
          </div>
          <div className="faq-item">
            <h4>Whom should I contact for support?</h4>
            <p>Contact our 24x7 support team via email at <strong>support@gobus.in</strong> or call us at
              <strong>1800-123-4567</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Popular Routes Section --> */}
      <section className="popular-routes">
        <h2>Popular <span>Routes</span></h2>
        <div className="route-cards">
          <div className="route-card">
            <i className="fa-solid fa-route"></i>
            <h3>Chennai → Bengaluru</h3>
            <p>15+ buses daily</p>
          </div>
          <div className="route-card">
            <i className="fa-solid fa-route"></i>
            <h3>Hyderabad → Vijayawada</h3>
            <p>20+ options available</p>
          </div>
          <div className="route-card">
            <i className="fa-solid fa-route"></i>
            <h3>Coimbatore → Madurai</h3>
            <p>AC / Non-AC buses</p>
          </div>
          <div className="route-card">
            <i className="fa-solid fa-route"></i>
            <h3>Trichy → Chennai</h3>
            <p>Volvo Sleeper available</p>
          </div>
          <div className="route-card">
            <i className="fa-solid fa-route"></i>
            <h3>Madurai → Tirunelveli</h3>
            <p>Luxury & Budget buses</p>
          </div>
          <div className="route-card">
            <i className="fa-solid fa-route"></i>
            <h3>Salem → Coimbatore</h3>
            <p>Every hour departures</p>
          </div>
        </div>
      </section>

      {/* <!-- Offers Carousel Section --> */}
      <section className="offers-carousel" id="offers">
        <h2>Today’s <span>Top Offers</span></h2>
        <div className="carousel-container">
          <div className="carousel-track">
            {/* <!-- Original Set --> */}
            <div className="offer-card">
              <i className="fa-solid fa-tag"></i>
              <h3>Flat 20% OFF</h3>
              <p>Use code <strong>FIRST20</strong> on your first booking</p>
            </div>
            <div className="offer-card">
              <i className="fa-solid fa-bolt"></i>
              <h3>Instant Cashback</h3>
              <p>Get ₹100 back on UPI payments</p>
            </div>
            <div className="offer-card">
              <i className="fa-solid fa-wallet"></i>
              <h3>Wallet Offer</h3>
              <p>Recharge your wallet & get ₹50 extra</p>
            </div>
            <div className="offer-card">
              <i className="fa-solid fa-ticket"></i>
              <h3>Weekend Deal</h3>
              <p>10% off on bookings for Sat/Sun</p>
            </div>
            <div className="offer-card">
              <i className="fa-solid fa-gift"></i>
              <h3>First Ride Free</h3>
              <p>New users get their first bus ticket absolutely free*</p>
            </div>
            <div className="offer-card">
              <i className="fa-solid fa-graduation-cap"></i>
              <h3>Student Special</h3>
              <p>Students get 15% off with valid ID</p>
            </div>
            <div className="offer-card">
              <i className="fa-solid fa-user-plus"></i>
              <h3>Refer & Earn</h3>
              <p>Refer friends & earn ₹50 per sign-up</p>
            </div>

            {/* <!-- Duplicated Set for Seamless Loop --> */}
            <div className="offer-card">
              <i className="fa-solid fa-tag"></i>
              <h3>Flat 20% OFF</h3>
              <p>Use code <strong>FIRST20</strong> on your first booking</p>
            </div>
            <div className="offer-card">
              <i className="fa-solid fa-bolt"></i>
              <h3>Instant Cashback</h3>
              <p>Get ₹100 back on UPI payments</p>
            </div>
            <div className="offer-card">
              <i className="fa-solid fa-wallet"></i>
              <h3>Wallet Offer</h3>
              <p>Recharge your wallet & get ₹50 extra</p>
            </div>
            <div className="offer-card">
              <i className="fa-solid fa-ticket"></i>
              <h3>Weekend Deal</h3>
              <p>10% off on bookings for Sat/Sun</p>
            </div>
            <div className="offer-card">
              <i className="fa-solid fa-gift"></i>
              <h3>First Ride Free</h3>
              <p>New users get their first bus ticket absolutely free*</p>
            </div>
            <div className="offer-card">
              <i className="fa-solid fa-graduation-cap"></i>
              <h3>Student Special</h3>
              <p>Students get 15% off with valid ID</p>
            </div>
            <div className="offer-card">
              <i className="fa-solid fa-user-plus"></i>
              <h3>Refer & Earn</h3>
              <p>Refer friends & earn ₹50 per sign-up</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-section">
        <h2>What Our <span>Customers Say</span></h2>
        <div className="review-cards">
          <div className="review-card">
            <img src={user2} alt="User 1" />
            <h3>Priya S.</h3>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Booked a sleeper bus to Chennai. Super smooth experience. Will use again!"</p>
          </div>

          <div className="review-card">
            <img src={user1} alt="User 2" />
            <h3>Rahul M.</h3>
            <div className="stars">⭐⭐⭐⭐</div>
            <p>"App is easy to use and booking was instant. Loved the offers!"</p>
          </div>

          <div className="review-card">
            <img src={user3} alt="User 3" />
            <h3>Meena K.</h3>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Isha trip la GoBus use panen. Very safe and clean buses. Highly recommend."</p>
          </div>
        </div>
      </section>

      {/* App Promo Section */}
      <section className="app-download-section">
        <div className="app-content">
          <h2>
            Download the <span>GoBus App</span>
          </h2>
          <p>
            Book tickets faster, get exclusive offers & track your journey in
            real-time.
          </p>

          <div className="store-buttons">
            <a href="#">
              <img src={playStore} alt="Play Store" />
            </a>

            <a href="#">
              <img src={appStore} alt="App Store" />
            </a>
          </div>
        </div>

        <div className="app-image">
          <img src={appPreview} alt="Mobile App Preview" />
        </div>
      </section>

      {/* <!-- How It Works Section --> */}
      <section className="how-it-works">
        <div className="container">
          <h2>How <span>It Works</span></h2>
          <div className="steps">
            <div className="step-card">
              <i className="fa-solid fa-search"></i>
              <h3>Search Buses</h3>
              <p>Enter your origin, destination & travel date to find available buses.</p>
            </div>
            <div className="step-card">
              <i className="fa-solid fa-chair"></i>
              <h3>Select Seats</h3>
              <p>Choose your preferred seat from the bus layout in one click.</p>
            </div>
            <div className="step-card">
              <i className="fa-solid fa-credit-card"></i>
              <h3>Make Payment</h3>
              <p>Pay securely using UPI, wallets, cards or net banking.</p>
            </div>
            <div className="step-card">
              <i className="fa-solid fa-ticket"></i>
              <h3>Get e-Ticket</h3>
              <p>Your ticket is instantly available — no printing needed!</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;