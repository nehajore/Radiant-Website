import "./Services.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();

  const whatsappNumber = "918087043258";
  const message = "Hi Radiant Multimedia, I want to know about your services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  /* ⭐ Scroll to section when coming from footer link */
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  /* ⭐ Reveal animation */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-page">

      {/* HERO */}
      <div className="services-hero">
        <div className="services-hero-content reveal">
          <h1>Our Services</h1>
          <p>
            Premium digital solutions designed to help your business grow,
            connect and convert.
          </p>
          <a className="services-hero-btn" href={whatsappLink} target="_blank" rel="noreferrer">
            Get Free Consultation on WhatsApp
          </a>
        </div>
      </div>

      {/* 1 — SEO */}
      <div id="seo" className="services-video-section">
        <div className="services-video-grid reveal">
          <div className="video-box">
            <video className="services-video" src="/digital marketing solution.mp4" autoPlay muted loop playsInline controls />
            <div className="video-glow" />
          </div>

          <div className="video-content">
            <h2>SEO & Branding</h2>
            <p>We help brands stand out with creative design and marketing strategies.</p>
            <div className="video-points">
              <div className="point">Premium Quality Output</div>
              <div className="point">Result-Driven Strategy</div>
              <div className="point">Business Growth Focus</div>
              <div className="point">Transparent Reporting</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2 — Branding */}
      <div id="branding" className="services-video-section alt-bg">
        <div className="services-video-grid reverse reveal">
          <div className="video-box">
            <video className="services-video" src="/Branding& creative design.mp4" autoPlay muted loop playsInline controls />
            <div className="video-glow" />
          </div>

          <div className="video-content">
            <h2>Branding & Creative Design</h2>
            <p>Premium branding and creative assets to elevate your brand identity.</p>
            <div className="video-points">
              <div className="point">Logo & Identity</div>
              <div className="point">Posters & Banners</div>
              <div className="point">Social Media Creatives</div>
              <div className="point">High Quality Designs</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 — Web */}
      <div id="web" className="services-video-section">
        <div className="services-video-grid reveal">
          <div className="video-box">
            <video className="services-video" src="/modernvideo.mp4" autoPlay muted loop playsInline controls />
            <div className="video-glow" />
          </div>

          <div className="video-content">
            <h2>AI & Website Development</h2>
            <p>Modern responsive websites built for performance and conversions.</p>
            <div className="video-points">
              <div className="point">Responsive Website</div>
              <div className="point">Modern UI/UX</div>
              <div className="point">Fast Performance</div>
              <div className="point">SEO Friendly Setup</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 — SMM */}
      <div id="smm" className="services-video-section alt-bg">
        <div className="services-video-grid reverse reveal">
          <div className="video-box">
            <video className="services-video" src="/social media and marketing ads.mp4" autoPlay muted loop playsInline controls />
            <div className="video-glow" />
          </div>

          <div className="video-content">
            <h2>Social Media Marketing & Paid Ads</h2>
            <p>High-performing campaigns that increase reach, leads and sales.</p>
            <div className="video-points">
              <div className="point">Facebook / Instagram Ads</div>
              <div className="point">Lead Generation</div>
              <div className="point">Audience Targeting</div>
              <div className="point">Monthly Reporting</div>
            </div>
          </div>
        </div>
      </div>

      {/* 5 — Consulting */}
      <div id="consulting" className="services-video-section">
        <div className="services-video-grid reveal">
          <div className="video-box">
            <video className="services-video" src="/Consulting & Strategy.mp4" autoPlay muted loop playsInline controls />
            <div className="video-glow" />
          </div>

          <div className="video-content">
            <h2>Consulting & Strategy</h2>
            <p>Expert strategic planning to scale and grow your business.</p>
            <div className="video-points">
              <div className="point">Franchise Strategy</div>
              <div className="point">Startup Launch</div>
              <div className="point">Personal Branding</div>
              <div className="point">Product Launch Campaign</div>
            </div>
          </div>
        </div>
      </div>

      {/* 6 — Growth */}
      <div id="growth" className="services-video-section alt-bg featured-service">
        <div className="services-video-grid reverse reveal">
          <div className="video-box">
            <video className="services-video" src="/Business Growth Solutions.mp4" autoPlay muted loop playsInline controls />
            <div className="video-glow" />
          </div>

          <div className="video-content">
            <h2>Business Growth Solutions</h2>
            <p>Advanced growth strategies and data-driven marketing planning.</p>
            <div className="video-points">
              <div className="point">Brand Positioning</div>
              <div className="point">Digital Audit</div>
              <div className="point">Marketing Consultation</div>
              <div className="point">Market Research</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;