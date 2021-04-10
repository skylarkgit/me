import React, { useEffect } from "react";
import "./App.css";
import avatar from "./img/avatar.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollIcon from "./components/ScrollIcon/ScrollIcon";
import Experience from "./components/Experiences/Experience";
import Project from "./components/Projects/Project";
import Education from "./components/Education/Education";
import Skill from "./components/Skills/Skill";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="container-fluid snap-container no-scroller">
      <div className="jumbotron banner snap-item">
        <div className="container">
          <div className="auto-center row py-5">
            <div className="col-12 col-md-8">
              <div>
                <h1 className="title">I am a Full-Stack Developer</h1>
                <p>
                  Software engineer with thorough hands-on experience in all
                  levels of software development, including performance
                  optimization, project design, DevOps, and UI development.
                </p>
                <div className="mb-4">
                  <a
                    href="https://docs.google.com/document/d/184FDmrJykz8kBJxL-Oj4L2LwMrFt9yQVxXQzBDcUaAY/export?format=pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary mb-3 mb-lg-0 mr-3"
                  >
                    <i className="fas fa-cloud-download-alt mr-2"></i> Resume
                  </a>
                  <a
                    href="#projects"
                    className="btn btn-primary mb-3 mb-lg-0 mr-3"
                  >
                    <i className="fa fa-chevron-circle-right mr-2"></i> Projects
                  </a>
                </div>
                <div>
                  <ul className="d-flex list-unstyled mb-5 mb-lg-0">
                    <li className="mr-3">
                      <a
                        href="https://api.whatsapp.com/send?phone=919928423569&text=Hi,%20I%20found%20you%20through%20github%20and%20would%20like%20to%20connect%20yo%20you!"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-icon-only btn-pill btn-primary neu-2 circle"
                        aria-label="twitter social link"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Connect with me on WhatsApp"
                      >
                        <span
                          aria-hidden="true"
                          className="fab fa-whatsapp"
                        ></span>
                      </a>
                    </li>
                    <li className="mr-3">
                      <a
                        href="https://www.facebook.com/abhayonfacebuk/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-icon-only btn-pill btn-primary neu-2 circle"
                        aria-label="facebook social link"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Hit me up on Facebook"
                      >
                        <span
                          aria-hidden="true"
                          className="fab fa-facebook"
                        ></span>
                      </a>
                    </li>
                    <li className="mr-3">
                      <a
                        href="https://github.com/skylarkgit"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-icon-only btn-pill btn-primary neu-2 circle"
                        aria-label="github social link"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Open source projects"
                      >
                        <span
                          aria-hidden="true"
                          className="fab fa-github"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:abhay199658@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-icon-only btn-pill btn-primary neu-2 circle"
                        aria-label="email"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Send me an Email"
                        aria-describedby="tooltip819558"
                      >
                        <span
                          aria-hidden="true"
                          className="fab fa-google"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="my-image auto-center neu-7 circle">
                <img alt="skylark" src={avatar} />
              </div>
            </div>
          </div>
          <ScrollIcon></ScrollIcon>
        </div>
      </div>

      <div className="section snap-item">
        <Experience></Experience>
      </div>

      <div className="section snap-item">
        <Project></Project>
      </div>

      <div className="section snap-item">
        <Education></Education>
      </div>

      <div className="section snap-item">
        <Skill></Skill>
      </div>
    </div>
  );
}

export default App;
