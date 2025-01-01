import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { Skill } from "../../Utils/Skill";

const Skills = ({ getTheme }) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    setTheme(getTheme);
  }, [getTheme]);
  return (
    <div
      className={`postition-relative pb-5 m-0 p-0 ${
        theme === "dark" && "bg-dark-blue"
      }`}
    >
      <div
        className={`d-flex row m-md-auto mt-3 pt-5 m-0 p-0 ${
          theme !== "dark" && "text-dark-blue"
        }`}
        style={{ maxWidth: "1180px" }}
      >
        <h1 className="pt-4 w-auto fw-semibold mx-auto p-0 m-0">Skill Acquired</h1>
        {/* <div className="skill-line m-4 mt-5 d-none d-lg-block"></div> */}
      </div>
      <div
        className="d-flex flex-wrap m-md-auto row pt-5 p-0 m-0"
        style={{ maxWidth: "1180px" }}
      >
        <div
          className="d-flex flex-wrap align-items-center justify-content-center"
          style={{
            gap: "64px",
          }}
        >
          {Skill.map((skill, index) => (
            <div
              key={skill.id}
              className={`d-flex flex-column align-items-center justify-content-center p-0 rounded-2`}
              style={{
                order: skill.id <= 8 ? skill.id : Skill.length - (Skill.id - 9),
                border: "1px solid rgba(255, 255, 255, 0.16)",
                backgroundColor: theme === "dark" ?"rgba(26, 32, 44, 1)": "#4883e9",
                height: "120px",
                width: "120px",
              }}
            >
              <img src={skill.path} alt="skill" style={{ maxHeight: "55px" }} />
              <div
                className={`py-2 text-center text-uppercase text-white fw-bolder`}
                style={{fontSize:"10px"}}
              >
                {skill.name}
              </div>
            </div>
          ))}
        </div>
        {/* {Skill?.map((skill, index) => (
          <div
            className="d-flex flex-column col-4 col-md-3 align-items-center pb-5 p-0"
            key={index}
          >
            <div className="btn rounded-4 skill">
              <img
                src={skill.path}
                className="card-img-top zoom"
                alt="skills"
                style={{ maxHeight: "55px" }}
              />
            </div>
            <div
              className={`py-2 text-center text-uppercase ${
                theme !== "dark" && "text-dark-blue"
              }`}
            >
              {skill.name}
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Skills;
