import React from "react";
import "./Careers.css";

const Careers = () => {
  return (
    <div className="careers-page">

      {/* HERO SECTION */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <h1>Careers at Radiant Multimedia</h1>
          <p>
            Build your future with creativity and innovation. Join our growing
            digital marketing agency and work on exciting projects with
            passionate people.
          </p>
        </div>
      </section>

      <div className="careers-container">

        {/* ABOUT */}
        <section>
          <h2 className="section-title">Why Work With Radiant Multimedia?</h2>
          <p className="section-subtitle">
            At Radiant Multimedia, we believe great ideas come from passionate
            people. We are a creative digital agency helping brands build
            strong digital presence and powerful brand identities.
          </p>
        </section>

        {/* JOB OPENINGS */}
        <section>
          <h2 className="section-title">Open Opportunities</h2>

          <div className="jobs-grid">

            <div className="job-card">
              <h3>Digital Marketing Intern</h3>
              <p>
                Learn SEO, social media marketing, paid advertising and digital
                strategy while working on real projects.
              </p>

              <a
                href="mailto:radiantmultimedia5@gmail.com?subject=Application for Digital Marketing Intern"
                className="apply-btn"
              >
                Apply Now
              </a>
            </div>

            <div className="job-card">
              <h3>Graphic Designer</h3>
              <p>
                Create creative designs, branding materials, social media
                creatives and marketing visuals.
              </p>

              <a
                href="mailto:radiantmultimedia5@gmail.com?subject=Application for Graphic Designer"
                className="apply-btn"
              >
                Apply Now
              </a>
            </div>

            <div className="job-card">
              <h3>Video Editor</h3>
              <p>
                Edit reels, promotional videos, advertisements and brand
                storytelling content.
              </p>

              <a
                href="mailto:radiantmultimedia5@gmail.com?subject=Application for Video Editor"
                className="apply-btn"
              >
                Apply Now
              </a>
            </div>

            <div className="job-card">
              <h3>Social Media Manager</h3>
              <p>
                Plan social media strategies, manage brand pages and create
                engagement-driven campaigns.
              </p>

              <a
                href="mailto:radiantmultimedia5@gmail.com?subject=Application for Social Media Manager"
                className="apply-btn"
              >
                Apply Now
              </a>
            </div>

            <div className="job-card">
              <h3>Website Developer</h3>
              <p>
                Build responsive websites, landing pages and optimize digital
                platforms for better performance.
              </p>

              <a
                href="mailto:radiantmultimedia5@gmail.com?subject=Application for Website Developer"
                className="apply-btn"
              >
                Apply Now
              </a>
            </div>

            <div className="job-card">
              <h3>Content Writer</h3>
              <p>
                Create website content, blog articles, social media captions
                and marketing copy.
              </p>

              <a
                href="mailto:radiantmultimedia5@gmail.com?subject=Application for Content Writer"
                className="apply-btn"
              >
                Apply Now
              </a>
            </div>

          </div>
        </section>

        {/* INTERNSHIP */}
        <section style={{ marginTop: "60px" }}>
          <h2 className="section-title">Internship Opportunities</h2>

          <p className="section-subtitle">
            Radiant Multimedia provides internship opportunities for students
            and freshers who want practical experience in the digital marketing
            industry.
          </p>

          <div className="job-card" style={{ maxWidth: "600px", margin: "auto" }}>
            <h3>Internship Benefits</h3>

            <ul>
              <li>Real project exposure</li>
              <li>Hands-on digital marketing training</li>
              <li>Internship certificate</li>
              <li>Experience letter</li>
              <li>Opportunity for full-time role</li>
            </ul>

            <a
              href="mailto:radiantmultimedia5@gmail.com?subject=Internship Application"
              className="apply-btn"
            >
              Apply for Internship
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section style={{ marginTop: "70px" }}>
          <h2 className="section-title">Join Our Creative Team</h2>

          <p className="section-subtitle">
            Send your resume and portfolio to us and become part of our growing team.
          </p>

          <div style={{ textAlign: "center", fontWeight: "600" }}>
            <p> Contact: +91 80870 43258</p>
            <p> WhatsApp: +91 94225 47718</p>
            <p> Email: radiantmultimedia5@gmail.com</p>
            <p> www.radiantmultimediagency.com</p>
          </div>
        </section>

      </div>

    </div>
  );
};

export default Careers;