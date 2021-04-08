import React from "react";

function Experience() {
  return (
    <div className="container">
      <h1 className="section-title">EXPERIENCE</h1>
      <div className="section-body">
        <div className="section-item">
          <h1>
            Software Engineer @ <i>Metacube Softwares</i>
          </h1>
          <h2>July 2018 - Present</h2>
          <p>
            Software and system design from scratch. Set up and manage project
            deployments. Full-stack development from the database layer to user
            interfaces. Automated the entity generation process from database
            scripts. Web scraping to migrate data to a new software system
          </p>
          <div>
            <button className="btn btn-primary mb-3 mb-lg-0 mr-3">
              <i className="fa fa-info mr-2"></i> Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
