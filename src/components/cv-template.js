import React, { Component } from "react";
import EducationList from "./educationList";
import ExperienceList from "./experienceList";
import uniqid from "uniqid";

class Template extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { parentState } = this.props;
    return (
      <div className="col template">
        <div className="row row1">
          <div>
            <h1>
              {parentState.firstName} {parentState.middleNames}{" "}
              {parentState.lastName}{" "}
            </h1>
          </div>
          <div className=" contact">
            <span>{parentState.phone}</span>
            <span>{parentState.email}</span>
          </div>
        </div>
        <div className="row row2">
          <div className="col-8 summary">
            <p>{parentState.summary}</p>
          </div>
          <div className="col-4 ">
            <div className="picture"></div>
          </div>
        </div>
        <div className="row row3">
          <div className="col-8">
            <div>
              <h3>Experience</h3>
              <ExperienceList experiences={parentState.experiences} />
            </div>
            <div>
              <h3>Languages</h3>
              <p>{parentState.languages}</p>
            </div>
          </div>
          <div className="col-4 right">
            <div>
              <h3>Skills</h3>
              <p>
                {parentState.skills.split(",").map((skill) => {
                  return <li key={uniqid()}>{skill}</li>;
                })}
              </p>
            </div>
            <div>
              <h3>Education</h3>
              <EducationList education={parentState.education} />
            </div>
            {/* <div>
              <h3>Certification</h3>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
