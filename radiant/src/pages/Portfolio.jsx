import { useEffect, useMemo, useState } from "react";
import "./Portfolio.css";

// ✅ Add these images in src/assets/images/
import work1 from "../assets/images/client (1).jpeg";
import work2 from "../assets/images/client (2).jpeg";
import work3 from "../assets/images/client (3).jpeg";
import work4 from "../assets/images/client (4).jpeg";
import work5 from "../assets/images/client (5).jpeg";
import work6 from "../assets/images/client (6).jpeg";

const Portfolio = () => {
  const whatsappNumber = "919422547718";
  const message = "Hi Radiant Multimedia, I want to see your portfolio samples.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const slides = useMemo(
    () => [work1, work2, work3, work4, work5, work6],
    []
  );

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // ✅ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // ✅ Reveal animation (same as Services/About)
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio-page">
      {/* HERO */}
      <div className="portfolio-hero">
        {/* ✅ Golden line */}
        <div className="gold-line"></div>

        <div className="portfolio-hero-content reveal">
          
          <h1>Our Work</h1>
          <p>
            At Radiant Multimedia, we create digital experiences that help brands
            grow. Our portfolio reflects premium creativity, strong strategy and
            result-driven execution.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="portfolio-hero-btn"
          >
            Request Work Samples on WhatsApp
          </a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="portfolio-container">
        {/* INTRO */}
        <div className="portfolio-intro reveal">
          <h2>Portfolio Highlights</h2>
          <p>
            Every business has different goals, so we create customized work for
            each client. From websites to creatives and marketing campaigns — our
            focus is always on quality and growth.
          </p>
        </div>

        {/* WHAT WE SHOWCASE */}
        <div className="showcase-box reveal">
          <h2>What We Showcase in Our Portfolio</h2>
          <p>
            Our portfolio covers multiple categories of work to support complete
            brand building and digital growth.
          </p>

          <ul className="showcase-list">
            <li>✅ Website design & development projects</li>
            <li>✅ Social media creatives and reels strategies</li>
            <li>✅ Branding, logo designs and identity development</li>
            <li>✅ Digital marketing growth results (SEO, Leads, Traffic)</li>
          </ul>

          <p className="showcase-note">
            Client logos, screenshots and testimonials can be shared on request.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="showcase-btn"
          >
            Get Portfolio on WhatsApp
          </a>
        </div>

        {/* ✅ CLIENT WORK SLIDER */}
        <div className="portfolio-gallery reveal">
          <h2 className="section-title">Client Work Samples</h2>
          <p className="section-subtitle">
            A glimpse of our website designs, social media creatives, branding
            and marketing work.
          </p>

          <div className="portfolio-slider">
            {/* arrows */}
            <button className="slider-btn left" onClick={prevSlide}>
              ‹
            </button>

            <div className="slider-window">
              <div
                className="slider-track"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((img, index) => (
                  <div className="slide" key={index}>
                    <div className="slide-card">
                      <img src={img} alt={`Client Work ${index + 1}`} />
                      <div className="slide-tag">View</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="slider-btn right" onClick={nextSlide}>
              ›
            </button>
          </div>

          {/* dots */}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${current === index ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      {/* Add later if you want */}
    </section>
  );
};

export default Portfolio;
