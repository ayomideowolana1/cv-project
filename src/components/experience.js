import React, { Component } from "react";
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqid(),
      position: "",
      company: "",
      dateFrom: "",
      dateTo: "",
      duties: [],
    };
    this.set = (e) => {
      if (e.target.id == "duties") {
        this.setState({
          [e.target.id]: e.target.value.split(","),
        });
      } else {
        this.setState({
          [e.target.id]: e.target.value,
        });
      }
      this.addExperience = () => {
        this.props.addExperience(this.state);
        this.setState({
          id: uniqid(),
          position: "",
          company: "",
          dateFrom: "",
          dateTo: "",
          duties: [],
        });
      };
    };
  }
  render() {
    return (
      <div>
        <div className="subSection">
          <input
            type="text"
            placeholder="Position"
            value={this.state.position}
            id="position"
            onChange={this.set}
          />
          <input
            placeholder="Company"
            type="text"
            value={this.state.company}
            onChange={this.set}
            id="company"
          />
          <label>
            <span>from</span>
            <input
              onChange={this.set}
              type="date"
              id="dateFrom"
              onChange={this.set}
              value={this.state.dateFrom}
            />
            <span>to</span>
            <input
              type="date"
              onChange={this.set}
              id="dateTo"
              value={this.state.dateTo}
            />
          </label>
          <input
            id="duties"
            onChange={this.set}
            type="text"
            value={this.state.duties}
            placeholder="Duties separated by commas"
          />
        </div>
        <button type="submit" onClick={this.addExperience}>
          Add experience
        </button>
      </div>
    );
  }
}

export default Experience;
