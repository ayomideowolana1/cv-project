import React, { Component } from "react";
import uniqid from "uniqid"

class SKills extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section">
        <label>Skills </label>
        <input
          id="skills"
          value={this.props.skills}
          placeholder="Skills separated by commas"
          onChange={this.props.set}
        />
      </div>
    );
  }
}

export default SKills;
