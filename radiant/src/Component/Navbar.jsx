import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  const whatsappNumber = "9422547718";
  const message = "Hi Radiant Multimedia, I want a free consultation.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  /* ✅ Close menu when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ✅ Close menu on scroll */
  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar" ref={navRef}>
      <div className="navbar-container">

        {/* LOGO */}
        <div className="logo">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src={logo} alt="Radiant Multimedia Logo" />
            <span>Radiant Multimedia</span>
          </Link>
        </div>

        {/* MENU */}
        <nav className={`nav-links ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>

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

        {/* ⭐ Animated Hamburger */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;