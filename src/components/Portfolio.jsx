import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useScrollAnimation from "../hooks/useScrollAnimation";
import chefaa from "../assets/chefaa.png";
import survey from "../assets/survey.jpg";
import { Link } from "lucide-react";
const Portfolio = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce chefaa clone",
      description:
        "A fully functional E-commerce web application inspired by the real-life pharmacy platform Chefaa, designed to provide users with a smooth online shopping experience for healthcare products.",
      image: chefaa,
        
      technologies: ["React", "php", "laravel","bootstrap"],
      link: "https://github.com/Gebaaly/chefaa",
    },
    {
      id: 2,
      title: "survey app",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:survey,
      technologies: ["React", "mongoose", "express", "nodejs"],
      link: "https://github.com/Gebaaly/survey",
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
              className="display-5 fw-bold mb-3 gradient-text"
            >
              My Projects
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
                    <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    View Project
                    </Link>
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
