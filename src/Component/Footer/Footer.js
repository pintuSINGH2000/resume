import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Footer = ({ getTheme }) => {
  const [theme, setTheme] = useState(getTheme);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    if(!formData.name || !formData.email || !formData.message || loader) return;
    setLoader(true);
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const serviceID = process.env.REACT_APP_SERVICE_API;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const templateID = process.env.REACT_APP_TEMPLATE_KEY;
    

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (response) => {
        toast.success("Email sent successfully:");
        setLoader(false);
      },
      (error) => {
        setLoader(false);
        toast.error("Failed to send email. Please try again later.");
      }
    );

    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    setTheme(getTheme);
  }, [getTheme]);
  return (
    <div
      className={`postition-relative py-4 m-auto position-relative ${
        theme === "dark" ? "bg-dark-blue" : ""
      }`}
      style={{ maxWidth: "1180px" }}
    >
      <img src="images/editor.png" alt="..." className="w-100" style={{height:"850px"}}/>
      <div
        className="position-absolute d-flex flex-column align-items-center justify-content-center"
        style={{ top: "10%", left: "5%" }}
      >
        <div
          className={`d-flex row m-md-auto mt-3 p-0 m-0 ${
            theme !== "dark" && "text-dark-blue"
          }`}
        >
          <h1 className="pt-4 w-auto fw-bold mx-auto ">Lets Work Together</h1>
        </div>
        <p className="text-center w-75">
          I’m excited about the opportunity to bring my skills and passion for{" "}
          <span className="orange fw-bold text-center">MERN</span> stack
          developer to your team. Let’s work together to drive innovation and
          achieve outstanding results.
        </p>
        <div className="col-md-5 col-sm-8 my-4 col-9">
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              id="floatingInputDisabled"
              placeholder="Write your name"
              value={formData.name}
              onChange={handleChange}
              name="name"
              required
            />
            <label htmlFor="floatingInputDisabled">Name</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control"
              id="floatingInputDisabled"
              placeholder="Write your email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
            />
            <label htmlFor="floatingInputDisabled">Email</label>
          </div>

          <div className="form-floating mb-4">
            <textarea
              className="form-control"
              placeholder="Write your message here"
              id="floatingTextarea2Disabled"
              style={{ height: 150, resize: "none" }}
              value={formData.message}
              onChange={handleChange}
              required
              name="message"
            />
            <label htmlFor="floatingTextarea2Disabled">Your Message</label>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className={`btn btn-light w-50 border-0 ${loader?"text-black":"bg-orange text-white"}`} onClick={handleSubmit}>
              Let's Connect
            </div>
          </div>
        </div>
        <Link
          className={`navbar-brand mx-md-2 mx-3 mt-2 mt-md-5  mb-2 mb-md-4 fs-3 d-lg-block fw-semibold link ff-ps ${
            theme !== "dark" && "text-dark-blue"
          }`}
          data-bs-theme={theme}
          to="/"
          style={{ pointerEvents: "none" }}
        >
          Pintu Singh
        </Link>
        <ul className="d-flex align-items-center justify-content-center m-0 p-0">
          <li className="mx-3 my-2 d-lg-block list-unstyled">
            <Link
              className={`text-decoration-none link ${
                theme !== "dark" && "text-dark-blue"
              }`}
              to="https://github.com/pintuSINGH2000?tab=repositories"
              target="_blank"
              data-bs-theme={theme}
            >
              <FaGithub className="fs-3" />
            </Link>
          </li>
          <li className="mx-3 my-2 d-lg-block list-unstyled">
            <Link
              className={`text-decoration-none  link ${
                theme !== "dark" && "text-dark-blue"
              }`}
              to="https://www.linkedin.com/in/pintu-singh-9549871b4/"
              target="_blank"
              data-bs-theme={theme}
            >
              <FaLinkedin className="fs-3" />
            </Link>
          </li>
          <li className="mx-3 my-2 d-lg-block list-unstyled">
            <Link
              className={`text-decoration-none link ${
                theme !== "dark" && "text-dark-blue"
              }`}
              to="https://leetcode.com/u/pintu2000/"
              target="_blank"
              data-bs-theme={theme}
            >
              <SiLeetcode className="fs-3" />
            </Link>
          </li>
          <li className="mx-3 my-2 d-lg-block list-unstyled">
            <Link
              className={`text-decoration-none link ${
                theme !== "dark" && "text-dark-blue"
              }`}
              to="https://www.codechef.com/users/pintu_1569"
              target="_blank"
              data-bs-theme={theme}
            >
              <SiCodechef className="fs-3" />
            </Link>
          </li>
          <li className="mx-3 my-2 d-lg-block list-unstyled">
            <Link
              className={`text-decoration-none link ${
                theme !== "dark" && "text-dark-blue"
              }`}
              to="https://codeforces.com/profile/pintu_1569"
              target="_blank"
              data-bs-theme={theme}
            >
              <SiCodeforces className="fs-3" />
            </Link>
          </li>
        </ul>
      </div>
      <p className="my-2 d-block d-sm-flex text-center align-items-center justify-content-center">
        © 2025 <span className="orange mx-2 fw-bold"> Pintu Singh</span> All
        Rights Reserved &nbsp; &nbsp; &nbsp; <p className=" m-0">Made with ❤️ | &nbsp; Thanks For
        Visiting.</p>
      </p>
    </div>
  );
};

export default Footer;
