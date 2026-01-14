import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "9422547718"; // ✅ India code +91
  const message = "Hi Radiant Multimedia, I want a free consultation.";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Radiant Multimedia Logo" />
            <span>Radiant Multimedia</span>
          </a>
        </div>

        {/* Menu */}
        <nav className={`nav-links ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

          {/* ✅ CTA opens WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="cta"
            onClick={() => setOpen(false)}
          >
            Get Free Consultation
          </a>
        </nav>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Navbar;
