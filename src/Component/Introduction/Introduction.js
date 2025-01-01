import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Introduction = ({ getTheme, scrollToSection, footerRef }) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    setTheme(getTheme);
  }, [getTheme]);
  return (
    <div
      className="postition-relative row m-md-auto px-2 align-items-self py-3 m-0"
      style={{ maxWidth: "1180px" }}
      data-bs-theme={theme}
    >
      <div
        className="col-md-6 text-lg-start text-center order-2 order-md-2"
        data-bs-theme={theme}
      >
        <h4 className="fw-normal mt-5 pt-2" data-bs-theme={theme}>
          Hi I am
        </h4>
        <h2
          className={`fw-bolder primary-color ${
            theme !== "dark" && "text-dark-blue"
          }`}
        >
          Pintu Singh
        </h2>
        <h1 className={`fw-bold ${theme !== "dark" && "text-dark-blue"}`}>
          {" "}
          <Typewriter
            options={{
              strings: ["Full Stack Developer", "MERN Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p data-bs-theme={theme}>
          I am a skilled MERN stack developer with expertise in building
          scalable, user-friendly web applications using MongoDB, Express.js,
          React, and Node.js. I specialize in crafting responsive front-end
          interfaces, designing robust back-end architectures, and delivering
          efficient, optimized solutions. Passionate about problem-solving and
          continuous learning, I thrive in Agile environments to create
          innovative applications.
        </p>
        <div
          className="btn btn-primary primary-button w-25 border-0 rounded-2"
          aria-label="Basic example"
          data-bs-theme={theme}
          onClick={() => scrollToSection(footerRef)}
        >
          Hire me
        </div>
      </div>
      <div className="col-md-6 text-center order-1 order-md-2 position-relative d-flex align-items-center justify-content-center">
        <div
          className="circle position-relative"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            top: "10%",
          }}
        >
          <img src="/images/pintu.png" alt="profile" className="mt-5 profile" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
