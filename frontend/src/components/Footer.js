import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <>
        {/* Footer */}
        <footer className=" text-center ">
          {/* Grid container */}
          <div className="container p-4">
            {/* Section: Social media */}
            <section className="mb-4">
              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/sudhanshu-singh-926391213/"
                className="btn  text-center btn-floating m-1 "
              >
                <i className="fab fa-linkedin-in"></i>{" "}
              </a>
              <a
                href="https://github.com/Sudhanshusingh705"
                className="btn  text-center btn-floating m-1 "
              >
                <i className="fab fa-github" />
              </a>
            </section>
            {/* Section: Social media */}
            {/* Section: Text */}
            <section className="mb-4">
              <p>Created by ❤</p>
            </section>
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a
              className="text-dark"
              href="https://www.linkedin.com/in/sudhanshu-singh-926391213/"
            >
              @SUDHANSHU SINGH
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </>
    </div>
  );
};
export default Footer;
