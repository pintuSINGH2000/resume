import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import Aboutme from "../Aboutme/Aboutme";
import Introduction from "../Introduction/Introduction";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";
import Work from "../Work/Work";
import Coding from "../Coding/Coding";
import Footer from "../Footer/Footer";

const Header = () => {
  const [theme, setTheme] = useState("dark");
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const codingRef = useRef(null);
  const workRef = useRef(null);
  const footerRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      const scrollThreshold = 100;
      try {
        if (window.scrollY >= scrollThreshold) {
          header.classList.add("fixed-header");
        } else {
          header.classList.remove("fixed-header");
        }
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      data-bs-theme={theme}
      className={`ff-ss overflow-hidden ${theme === "dark" ? "dark" : "light"}`}
    >
      {/* header */}
      <div className="d-flex d-lg-block header justify-content-between align-items-center">
        <nav
          className="navbar navbar-expand-lg m-lg-auto"
          style={{ maxWidth: "1180px" }}
          data-bs-theme={theme}
        >
          <div className="container-fluid">
            <button
              data-bs-theme={theme}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link
                className={`navbar-brand mx-md-2 mx-3 fs-3 d-lg-block d-none fw-semibold link ff-ps ${
                  theme !== "dark" && "text-dark-blue"
                }`}
                data-bs-theme={theme}
                to="/"
                style={{ pointerEvents: "none" }}
              >
                Pintu Singh
              </Link>
              <ul className="navbar-nav ms-auto mt-2 mb-lg-0">
                <li className="nav-item mx-3 my-2">
                  <Link
                    className={`text-decoration-none link ${
                      theme !== "dark" && "text-dark-blue"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-3 my-2">
                  <Link
                    className={`text-decoration-none link ${
                      theme !== "dark" && "text-dark-blue"
                    }`}
                    onClick={() => scrollToSection(aboutRef)}
                  >
                    Hire me
                  </Link>
                </li>
                <li className="nav-item mx-3 my-2">
                  <Link
                    className={`text-decoration-none link ${
                      theme !== "dark" && "text-dark-blue"
                    }`}
                    onClick={() => scrollToSection(skillsRef)}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item mx-3 my-2">
                  <Link
                    className={`text-decoration-none link ${
                      theme !== "dark" && "text-dark-blue"
                    }`}
                    onClick={() => scrollToSection(projectsRef)}
                  >
                    Project
                  </Link>
                </li>
                <li className="nav-item mx-3 my-2 ">
                  <Link
                    className={`text-decoration-none link ${
                      theme !== "dark" && "text-dark-blue"
                    }`}
                    onClick={() => scrollToSection(workRef)}
                    data-bs-theme={theme}
                  >
                    Experience
                  </Link>
                </li>
                <li className="nav-item mx-3 my-2 ">
                  <Link
                    className={`text-decoration-none link ${
                      theme !== "dark" && "text-dark-blue"
                    }`}
                    onClick={() => scrollToSection(codingRef)}
                    data-bs-theme={theme}
                  >
                    DSA
                  </Link>
                </li>
                <li className="nav-item mx-3 my-2 ">
                  <Link
                    className={`text-decoration-none link ${
                      theme !== "dark" && "text-dark-blue"
                    }`}
                    onClick={() => scrollToSection(footerRef)}
                    data-bs-theme={theme}
                  >
                    Contact
                  </Link>
                </li>
                <li
                  className={`nav-item d-none d-lg-block mx-3 my-2 header-border  ${
                    theme === "dark"
                      ? "text-bg-light"
                      : "bg-dark-blue text-dark-blue"
                  }`}
                >
                  <Link
                    className={`text-decoration-none link `}
                    data-bs-theme={theme}
                  ></Link>
                </li>
                <li className="nav-item mx-3 my-2 d-lg-block d-none">
                  <Link
                    className={`text-decoration-none link ${
                      theme !== "dark" && "text-dark-blue"
                    }`}
                    to="https://github.com/pintuSINGH2000?tab=repositories"
                    target="_blank"
                    data-bs-theme={theme}
                  >
                    <AiFillGithub />
                  </Link>
                </li>
                <li className="nav-item mx-3 my-2 d-block d-lg-none">
                  <Link
                    className={`text-decoration-none link ${
                      theme !== "dark" && "text-dark-blue"
                    }`}
                    to="https://github.com/pintuSINGH2000?tab=repositories"
                    target="_blank"
                    data-bs-theme={theme}
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* end header */}
      <Introduction
        getTheme={theme}
        scrollToSection={scrollToSection}
        footerRef={footerRef}
      />
      <div ref={aboutRef}>
        <Aboutme getTheme={theme} />
      </div>

      <div ref={skillsRef}>
        <Skills getTheme={theme} />
      </div>
      <div ref={projectsRef}>
        <Project getTheme={theme} />
      </div>
      <div ref={workRef}>
        <Work getTheme={theme} />
      </div>

      <div ref={codingRef}>
        <Coding getTheme={theme} />
      </div>
      <div ref={footerRef}>
        <Footer getTheme={theme} />
      </div>
    </div>
  );
};

export default Header;
