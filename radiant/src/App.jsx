import { Routes, Route, ServerRouter } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Footer from "./Component/Footer";

import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";




function App() {
  return (
    <>
      <Navbar />
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
