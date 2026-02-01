import { useEffect } from "react";
import "./About.css";

// ✅ Import images
import visionImg from "../assets/images/vision.jpeg";
import missionImg from "../assets/images/mission.jpeg";

// ✅ Team images (add these 4 in assets/images/)
import team1 from "../assets/images/team1.jpeg";
import team2 from "../assets/images/team2.jpeg";
import team3 from "../assets/images/team3.jpeg";
import team4 from "../assets/images/team4.jpg";
import team5 from "../assets/images/team5.jpeg";
import team6 from "../assets/images/team6.jpeg";

const About = () => {
  const whatsappNumber = "919422547718";
  const message = "Hi Radiant Multimedia, I want to know more about your services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const missions = [
    "Help businesses grow online with smart strategies",
    "Deliver creative solutions backed by data & performance",
    "Build long-term relationships based on trust and results",
  ];

  const whyChoose = [
    "Customized strategies — not templates",
    "Clear communication & transparent reporting",
    "Creative thinking + technical expertise",
    "Strong focus on ROI & business growth",
  ];

  const teamMembers = [
    {
      name: "Swati More",
      role: "Managing Director",
      img: team1,
    },
    {
      name: "Nandkishor More",
      role: "CEO",
      img: team2,
    },
     {
      name: "Prakash More",
      role: "Co-Founder",
      img: team6,
    },
    {
      name: "vishal ubale",
      role: "Operation Manager",
      img: team3,
    },
    {
      name: "Neha Jore",
      role: "Developer",
      img: team4,
    },
   
    {
      name: "Mr.Akshay Kore",
      role: "charted Accountatnt",
      img: team5,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Understand Your Business",
      desc: "We study your business model, goals, audience and competitors to plan the right approach.",
    },
    {
      step: "02",
      title: "Plan Strategy",
      desc: "We create a smart growth roadmap including branding, content, SEO and paid campaigns.",
    },
    {
      step: "03",
      title: "Design & Develop",
      desc: "We build premium creatives and high-performing websites that match your brand identity.",
    },
    {
      step: "04",
      title: "Launch & Promote",
      desc: "After launch, we promote your brand through optimized campaigns and content execution.",
    },
    {
      step: "05",
      title: "Track & Optimize",
      desc: "We monitor results, improve performance and optimize regularly to increase ROI.",
    },
  ];

  // ✅ Scroll reveal animation (like Services page)
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
    <section className="about-page">
      {/* HERO */}
      <div className="about-hero">
        <div className="about-hero-content reveal">
         

          <h1>About Radiant Multimedia</h1>
          <p>
            Radiant Multimedia is a modern digital marketing and creative agency
            dedicated to helping brands grow, connect and convert in the digital
            space. We believe every business has a unique story — our mission is
            to bring that story to life through strategy, creativity and result
            driven digital solutions.
          </p>

          <div className="about-hero-btns">
            <a href="/services" className="about-btn outline">
              Explore Services
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="about-btn"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* ABOUT CONTENT */}
      <div className="about-container">
        <div className="about-intro reveal">
          <h2>We Help Brands Build Strong Online Presence</h2>
          <p>
            With expertise in digital marketing, website development, branding
            and performance advertising, we work closely with startups, small
            businesses and growing brands to create a premium digital identity
            and generate measurable growth.
          </p>
        </div>

        {/* ✅ Vision + Mission With Images */}
        <div className="about-grid reveal">
          {/* Vision */}
          <div className="about-card">
            <div className="about-card-img">
              <img src={visionImg} alt="Our Vision" />
            </div>

            <h3>Our Vision</h3>
            <p>
              To become a trusted digital growth partner for businesses by
              delivering innovative, ethical and result oriented marketing
              solutions.
            </p>
          </div>

          {/* Mission */}
          <div className="about-card">
            <div className="about-card-img">
              <img src={missionImg} alt="Our Mission" />
            </div>

            <h3>Our Mission</h3>
            <ul>
              {missions.map((m, i) => (
                <li key={i}>✅ {m}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Choose */}
        <div className="about-why reveal">
          <h2>Why Radiant Multimedia?</h2>
          <p>
            We focus on quality work, clear strategy and real performance. Our
            approach is simple — understand your business, create premium
            branding and drive measurable results.
          </p>

          <div className="why-grid">
            {whyChoose.map((w, i) => (
              <div className="why-item" key={i}>
                ✅ {w}
              </div>
            ))}
          </div>
        </div>

        {/* ✅ TEAM MEMBERS */}
        <div className="about-team reveal">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            A passionate team of creatives and marketers working together to
            grow your business.
          </p>

          <div className="team-grid">
            {teamMembers.map((t, i) => (
              <div className="team-card" key={i}>
                <div className="team-img">
                  <img src={t.img} alt={t.name} />
                </div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="about-process">
        <div className="about-container reveal">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            A simple and effective workflow that ensures premium execution and
            long-term business growth.
          </p>

          <div className="process-grid">
  {process.slice(0, 3).map((p, i) => (
    <div className="process-card" key={i}>
      <div className="step">{p.step}</div>
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
    </div>
  ))}
</div>

<div className="process-center-row">
  {process.slice(3, 5).map((p, i) => (
    <div className="process-card process-half" key={i}>
      <div className="step">{p.step}</div>
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
    </div>
  ))}
</div>


          {/* ✅ CTA */}
          <div className="about-cta">
            <h2>Want to Grow Your Business Online?</h2>
            <p>
              Let’s build your brand, generate leads and grow your business with
              premium digital strategies.
            </p>

            <a href={whatsappLink} target="_blank" rel="noreferrer" className="cta-btn">
              Start Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
