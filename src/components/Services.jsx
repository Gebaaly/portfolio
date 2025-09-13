import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Services = ({ darkMode }) => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Building modern, responsive websites and web applications using the latest technologies and best practices.",
      icon: "💻",
      features: [
        "React Development",
        "Responsive Design",
        "Performance Optimization",
        "Cross-browser Compatibility",
      ],
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces that enhance user experience and drive engagement.",
      icon: "🎨",
      features: [
        "User Interface Design",
        "User Experience Design",
        "Wireframing & Prototyping",
        "Design Systems",
      ],
    },
    {
      id: 3,
      title: "Frontend Development",
      description:
        "Developing interactive and dynamic frontend applications with modern JavaScript frameworks and libraries.",
      icon: "⚡",
      features: [
        "JavaScript/TypeScript",
        "React/Vue.js",
        "CSS3/SASS",
        "API Integration",
      ],
    },
    {
      id: 4,
      title: "Mobile-First Design",
      description:
        "Creating websites that look and work perfectly on all devices, with mobile as the primary focus.",
      icon: "📱",
      features: [
        "Responsive Layouts",
        "Touch-friendly Interfaces",
        "Progressive Web Apps",
        "Mobile Optimization",
      ],
    },
    {
      id: 5,
      title: "Performance Optimization",
      description:
        "Optimizing website performance for faster loading times and better user experience.",
      icon: "🚀",
      features: [
        "Code Optimization",
        "Image Optimization",
        "Caching Strategies",
        "Lazy Loading",
      ],
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description:
        "Providing ongoing maintenance, updates, and technical support for existing websites and applications.",
      icon: "🔧",
      features: [
        "Regular Updates",
        "Bug Fixes",
        "Security Patches",
        "Technical Support",
      ],
    },
  ];

  const titleRef = useScrollAnimation();
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate");
              }, index * 150);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2
              ref={titleRef}
              className="display-5 fw-bold mb-3 gradient-text"
            >
              Services I Offer
            </h2>
            <div
              ref={titleRef}
              className="border-bottom border-3 border-primary mx-auto mb-4 fade-in-up"
              style={{ width: "60px" }}
            ></div>
            <p ref={titleRef} className="text-muted fade-in-up">
              Comprehensive web development and design services to bring your
              ideas to life.
            </p>
          </Col>
        </Row>

        <Row ref={servicesRef}>
          {services.map((service, index) => (
            <Col key={service.id} lg={4} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center service-card">
                <Card.Body className="p-4">
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center service-icon pulse"
                    style={{
                      width: "80px",
                      height: "80px",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      borderRadius: "50%",
                      fontSize: "2rem",
                    }}
                  >
                    {service.icon}
                  </div>
                  <Card.Title className="fw-bold mb-3 gradient-text">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="text-muted mb-4">
                    {service.description}
                  </Card.Text>
                  <ul className="list-unstyled text-start">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="mb-2 feature-item"
                        style={{
                          animationDelay: `${featureIndex * 0.1}s`,
                        }}
                      >
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
