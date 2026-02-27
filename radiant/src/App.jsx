import { Routes, Route } from "react-router-dom"; // ❌ remove ServerRouter
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop"; // ✅ add this

import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import BackToTop from "./Component/BackToTop";
import "./Component/backToTop.css";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />   {/* ✅ THIS FIXES YOUR ISSUE */}
      <BackToTop />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;