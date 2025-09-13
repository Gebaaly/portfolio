import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Portfolio = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce website built with React and Node.js, featuring user authentication, product management, and payment integration.",
      image:
        "https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+Management+App",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather application that displays current weather conditions and forecasts using OpenWeatherMap API.",
      image:
        "https://via.placeholder.com/400x250/667eea/ffffff?text=Weather+Dashboard",
      technologies: ["React", "OpenWeatherMap API", "Chart.js", "CSS3"],
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
      image:
        "https://via.placeholder.com/400x250/764ba2/ffffff?text=Portfolio+Website",
      technologies: ["React", "Bootstrap", "CSS3", "JavaScript"],
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling features.",
      image:
        "https://via.placeholder.com/400x250/667eea/ffffff?text=Social+Media+Dashboard",
      technologies: ["React", "Express.js", "PostgreSQL", "Chart.js"],
    },
    {
      id: 6,
      title: "Recipe Finder App",
      description:
        "A recipe discovery application that helps users find and save recipes based on available ingredients.",
      image:
        "https://via.placeholder.com/400x250/764ba2/ffffff?text=Recipe+Finder+App",
      technologies: ["React", "Spoonacular API", "LocalStorage", "CSS3"],
    },
  ];

  const titleRef = useScrollAnimation();
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate");
              }, index * 200);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  const handleViewProject = (projectId) => {
    // Placeholder for project view functionality
    alert(
      `Viewing project ${projectId} - This would open the project details or live demo`
    );
  };

  return (
    <section
      id="portfolio"
      className={`py-5 ${darkMode ? "bg-dark" : "bg-light"}`}
    >
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2
              ref={titleRef}
              className="display-5 fw-bold mb-3 fade-in-up gradient-text"
            >
              My Portfolio
            </h2>
            <div
              ref={titleRef}
              className="border-bottom border-3 border-primary mx-auto mb-4 fade-in-up"
              style={{ width: "60px" }}
            ></div>
            <p ref={titleRef} className="text-muted fade-in-up">
              Here are some of my recent projects that showcase my skills and
              experience.
            </p>
          </Col>
        </Row>

        <Row ref={cardsRef}>
          {projects.map((project) => (
            <Col key={project.id} lg={4} md={6} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold mb-3">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <div className="mb-3">
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-secondary fs-6">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => handleViewProject(project.id)}
                    className="mt-auto"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
