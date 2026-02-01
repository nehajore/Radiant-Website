import { useEffect, useMemo, useState } from "react";
import "./Hero.css";

// ✅ Service images
import serviceDM from "../assets/images/service-digital.png";
import serviceWeb from "../assets/images/service-web.jpeg";
import serviceSeo from "../assets/images/service-seo.jpg";
import serviceSocial from "../assets/images/service-social.jpg";
import serviceBranding from "../assets/images/branding.jpg";
import serviceAds from "../assets/images/paid advertising.avif";

// ✅ Client Images
import client1 from "../assets/images/client1.jpeg";
import client2 from "../assets/images/client2.jpeg";
import client3 from "../assets/images/client3.jpeg";
import client4 from "../assets/images/client4.jpeg";
import client5 from "../assets/images/client5.png";

const Hero = () => {
  const whatsappNumber = "919422547718";
  const message = "Hi Radiant Multimedia, I want a free consultation.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  // ✅ Services list
  const services = [
  {
    title: "Website Design & Development",
    img: serviceWeb,
    desc: "Responsive, fast and SEO-friendly websites for businesses, portfolios and e-commerce with modern UI and smooth user experience."
  },
  {
    title: "SEO Services",
    img: serviceSeo,
    desc: "Keyword research, on-page SEO, technical optimization and proven strategies to improve Google rankings and organic traffic."
  },
  {
    title: "Social Media Marketing",
    img: serviceSocial,
    desc: "Content creation, reels, creatives, captions and smart page growth strategies to increase engagement and brand visibility."
  },
  {
    title: "Branding & Creative Design",
    img: serviceBranding,
    desc: "Logo design, brand identity, posters, brochures and creative visuals for a professional and premium business look."
  },
  {
    title: "Paid Advertising",
    img: serviceAds,
    desc: "Google Ads, Facebook and Instagram ad campaigns focused on quality lead generation and fast business growth."
  },
  {
    title: "Digital Marketing",
    img: serviceDM,
    desc: "Complete digital growth solutions including SEO, social media, ads and content marketing for online success."
  }
];


  const whyChoose = [
    "Result-Oriented Strategy focused on real leads & growth",
    "Affordable pricing with flexible packages",
    "Transparent reporting & clear communication",
    "Creative + Technical expertise under one team",
    "Local & Global client support",
  ];

  // ✅ Changing words every 2 sec
  const changingWords = useMemo(
    () => [
      "Smart Digital Marketing",
      "Powerful SEO Growth",
      "High-Converting Websites",
      "Social Media Branding",
      "Google Ads Campaigns",
      "Business Growth Strategy",
    ],
    []
  );

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % changingWords.length);
    }, 2000);

    return () => clearInterval(id);
  }, [changingWords.length]);

  // ✅ Testimonials
  const testimonials = useMemo(
    () => [
      {
        name: "Amit Patil",
        business: "Local Business Owner",
        img: client1,
        text: "Radiant Multimedia helped us build a premium website and our enquiries increased within weeks. Highly recommended!",
        rating: 5,
      },
      {
        name: "Sneha Kulkarni",
        business: "Boutique Founder",
        img: client2,
        text: "Their social media creatives and marketing strategy really improved our reach and brand look. Very professional team.",
        rating: 5,
      },
      {
        name: "Rahul Jadhav",
        business: "Startup Founder",
        img: client3,
        text: "We got quality leads from Google Ads with proper reporting and support. Great results within budget.",
        rating: 5,
      },
      {
        name: "Neha Deshmukh",
        business: "Salon Owner",
        img: client4,
        text: "Best digital service provider! My business profile looks premium now and I’m getting regular enquiries.",
        rating: 5,
      },
       {
        name: "Milind Balasaheb Bhoite",
        business: "Upsarpanch tea",
        img: client5,
        text: "Best digital service provider! My business profile looks premium now.",
        rating: 5,
      },
    ],
    []
  );

  // ✅ Slider state
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  // ✅ Autoplay
  useEffect(() => {
    const id = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(id);
  }, [testimonials.length]);

  // ✅ Scroll reveal
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-galaxy">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container reveal">
          <div className="hero-text">
            

            <h1 className="hero-title">
              Grow Your Business with{" "}
              <span key={wordIndex} className="changing-text">
                {changingWords[wordIndex]}
              </span>
            </h1>

            <p className="hero-para">
              We help businesses build premium online presence with SEO, website
              development, social media marketing, creative branding and paid
              advertising that generates real results.
            </p>

            <div className="hero-buttons">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Get Free Consultation
              </a>

              <a href="/services" className="btn-secondary">
                View Services
              </a>
            </div>

            {/* ✅ Mini proof chips */}
            <div className="hero-proof">
              <span className="proof-chip">Trusted by Businesses</span>
              <span className="proof-chip">Quality Leads</span>
              <span className="proof-chip"> Premium Support</span>
            </div>
          </div>

          {/* ✅ Hero Right Card */}
          <div className="hero-right">
            <div className="hero-glass-card">
              <h3>Our Speciality</h3>
              <p>We focus on visibility, leads and conversions.</p>

              <div className="hero-metrics">
                <div className="hero-metric">
                  <h4>SEO</h4>
                  <p>Ranking</p>
                </div>
                <div className="hero-metric">
                  <h4>Ads</h4>
                  <p>Leads</p>
                </div>
                <div className="hero-metric">
                  <h4>Web</h4>
                  <p>Speed</p>
                </div>
                <div className="hero-metric">
                  <h4>Social</h4>
                  <p>Branding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="core-services">
        <div className="core-container reveal">
          <h2 className="section-title section-title-light">Our Core Services</h2>
          <p className="section-subtitle section-subtitle-light">
            Everything your business needs to grow online — designed with
            creativity, strategy and performance.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card glass-card" key={index}>
                <div className="service-img">
                  <img src={service.img} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
               <p>{service.desc}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="core-container reveal">
          <h2 className="section-title section-title-light">Client Testimonials</h2>
          <p className="section-subtitle section-subtitle-light">
            Real feedback from startups and small businesses.
          </p>

          {/* ✅ GOLDEN BORDER */}
          <div className="testimonial-center">
            <div className="testimonial-center-inner">
              <img
                src={testimonials[current].img}
                alt={testimonials[current].name}
                className="testimonial-img"
              />

              <h3 className="testimonial-name">{testimonials[current].name}</h3>
              <p className="testimonial-business">{testimonials[current].business}</p>

              <div className="testimonial-rating">
                {"⭐".repeat(testimonials[current].rating)}
              </div>

              <p className="testimonial-text">“{testimonials[current].text}”</p>

              {/* ✅ Dots */}
              <div className="ts-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`ts-dot ${current === i ? "active" : ""}`}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
