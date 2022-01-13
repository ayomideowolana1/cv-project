import React, { Component } from "react";

class Languages extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { set, value } = this.props;
    return (
      <div className="section">
        <label>Languages</label>
        <input
          id="languages"
          placeholder="Languages separated by commas"
          value={value}
          onChange={set}
        />
      </div>
    );
  }
}

export default Languages;
