import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";
import BackToTop from "./Component/BackToTop";

import Hero from "./Component/Hero";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

import "./Component/backToTop.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Scroll helpers */}
      <ScrollToTop />
      <BackToTop />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;