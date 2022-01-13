import React, { Component } from "react";

class Summary extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { set, parentState } = this.props;
    return (
      <div className="section">
        <label>Summary</label>
        <textarea
          id="summary"
          onChange={set}
          value={parentState.summary}
          placeholder="About yourself"
        />
      </div>
    );
  }
}

export default Summary;
