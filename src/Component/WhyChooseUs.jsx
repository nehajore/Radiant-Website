import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-text">
          <h2>Why Choose Radiant Multimedia?</h2>
          <p>
            We focus on delivering result-driven digital solutions that help
            businesses grow, connect and convert.
          </p>

          <ul className="why-list">
            <li>Result-Oriented Strategy</li>
            <li>Affordable & Transparent Pricing</li>
            <li>Creative + Technical Expertise</li>
            <li>Local & Global Client Support</li>
            <li>ROI-Focused Digital Solutions</li>
          </ul>
        </div>

        {/* RIGHT BOX */}
        <div className="why-box">
          <div className="stat">
            <h3>100+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
