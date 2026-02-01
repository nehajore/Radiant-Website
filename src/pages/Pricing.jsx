import { useEffect } from "react";
import "./Pricing.css";

const Pricing = () => {
  const whatsappNumber = "9422547718";
  const message = "Hi Radiant Multimedia, I want to know pricing plans.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const plans = [
    {
      title: "Excellent Plan",
      price: "₹3,999 / month",
      tag: "For Small Businesses",
      icon: "✨",
      features: [
        "Graphic Design - 12",
        "Business Page setup & Growth",
        "Instagram reel-2",
        "Visisting Crads -1",
      ],
    },
    {
      title: "Gold Plan",
      price: "₹7,999 / month",
      tag: "Best for Beginners",
      icon: "🌱",
      features: [
        "Social Media (2 Platforms)",
        "12 Creatives / Month",
        "Basic SEO",
        "Monthly Report",
      ],
    },
    {
      title: "Growth Plan",
      price: "₹14,999 / month",
      tag: "Most Popular",
      icon: "🚀",
      popular: true,
      features: [
        "Social Media (3 Platforms)",
        "20 Creatives + Reels",
        "SEO Optimization",
        "Google Ads Setup",
        "Monthly Report",
      ],
    },
    {
      title: "Premium Plan",
      price: "₹24,999 / month",
      tag: "Full Digital Growth",
      icon: "🏆",
      features: [
        "Complete Digital Marketing",
        "Website + SEO",
        "Paid Ads Management",
        "Branding Support",
        "Weekly Report",
      ],
    },
  ];

  const faqs = [
    {
      q: "How long does it take to see results?",
      a: "SEO results usually take 2–3 months. Ads can give immediate results/leads. Social Media growth takes around 1–2 months.",
    },
    {
      q: "Do you provide custom packages?",
      a: "Yes ✅ We provide custom packages for every business. Services can be selected as per your budget. We build a plan based on your goals and needs.",
    },
    {
      q: "Do you work with small businesses?",
      a: "Yes ✅ We work with startups and small businesses. Local businesses are our main priority. We offer affordable plans with real growth results.",
    },
    {
      q: "Is website maintenance included?",
      a: "Yes ✅ Maintenance is included based on the plan you choose. It covers updates, small fixes and support. Extra support can be added if required.",
    },
    {
      q: "How do we get started?",
      a: "Just contact us for a FREE consultation call. We will understand your requirement properly. Then we’ll share the best package for your business.",
    },
  ];

  // ✅ Reveal animation
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
    <section className="pricing-page">
      {/* HERO */}
      <div className="pricing-hero">
        <div className="pricing-hero-content reveal">
         
          <h1>Pricing Plans</h1>
          <p>
            Choose a plan that suits your business goals. All packages can be
            customized as per your requirements.
          </p>

          <a
            href={whatsappLink}
            className="pricing-hero-btn"
            target="_blank"
            rel="noreferrer"
          >
            Get Custom Quote on WhatsApp
          </a>
        </div>
      </div>

      {/* PLANS */}
      <div className="pricing-container">
        <h2 className="section-title reveal">Our Packages</h2>
        <p className="section-subtitle reveal">
          Premium digital marketing plans designed to deliver measurable growth.
        </p>

        <div className="pricing-grid reveal">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}

              <div className="plan-icon">{plan.icon}</div>
              <h3>{plan.title}</h3>
              <p className="plan-tag">{plan.tag}</p>

              <div className="plan-price">{plan.price}</div>

              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i}>✅ {f}</li>
                ))}
              </ul>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="plan-btn"
              >
                Enquire Now
              </a>

              {/* ✅ premium glow */}
              <div className="card-glow" />
            </div>
          ))}
        </div>

        <p className="custom-note reveal">
          ✅ Pricing is customizable based on your business requirement.
        </p>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <div className="pricing-container reveal">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Here are quick answers to common questions.
          </p>

          <div className="faq-list">
            {faqs.map((item, i) => (
              <div className="faq-item" key={i}>
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pricing-bottom-cta">
        <div className="pricing-container bottom-cta-grid reveal">
          <div>
            <h2>Need a Custom Plan for Your Business?</h2>
            <p>
              We provide affordable + premium packages according to your goals.
              Contact us now for a free consultation.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="bottom-cta-btn"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
