import React, { Component } from "react";
import Contact from "./contact";
import Experience from "./experience";
import ExperienceList from "./experienceList";
import Names from "./names";
import Summary from "./summary";
import SKills from "./skills";
import Education from "./education";
import EducationList from "./educationList";
import Languages from "./languages";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [],
      education: [],
      skills: "",
    };
    this.set = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
    this.prev = (e) => {
      e.preventDefault();
    };
  }

  render() {
    const {
      set,
      parentState,
      addExperience,
      experiences,
      skills,
      education,
      addEducation,
      languages,
    } = this.props;
    return (
      <div className="col-lg-4">
        <form onSubmit={this.prev}>
          <Names set={set} parentState={parentState} />
          <Contact set={set} parentState={parentState} />
          <Summary set={set} parentState={parentState} />

          <div className="section">
            <label>Experience</label>
            <ExperienceList experiences={experiences} />
            <Experience addExperience={addExperience} />
          </div>

          <SKills skills={skills} set={set} />

          <div className="section">
            <label>Educaiton</label>
            <EducationList education={education} />
            <Education addEducation={addEducation} />
          </div>
          <Languages set={set} value={languages} />
        </form>
      </div>
    );
  }
}

export default Form;
