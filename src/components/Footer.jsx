import "../styles/home.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <a href="/">
            Trip<span>Buddy</span>
          </a>
          <p>Your trusted travel partner across 70+ cities in India.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#help">Support</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>support@gobus.in</p>
          <p>+91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 GoBus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;