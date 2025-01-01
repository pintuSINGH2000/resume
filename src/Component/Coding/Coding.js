import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Codings } from "../../Utils/Coding";
import { IoArrowRedoSharp } from "react-icons/io5";

const Coding = ({ getTheme }) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    setTheme(getTheme);
  }, [getTheme]);
  return (
    <div
      className={`postition-relative py-5 ${
        theme === "dark" ? "bg-dark-blue" : "bg-dark-light"
      }`}
    >
      <div
        className={`d-flex row m-md-auto mt-3 p-0 m-0 ${
          theme !== "dark" && "text-dark-blue"
        }`}
        style={{ maxWidth: "1180px" }}
      >
        <h1 className="pt-4 w-auto fw-bold mx-auto ">Coding Skill</h1>
      </div>
      <div className="row m-md-auto" style={{ maxWidth: "1180px" }}>
        {Codings?.map((coding, index) => (
          <div className="col-md-4 col-lg-3 mb-3 mb-sm-0 d-flex justify-content-center">
            <div className="card" style={{ width: "17rem" }}>
              <img
                src={coding.path}
                className="card-img-top"
                alt="..."
                style={{ height: "175px" }}
              />
              <div className="card-body">
                <h6 className="card-text">{coding.name}</h6>
                <a href={coding.link} target="_blank" rel="noreferrer"  className="btn w-100 d-flex align-items-center justify-content-between bg-orange mt-4 border-0 btn-light"><img style={{width:"40px",height:"15px"}} src={coding.logo} alt="..."/> {coding.slag} <div><IoArrowRedoSharp/></div></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coding;
