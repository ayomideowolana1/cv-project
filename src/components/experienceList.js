import React, { Component } from "react";
import uniqid from "uniqid";

class ExperienceList extends Component {
  constructor(props) {
    super(props);
    this.getCurrentExperience = (id) => {
      let index;
      this.props.experiences.forEach((i) => {
        if (i.id == id) {
          index = this.props.experiences.indexOf(i);
        }
      });
      return index;
      //use the index to work on editing and deleting from the experience array
    };
  }
  render() {
    const { experiences } = this.props;
    return (
      <ul className="experienceList">
        {experiences.map((e) => {
          return (
            <li
              key={e.id}
              id={e.id}
              onClick={() => {
                console.log(this.getCurrentExperience(e.id));
              }}
            >
              <div>
                <span>
                  <b>{e.position}</b> - <i>{e.company}</i> from {e.dateFrom} to{" "}
                  {e.dateTo}
                </span>
                <ul className="dutiesList">
                  {e.duties.map((i) => {
                    return <li key={uniqid()}>{i}</li>;
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ExperienceList;
