import "./Services.css";
import { useEffect } from "react";

// ✅ Replace these with your real images paths


const Services = () => {
  const whatsappNumber = "918087043258";
  const message = "Hi Radiant Multimedia, I want to know about your services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  // ✅ Scroll animation using IntersectionObserver (no library)
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-page">
      {/* HERO / BANNER */}
      <div className="services-hero">
        <div className="services-hero-content reveal">
          <p className="hero-badge">🚀 Digital Marketing Agency</p>
          <h1>Our Services</h1>
          <p>
            Premium digital solutions designed to help your business grow,
            connect and convert. From strategy to execution — we deliver
            measurable results.
          </p>

          <a
            className="services-hero-btn"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Get Free Consultation on WhatsApp
          </a>
        </div>
      </div>

      {/* ✅ VIDEO SECTION 1 (Video Left) */}
      <div className="services-video-section">
        <div className="services-video-grid reveal">
          <div className="video-box">
            <video
              className="services-video"
              src="/digital marketing solution.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <div className="video-glow" />
          </div>

          <div className="video-content">
            <h2>SEO & Branding</h2>
            <p>
              We help brands stand out with creative design, powerful marketing
              strategies and high-performing websites that generate conversions.
            </p>

            <div className="video-points">
              <div className="point">✅ Premium Quality Output</div>
              <div className="point">✅ Result-Driven Strategy</div>
              <div className="point">✅ Business Growth Focus</div>
              <div className="point">✅ Transparent Reporting</div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ VIDEO SECTION 2 (Video Right) */}
      <div className="services-video-section alt-bg">
        <div className="services-video-grid reverse reveal">
          <div className="video-box">
            <video
              className="services-video"
              src="/Branding& creative design.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <div className="video-glow" />
          </div>

          <div className="video-content">
            <h2>Branding & Creative Design</h2>
            <p>
              Premium branding, posters, social media creatives — everything that
              makes your business look professional and trustworthy.
            </p>

            <div className="video-points">
              <div className="point">✅ Logo & Identity</div>
              <div className="point">✅ Posters & Banners</div>
              <div className="point">✅ Social Media Creatives</div>
              <div className="point">✅ High Quality Designs</div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ VIDEO SECTION 3 (Video Left) */}
      <div className="services-video-section">
        <div className="services-video-grid reveal">
          <div className="video-box">
            <video
              className="services-video"
              src="/modernvideo.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <div className="video-glow" />
          </div>

          <div className="video-content">
            <h2> AI & Website Development  </h2>
            <p>
              We build fast, responsive websites with modern UI/UX that improves
              engagement and generates leads for your business.
            </p>

            <div className="video-points">
              <div className="point">✅ Responsive Website</div>
              <div className="point">✅ Modern UI/UX</div>
              <div className="point">✅ Fast Performance</div>
              <div className="point">✅ SEO Friendly Setup</div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ VIDEO SECTION 4 (Video Right) */}
      <div className="services-video-section alt-bg">
        <div className="services-video-grid reverse reveal">
          <div className="video-box">
            <video
              className="services-video"
              src="/social media and marketing ads.mp4"
              autoPlay
             muted
              loop
              playsInline
              controls
            />
            <div className="video-glow" />
          </div>

          <div className="video-content">
            <h2>Social Media Marketing & Paid Google & Meta Ads</h2>
            <p>
              We run result-driven ad campaigns and grow your social media pages
              that increase reach, leads and sales.
            </p>

            <div className="video-points">
              <div className="point">✅ Facebook / Instagram Ads</div>
              <div className="point">✅ Lead Generation</div>
              <div className="point">✅ Audience Targeting</div>
              <div className="point">✅ Monthly Reporting</div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ GALLERY */}
      <div className="gallery-section">
        <div className="services-container reveal">
            <div >

            
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Services;
