import React from "react";

function Skill() {
  return (
    <div className="row">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
