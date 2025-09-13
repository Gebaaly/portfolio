import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import useScrollAnimation from "../hooks/useScrollAnimation";

const About = ({ darkMode }) => {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Git",
    "REST APIs",
    "Responsive Design",
    "UI/UX Design",
  ];

  const titleRef = useScrollAnimation();
  const photoRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();

  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2
              ref={titleRef}
              className="display-5 fw-bold mb-3 fade-in-up gradient-text"
            >
              About Me
            </h2>
            <div
              ref={titleRef}
              className="border-bottom border-3 border-primary mx-auto fade-in-up"
              style={{ width: "60px" }}
            ></div>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div ref={photoRef} className="text-center scale-in">
              <div
                className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center floating"
                style={{
                  width: "300px",
                  height: "300px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  fontSize: "4rem",
                  fontWeight: "bold",
                }}
              >
                AE
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div ref={contentRef} className="ps-lg-4 fade-in-right">
              <h3 className="h4 mb-4 gradient-text">
                Frontend Developer & UI/UX Enthusiast
              </h3>
              <p className="text-muted mb-4">
                I'm a passionate frontend developer with over 1 year of
                experience creating modern web applications. I love working with
                React and other cutting-edge technologies to build user-friendly
                interfaces that make a difference.
              </p>
              <p className="text-muted mb-4">
                When I'm not coding, you can find me exploring new design
                trends, contributing to open-source projects, or sharing
                knowledge with the developer community. I believe in writing
                clean, maintainable code and creating experiences that users
                love.
              </p>

              <div ref={skillsRef}>
                <h5 className="mb-3 gradient-text">Skills & Technologies</h5>
                <div className="d-flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      bg="primary"
                      className="px-3 py-2 fs-6 skill-badge"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        opacity: 0,
                        transform: "translateY(20px)",
                        animation: "fadeInUp 0.6s ease forwards",
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
