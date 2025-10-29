import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Home = ({ darkMode }) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Frontend Developer";

  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const descriptionRef = useScrollAnimation();
  const buttonRef = useScrollAnimation();

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const handleDownloadResume = () => {
    // Try to download the resume from Google Drive. We attempt to fetch the file
    // as a blob and force a download. If that fails (CORS/redirect), fall back
    // to opening the Drive direct-download URL in a new tab.

    const RESUME_ID = "1ppWtRZsAbeth_pw1cHYXdLgDoJ1WRbnv";
    const directLink = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`;

    const downloadViaBlob = async () => {
      try {
        const res = await fetch(directLink);
        if (!res.ok) throw new Error("Network response was not ok");
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Abdelrahman_Elgebaly_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        return true;
      } catch (err) {
        return false;
      }
    };

    downloadViaBlob().then((ok) => {
      if (!ok) {
        // Fallback: open the direct link in a new tab/window
        window.open(directLink, "_blank", "noopener");
      }
    });
  };

  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center"
      style={{
        background: darkMode
          ? "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)"
          : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <div className="mb-4">
              <h1 ref={titleRef} className="display-3 fw-bold mb-3 fade-in-up">
                Abdelrahman Elgebaly
              </h1>
              <h2
                ref={subtitleRef}
                className="h3 mb-4 text-light fade-in-up"
                style={{ minHeight: "2rem" }}
              >
                {text}
                <span className="typing-cursor">|</span>
              </h2>
              <p ref={descriptionRef} className="lead mb-5 fade-in-up">
                Passionate about creating beautiful, responsive, and
                user-friendly web experiences. I specialize in modern web
                technologies and love turning complex problems into simple,
                elegant solutions.
              </p>
              <div ref={buttonRef} className="fade-in-up">
                <Button
                  variant={darkMode ? "outline-light" : "light"}
                  size="lg"
                  className="px-4 py-2 fw-semibold floating"
                  onClick={handleDownloadResume}
                >
                  <i className="bi bi-download me-2"></i>
                  Download Resume
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
