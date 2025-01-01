import React, { useEffect, useState } from "react";

const Aboutme = ({ getTheme }) => {
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
      <div className="col-md-6 text-center order-1 order-md-2 align-items-center justify-content-center d-flex flex-column">
        <img
          src="/images/knight.gif"
          alt="profile"
          className="mt-5"
          style={{
            width: "240px",
            minHeight: "200px",
          }}
        />
        <div
          className="btn-group w-100 mt-4"
          role="group"
          aria-label="Basic example"
          data-bs-theme={theme}
        >
          <div
            className="btn btn-primary"
            data-bs-theme={theme}
            style={{ width: "25%" }}
          >
            <h1 className="fw-bold mb-0 mt-2">12+</h1>
            <p className="f-10">SKILLS</p>
          </div>
          <div
            className="btn btn-primary margin-lr-capsule"
            style={{ width: "25%" }}
          >
            <h1 className="fw-bold mb-0 mt-2">10+</h1>
            <p className="f-10">PROJECTS</p>
          </div>
          <div className="btn btn-primary margin-lr-capsule" style={{ width: "25%" }}>
            <h1 className="fw-bold mb-0 mt-2">500+</h1>
            <p className="f-10">DSA PROBLEMS SOLVED</p>
          </div>
          <div className="btn btn-primary" style={{ width: "25%" }}>
            <h1 className="fw-bold mb-0 mt-2">1Year</h1>
            <p className="f-10">Working Experience</p>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 text-lg-start text-center order-2 order-md-2"
        data-bs-theme={theme}
      >
        <h1 className="fw-normal mt-5 pt-2 fw-bold" data-bs-theme={theme}>
          Why Hire me?
        </h1>
        <p data-bs-theme={theme}>
          I have a proven track record of building industry-grade projects from
          scratch, demonstrating a strong command of the technological skills
          required for modern tech development. With hands-on experience gained
          through internships and full-time roles as a MERN stack developer, I
          specialize in delivering high-quality, scalable solutions. I’ve built
          over 8 projects, solved more than 500 DSA problems, and consistently
          showcased my passion for problem-solving and continuous learning.
          Thriving in Agile environments, I am driven to create innovative and
          impactful applications that meet user and business needs."
        </p>
        <div className="my-2">
          React
          <div
            className="progress position-relative overflow-visible bg-white mt-2 h-10"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar bg-orange rounded-5 border-none"
              style={{ width: "90%" }}
            >
              9/10
            </div>
            <div className="red-dot"></div>
          </div>
        </div>
        <div className="my-2">
          Node
          <div
            className="progress position-relative overflow-visible bg-white mt-2 h-10"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar bg-orange rounded-5 border-none"
              style={{ width: "80%" }}
            >
              8/10
            </div>
            <div className="red-dot"></div>
          </div>
        </div>
        <div className="my-2">
          MongoDB
          <div
            className="progress position-relative overflow-visible bg-white mt-2 h-10"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar bg-orange rounded-5 border-none"
              style={{ width: "90%" }}
            >
              9/10
            </div>
            <div className="red-dot"></div>
          </div>
        </div>
        <div className="my-2">
          My SQL
          <div
            className="progress position-relative overflow-visible bg-white mt-2 h-10"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar bg-orange rounded-5 border-none"
              style={{ width: "80%" }}
            >
              8/10
            </div>
            <div className="red-dot"></div>
          </div>
        </div>
        <div className="my-2">
          C++
          <div
            className="progress position-relative overflow-visible bg-white mt-2 h-10"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar bg-orange rounded-5 border-none"
              style={{ width: "90%" }}
            >
              9/10
            </div>
            <div className="red-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
