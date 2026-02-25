import "./Footer.css";
import logo from "../assets/images/logo.png";

import { Link } from "react-router-dom";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { SiLinktree } from "react-icons/si";

const Footer = () => {
  const whatsappNumber = "919422547718";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Radiant Multimedia, I want a free consultation."
  )}`;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="Radiant Multimedia Logo"
            className="footer-logo"
          />

          <h3>Radiant Multimedia</h3>

          <p>
            We help businesses grow with smart digital marketing, creative
            branding, and result-driven solutions.
          </p>

          {/* ✅ Social Media Links */}
          
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-links">
          <h4>Services</h4>
          <ul className="service-list arrow">
            <li>Digital Marketing</li>
            <li>Website Development</li>
            <li>SEO Services</li>
            <li>Social Media Marketing</li>
            <li>Branding & Creative</li>
            <li>Consulting & Strategy</li>
            <li>Business Growth Solutions</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p> +91 94225 47718 / 8087043258</p>
          <p> radiantmultimedia5@gmail.com</p>
          <p> Pune, India</p>

          <h4 className="follow-title">Follow Us</h4>

          <div className="footer-social">
           

            <a
              href="https://www.instagram.com/radiantmultimedia?igsh=NXY2YzcxaGs3aXc0"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/Radiantmultimedia"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/in/radiant-multimedia-b8a5473a2/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://linktr.ee/DigiMultimedia?utm_source=linktree_profile_share"
              target="_blank"
              rel="noreferrer"
              aria-label="Linktree"
              className="linktree"
            >
              <SiLinktree />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Radiant Multimedia. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
