import React, { useState } from "react";
import { Works } from "../../Utils/Work";

const Work = ({ getTheme }) => {
  const [theme, setTheme] = useState(getTheme);
  return (
    <div className="postition-relative my-5 m-auto px-2" data-bs-theme={theme}  style={{ maxWidth: "1180px" }}>
      <div
        className={`d-flex row m-md-auto my-xl-5 p-0 m-0 ${
          theme !== "dark" && "text-dark-blue"
        }`}
        style={{ maxWidth: "1180px" }}
      >
        <h1 className="pt-4 w-auto fw-bold mx-auto p-0 m-0">
          My Work Experince{" "}
        </h1>
      </div>
      <div>
        {
            Works.map((work,index)=>(
                <div className="d-block text-center py-4 py-lg-0 d-lg-flex justify-content-between  w-100 my-3" key={work.id}>
                    <div style={{flex:"1"}}>
                        <h3 className="fw-bold ff-popins my-1" >{work.Company_name}</h3>
                        <p style={{fontSize:"10px",color:'#bfbaba'}} className="ff-popins">{work.date}</p>
                    </div>
                    <div className="d-flex py-4 py-lg-0 flex-column align-items-center position-relative" style={{flex:"1"}}>{index!==0&&<div className="bar d-none d-lg-block"></div>}<div className="rounded-circle bg-white p-3 z-3" style={{border:"5px solid #FD6F00"}}><img src={work.logo} alt="..." width={150}/></div></div>
                    
                    <div  style={{flex:"1"}}>
                        <h3 className="fw-bold ff-popins my-1">{work.stack}</h3>
                        <p style={{fontSize:"10px",color:'#bfbaba'}} className="ff-popins">{work.Experience}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Work;
