import React, { Component } from "react";

class Names extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { set, parentState } = this.props;
    return (
      <div className="section">
        <label htmlFor="name">Names</label>
        <input
          value={parentState.firstName}
          onChange={set}
          id="firstName"
          type="text"
          placeholder="First name"
        />
        <input
          id="middleNames"
          value={parentState.middleNames}
          onChange={set}
          type="text"
          placeholder="Middle name(s)"
        />
        <input
          id="lastName"
          value={parentState.lastName}
          onChange={set}
          type="text"
          placeholder="Last name"
        />
      </div>
    );
  }
}

export default Names;
