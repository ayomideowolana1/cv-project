import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { set, parentState } = this.props;
    return (
      <div className="section">
        <label>Contact information</label>
        <input
          id="phone"
          onChange={set}
          value={parentState.phone}
          type="tel"
          placeholder="Phone number"
        />
        <input
          id="email"
          onChange={set}
          value={parentState.email}
          type="mail"
          placeholder="Email"
        />
      </div>
    );
  }
}

export default Contact;
