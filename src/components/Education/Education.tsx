import React from "react";

function Education() {
  return (
    <div className="container">
      <h1 className="section-title">Education</h1>
      <div className="section-body">
        <div className="section-item">
          <h1>
            B. Tech Computer Science @ <i>Rajasthan Technical University</i>
          </h1>
          <h2>July 2014 - May 2018</h2>
          <p>
            Linux/Unix Programming, C++ Programming, Website Development,
            Relational Database Design &amp; SQL, Data Engineering, Operating
            Systems Architecture, Cloud Computing.
          </p>

          {/* <div>
            <button className="btn btn-primary mb-3 mb-lg-0 mr-3">
              <i className="fa fa-info mr-2"></i> Know More
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Education;
