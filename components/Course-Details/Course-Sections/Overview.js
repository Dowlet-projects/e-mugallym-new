"use client";

import React, { useState } from "react";

const Overview = ({ learning_outcomes, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={`rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more ${toggle ? "active" : ""
          }`}
        id="overview"
      >
        <div className="rbt-course-feature-inner has-show-more-inner-content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">{title}</h4>
          </div>
          <div dangerouslySetInnerHTML={{ __html: learning_outcomes }} />

          {/* <div className="row g-5 mb--30">
            <div className="col-lg-6">
              <ul className="rbt-list-style-1">
                
              </ul>
            </div>

            <div className="col-lg-6">
              <ul className="rbt-list-style-1">
                
              </ul>
            </div>
          </div> */}
          {/* <p>{course?.description}</p> */}
        </div>
        <div
          className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          Giňişleýin
        </div>
      </div>
    </>
  );
};

export default Overview;
