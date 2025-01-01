import React, { useEffect, useState } from "react";
import { Projects } from "../../Utils/Project";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const Project = ({ getTheme }) => {
  const [theme, setTheme] = useState(getTheme);
  useEffect(() => {
    setTheme(getTheme);
  }, [getTheme]);
  return (
    <div
      className={`postition-relative m-0 mb-5 p-0 ${
        theme === "dark" && "bg-dark-blue"
      }`}
    >
      <div
        className={`d-flex row m-md-auto mt-3 pt-5 m-0 p-0 ${
          theme !== "dark" && "text-dark-blue"
        }`}
        style={{ maxWidth: "1180px" }}
      >
        <h1 className="pt-4 w-auto fw-semibold mx-auto p-0 m-0">Projects</h1>
      </div>
      <div
        className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 m-auto "
        style={{ maxWidth: "1180px" }}
      >
        {Projects.map((project, index) => (
          <div className="col d-flex justify-content-center" key={project._id}>
            <div
              className="card"
              style={{
                width: "17rem",
                height: "24rem",
                boxShadow: "rgb(68 68 69) 1px 1px 0px 0px",
              }}
            >
              <img src={project.image} className="card-img-top" alt="..."/>
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="">
                  <div className="d-flex align-items-center justify-content-between my-1">
                    <h5 className="card-title m-0">{project.title}</h5>
                    <Link
                      className={`text-decoration-none link ${
                        theme !== "dark" && "text-dark-blue"
                      }`}
                      to={project.gitRipo}
                      target="_blank"
                      data-bs-theme={theme}
                    >
                      <AiFillGithub />
                    </Link>
                  </div>
                  <p className="card-text" style={{ fontSize: "10px" }}>
                    {project.description}
                  </p>
                  <p className="card-text" style={{ fontSize: "10px" }}>
                    Skills: {project.skills}
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary rounded-2 py-1 primary-button border-0"
                  >
                    Go Live
                  </a>
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary rounded-2 py-1 primary-button border-0"
                  >
                    watch
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
