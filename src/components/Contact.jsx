import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const titleRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const socialRef = useScrollAnimation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log("Form submitted:", formData);
    setShowAlert(true);
    setFormData({ name: "", email: "", message: "" });

    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/abdelrahmanelgebaly137",
      icon: "bi bi-linkedin",
      color: "#0077b5",
    },
    {
      name: "GitHub",
      url: "https://github.com/gebaaly",
      icon: "bi bi-github",
      color: "#333",
    },
    {
      name: "Twitter",
      url: "https://x.com/geebaaly",
      icon: "bi bi-twitter",
      color: "#1da1f2",
    },
    {
      name: "Email",
      url: "mailto:abdoalgebaly2003@gmail.com",
      icon: "bi bi-envelope",
      color: "#ea4335",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-5 ${darkMode ? "bg-dark" : "bg-light"}`}
    >
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 ref={titleRef} className="display-5 fw-bold mb-3 gradient-text">
              Get In Touch
            </h2>
            <div
              ref={titleRef}
              className="border-bottom border-3 border-primary mx-auto mb-4 fade-in-up"
              style={{ width: "60px" }}
            ></div>
            <p ref={titleRef} className="text-muted fade-in-up">
              Ready to start a project? Let's discuss how I can help bring your
              ideas to life.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            {showAlert && (
              <Alert
                variant="success"
                dismissible
                onClose={() => setShowAlert(false)}
                className="fade-in-up"
              >
                Thank you for your message! I'll get back to you soon.
              </Alert>
            )}

            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mb-5 fade-in-up"
            >
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="px-5 py-2 fw-semibold floating"
                >
                  Send Message
                </Button>
              </div>
            </Form>

            <div ref={socialRef} className="text-center fade-in-up">
              <h5 className="mb-4 gradient-text">Connect With Me</h5>
              <div className="d-flex justify-content-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none social-icon"
                    style={{
                      color: social.color,
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0,
                      transform: "scale(0.8)",
                      animation: "scaleIn 0.6s ease forwards",
                    }}
                  >
                    <i className={`${social.icon} fs-2`}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
