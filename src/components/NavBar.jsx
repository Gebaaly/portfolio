import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-3 ${
        scrolled
          ? darkMode
            ? "bg-dark shadow-sm"
            : "bg-white shadow-sm"
          : "bg-transparent"
      }`}
      style={{ transition: "all 0.3s ease" }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className={`fw-bold ${darkMode ? "text-light" : "text-primary"}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Abdelrahman Elgebaly
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-3">
            <Nav.Link
              href="#home"
              className={darkMode ? "text-light" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={darkMode ? "text-light" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={darkMode ? "text-light" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#services"
              className={darkMode ? "text-light" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={darkMode ? "text-light" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </Nav.Link>
          </Nav>

          <button
            className={`theme-toggle btn ${darkMode ? "toggled" : ""}`}
            onClick={toggleDarkMode}
            aria-pressed={darkMode}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            <span className="toggle-track" aria-hidden>
              <span className="toggle-thumb">
                {/* Moon icon (for dark) */}
                <svg
                  className="icon icon-moon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                {/* Sun icon (for light) */}
                <svg
                  className="icon icon-sun"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="M4.93 4.93l1.41 1.41"></path>
                  <path d="M17.66 17.66l1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="M4.93 19.07l1.41-1.41"></path>
                  <path d="M17.66 6.34l1.41-1.41"></path>
                </svg>
              </span>
            </span>
            <span className="visually-hidden">
              {darkMode ? "Light mode" : "Dark mode"}
            </span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
