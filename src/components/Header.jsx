import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
  <nav className="navbar">
    <a href="/" className="logo-flex">
      <img src={logo} alt="GoBus Logo" className="logo-img" />
      <span className="logo-text">
        Trip<span>Buddy</span>
      </span>
    </a>

    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
      &#9776;
    </div>

    <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
      <li>
        <a href="#offers">
          <i className="fa-solid fa-tags"></i> Offers
        </a>
      </li>
      <li>
        <a href="#help">
          <i className="fa-solid fa-headset"></i> Help
        </a>
      </li>
      <li>
        <a href="/login">
          <i className="fa-solid fa-right-to-bracket"></i> Login
        </a>{" "}
        /
        <a href="/signup">
          <i className="fa-solid fa-user-plus"></i> Signup
        </a>
      </li>
    </ul>
  </nav>
</header>
  );
};

export default Navbar;