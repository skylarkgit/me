import React from "react";
import "./App.css";
import avatar from './img/avatar.svg';

function App() {
  return (
    <div className="container-fluid">
      <div className="jumbotron banner">
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
                    <li className="mr-2">
                      <a
                        href="https://api.whatsapp.com/send?phone=919928423569&text=Hi,%20I%20found%20you%20through%20github%20and%20would%20like%20to%20connect%20yo%20you!"
                        target="_blank"
                        className="btn btn-icon-only btn-pill btn-primary"
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
                    <li className="mr-2">
                      <a
                        href="https://www.facebook.com/abhayonfacebuk/"
                        target="_blank"
                        className="btn btn-icon-only btn-pill btn-primary"
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
                    <li className="mr-2">
                      <a
                        href="https://github.com/skylarkgit"
                        target="_blank"
                        className="btn btn-icon-only btn-pill btn-primary"
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
                        className="btn btn-icon-only btn-pill btn-primary"
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
              <div className="my-image">
                <img src={avatar} />
              </div>
            </div>
          </div>
          <div id="scroll-down" className="scroll-down">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h1 className="section-title">EXPERIENCE</h1>
          <div className="section-body">
            <div className="section-item">
              <h1>
                Software Engineer @ <i>Metacube Softwares</i>
              </h1>
              <h2>July 2018 - Present</h2>
              <p>
                Software and system design from scratch. Set up and manage
                project deployments. Full-stack development from the database
                layer to user interfaces. Automated the entity generation
                process from database scripts. Web scraping to migrate data to a
                new software system
              </p>
              <div>
                <button className="btn btn-primary mb-3 mb-lg-0 mr-3">
                  <i className="fa fa-info mr-2"></i> Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h1 className="section-title">Projects</h1>
          <div className="section-body">
            <div className="section-item">
              <h1>Academy</h1>
              <h2>Angular, Spring Boot, Hibernate</h2>
              <p>
                This application deals with the learning and development of the
                employees/users of an organization. It includes features to
                create goals, opt a goal, track progress, mentorship, goal
                evaluation, and plan learning programs.
              </p>

              <div>
                <button className="btn btn-primary mb-3 mb-lg-0 mr-3">
                  <i className="fa fa-info mr-2"></i> Know More
                </button>
              </div>
            </div>

            <div className="section-item">
              <h1>BioCluster</h1>
              <h2>C++, Bash, Matlab, Java</h2>
              <p>
                BioCluster is a general-purpose distributed computing platform
                in order to optimize and boost the bio info jobs. It aims to
                distribute jobs onto several nodes to share the workload among
                multiple machines.
              </p>

              <div>
                <button className="btn btn-primary mb-3 mb-lg-0 mr-3">
                  <i className="fa fa-info mr-2"></i> Know More
                </button>
              </div>
            </div>

            <div className="section-item">
              <h1>sql2java</h1>
              <h2>python</h2>
              <p>
                A part of software development is to make the entities according
                to the database design and do the mapping. This tool with a few
                annotations can create mapped entities in JPA with optional DAO
                and repository layer.
              </p>

              <div>
                <button className="btn btn-primary mb-3 mb-lg-0 mr-3">
                  <i className="fa fa-info mr-2"></i> Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-9">
          <div className="row p-2">
            <div className="col-12">
              <div className="card glassy" data-aos="zoom-in-up">
                <div className="card-body"></div>
              </div>
            </div>
          </div>

          <div className="row p-2">
            <div className="col-12">
              <div id="projects" className="card glassy" data-aos="zoom-in-up">
                <div className="card-body">
                  <h1 className="section-title">PROJECTS</h1>
                  <div className="section-item">
                    <h2>
                      Academy &mdash; <em>Angular, Spring Boot, Hibernate</em>
                    </h2>
                    <p>
                      This application deals with the learning and development
                      of the employees/users of an organization. It includes
                      features to create goals, opt a goal, track progress,
                      mentorship, goal evaluation, and plan learning programs.
                    </p>
                  </div>
                  <div className="section-item">
                    <h2>
                      BioCluster &mdash; <em>C++, Bash, Matlab, Java</em>
                    </h2>
                    <p>
                      BioCluster is a general-purpose distributed computing
                      platform in order to optimize and boost the bio info jobs.
                      It aims to distribute jobs onto several nodes to share the
                      workload among multiple machines.
                    </p>
                  </div>

                  <div className="section-item">
                    <h2>
                      sql2java &mdash; <em>python</em>
                    </h2>
                    <p>
                      A part of software development is to make the entities
                      according to the database design and do the mapping. This
                      tool with a few annotations can create mapped entities in
                      JPA with optional DAO and repository layer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row p-2">
            <div className="col-12">
              <div className="card glassy" data-aos="zoom-in-up">
                <div className="card-body">
                  <h1 className="section-title">EDUCATION</h1>
                  <div className="section-item">
                    <h2>
                      Rajasthan Technical University &mdash;
                      <em>B. Tech Computer Science</em>
                    </h2>
                    <h3>July 2014 - May 2018</h3>
                    <p>
                      Linux/Unix Programming, C++ Programming, Website
                      Development, Relational Database Design &amp; SQL, Data
                      Engineering, Operating Systems Architecture, Cloud
                      Computing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3">
          <div className="card glassy" data-aos="zoom-in-up">
            <div className="card-body">
              <h1 className="section-title">SKILLS</h1>
              <ul className="list-group">
                <li className="list-group-item">
                  Languages: Java, Javascript, C++, Python, Matlab
                </li>
                <li className="list-group-item">
                  Frameworks: Angular, Spring Boot, React, React Native
                </li>
                <li className="list-group-item">Platforms: Heroku, AWS</li>
                <li className="list-group-item">Misc: Node</li>
              </ul>

              <h1 className="section-title">ACHIEVEMENTS</h1>

              <p>Made two publications in high-performance computing.</p>

              <h1 className="section-title">PASSION PROJECTS</h1>
              <p>
                KeyNotes: Application to extract vocal properties of human
                sounds and songs. Based on <em>librosa</em> and
                <em>Spleeter</em>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card glassy "></div>
      <div className="row">
        <div className="col-9 "></div>
        <div className="col-3 "></div>
      </div>
    </div>
  );
}

export default App;
