import React, { Component } from "react";
import uniqid from "uniqid";

class EducationList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { education } = this.props;
    return (
      <ul className="experienceList">
        {education.map((e) => {
          return (
            <li key={e.id}>
              <div>
                <span>
                  <b>{e.course}</b> - <i>{e.school}</i> -{e.date}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default EducationList;
