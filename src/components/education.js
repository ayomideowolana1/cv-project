import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqid(),
      school: "",
      course: "",
      date: "",
    };
    this.set = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
    this.addEducation = () => {
      this.props.addEducation(this.state);
      this.setState({
        id: uniqid(),
        school: "",
        course: "",
        date: "",
      });
    };
  }
  render() {
    return (
      <div>
        <div className="subSection">
          <input
            type="text"
            placeholder="School"
            value={this.state.school}
            id="school"
            onChange={this.set}
          />
          <input
            placeholder="Course"
            type="text"
            value={this.state.course}
            onChange={this.set}
            id="course"
          />
          <label>
            <span>Date finished</span>
            <input
              onChange={this.set}
              type="date"
              id="date"
              onChange={this.set}
              value={this.state.date}
            />
          </label>
        </div>
        <button type="submit" onClick={this.addEducation}>
          Add education
        </button>
      </div>
    );
  }
}

export default Education;
