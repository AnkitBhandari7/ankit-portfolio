import { useState } from "react";
import { MdArrowOutward, MdCopyright, MdSend } from "react-icons/md";
import { FaGithub, FaLinkedin, FaAws } from "react-icons/fa";
import "./styles/Contact.css";

const certifications = [
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    icon: <FaAws />,
    link: "https://drive.google.com/drive/folders/13umA-uP8jFkL1mtEgj40Abv87M3nH82_?usp=sharing",
  },
  {
    name: "AWS Academy Data Engineering",
    issuer: "Amazon Web Services",
    icon: <FaAws />,
    link: "https://drive.google.com/drive/folders/1RvXNWihGrrF5jvIWo7hkz87FMLTLsggO?usp=sharing",
  },
  {
    name: "AWS Academy Machine Learning Foundations",
    issuer: "Amazon Web Services",
    icon: <FaAws />,
    link: "https://drive.google.com/drive/folders/1rzwnQ7zgQM7eYE9lZJUwjnpYU-pVro4V?usp=sharing",
  },
  {
    name: "AWS Academy ML for Natural Language Processing",
    issuer: "Amazon Web Services",
    icon: <FaAws />,
    link: "https://drive.google.com/drive/folders/1PGdX1fIm37yhNLLM9qiEwmKUs4KJ35QB?usp=sharing",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);

    try {
      // Use Web3Forms API to send email to ankeetbhandari77@gmail.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "87c4a165-27a3-4416-8321-72944d18ec06", // Branded access key for ankeetbhandari77@gmail.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio message from ${formData.name}`
        })
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Fallback to mailto link
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        window.open(`mailto:ankeetbhandari77@gmail.com?subject=${subject}&body=${body}`);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      // Fallback to mailto link on network error
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      window.open(`mailto:ankeetbhandari77@gmail.com?subject=${subject}&body=${body}`);
      setFormData({ name: "", email: "", message: "" });
    }

    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      {/* Certifications Section */}
      <div className="certs-section" id="certifications">
        <div className="certs-container section-container">
          <h2>
            My <span>Certifications</span>
          </h2>
          <div className="certs-grid">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cert-card"
              data-cursor="disable"
            >
              <span className="cert-icon">{cert.icon}</span>
              <div className="cert-text">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
              <MdArrowOutward className="cert-arrow" />
            </a>
          ))}
          </div>
        </div>
      </div>

      {/* Let's Connect Section */}
      <div className="contact-section" id="contact">
        <div className="contact-container section-container">
          <h2>
            Let's <span>Connect</span>
          </h2>
          <div className="contact-body">
          {/* LEFT: Info & Socials */}
          <div className="contact-left">
            <div className="contact-info-group">
              <div className="contact-info-item">
                <span className="contact-info-label">Email</span>
                <a href="mailto:ankeetbhandari77@gmail.com" className="contact-info-value" data-cursor="disable">
                  ankeetbhandari77@gmail.com
                </a>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">+977 9846338128</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Education</span>
                <span className="contact-info-value">BSc (Hons) Computing — Islington College</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/ankitBhandari7" target="_blank" rel="noopener noreferrer" className="contact-social-link" data-cursor="disable">
                <FaGithub /> <span>GitHub</span> <MdArrowOutward className="social-arrow" />
              </a>
              <a href="https://www.linkedin.com/in/ankitbhandari77/" target="_blank" rel="noopener noreferrer" className="contact-social-link" data-cursor="disable">
                <FaLinkedin /> <span>LinkedIn</span> <MdArrowOutward className="social-arrow" />
              </a>
            </div>
          </div>

          {/* RIGHT: Send Message Form */}
          <div className="contact-right">
            <div className="contact-form-card">
              <h3 className="form-heading">Send a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Ankit Bhandari"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      data-cursor="disable"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="hello@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      data-cursor="disable"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="I'd love to collaborate on..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    data-cursor="disable"
                  />
                </div>
                <button type="submit" className="form-submit-btn" data-cursor="disable">
                  {sent ? "Message Sent ✓" : (
                    <>
                      <span>Send Message</span>
                      <MdSend />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer line */}
        <div className="contact-footer">
          <span>Designed &amp; Developed by <span className="footer-name">Ankit Bhandari</span></span>
          <span className="footer-copy"><MdCopyright /> 2025</span>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
