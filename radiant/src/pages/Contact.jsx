import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // ✅ Replace these with your EmailJS details
 const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setSuccessMsg("✅ Message sent successfully! We will contact you soon.");
        form.current.reset();
      })
      .catch((error) => {
  console.log("EmailJS Error:", error);
  setLoading(false);
  setSuccessMsg("❌ Failed to send message. Please try again!");
});

  };

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
    <section className="contact-page">
      {/* HERO */}
      <div className="contact-hero">
        <div className="contact-hero-content reveal">
          <p className="contact-badge">📞 Contact</p>
          <h1>Contact Us</h1>
          <p>
            Let’s connect and grow your business. Fill the form and we will
            contact you soon.
          </p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="contact-container">
        <div className="contact-grid reveal">
          {/* LEFT INFO */}
          <div className="contact-info">
            <h2>Radiant Multimedia</h2>
            <p>
              We help brands grow, connect and convert through digital marketing,
              premium design and performance solutions.
            </p>

            <div className="info-box">
              <h4>📍 Location</h4>
              <p>Pune, Maharashtra</p>
            </div>

            <div className="info-box">
              <h4>📞 Phone</h4>
              <p>+91 80870 43258</p>
            </div>

            <div className="info-box">
              <h4>📧 Email</h4>
              <p>radiantmultimedia5@gmail.com</p>
            </div>

            <a
              className="whatsapp-btn"
              href={`https://wa.me/9422547718?text=${encodeURIComponent(
                "Hi Radiant Multimedia, I want to know more about your services."
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>

            {/* ✅ small trust strip */}
            <div className="contact-proof">
              <span className="proof-chip">✅ Fast Reply</span>
              <span className="proof-chip">⭐ Premium Support</span>
              <span className="proof-chip">🚀 Growth Focus</span>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-box">
            <h2>Send Your Message</h2>
            <p className="form-subtitle">
              Share your requirement and we will connect with you shortly.
            </p>

            {/* ✅ EmailJS Form */}
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                />
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </button>

              {successMsg && <p className="form-note">{successMsg}</p>}
            </form>

            {/* ✅ golden bottom highlight */}
            <div className="form-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
