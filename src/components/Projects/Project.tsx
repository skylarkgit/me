import React from "react";

function Project() {
  return (
    <div className="container">
      <h1 className="section-title">Projects</h1>
      <div className="section-body">
        <div className="section-item">
          <h1>Academy</h1>
          <h2>Angular, Spring Boot, Hibernate</h2>
          <p>
            This application deals with the learning and development of the
            employees/users of an organization. It includes features to create
            goals, opt a goal, track progress, mentorship, goal evaluation, and
            plan learning programs.
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
            BioCluster is a general-purpose distributed computing platform in
            order to optimize and boost the bio info jobs. It aims to distribute
            jobs onto several nodes to share the workload among multiple
            machines.
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
            A part of software development is to make the entities according to
            the database design and do the mapping. This tool with a few
            annotations can create mapped entities in JPA with optional DAO and
            repository layer.
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

export default Project;
