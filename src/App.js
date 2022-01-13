import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import Template from "./components/cv-template";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showForm: true,
      firstName: "John",
      middleNames: "Atlantis",
      lastName: "Doe",
      email:"jadoe@xyzmail.com",
      phone:"###-###-####",
      experiences: [],
      education: [],
      skills: "skill 1,skill 2,skill 3",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    };
    this.toggleForm = (e) => {
      e.preventDefault();
      this.setState({
        showForm: !this.state.showForm,
      });
    };
    this.set = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
    this.addExperience = (experience) => {
      this.setState({
        experiences: [...this.state.experiences, experience],
      });
    };
    this.addEducation = (education) => {
      this.setState({
        education: [...this.state.education, education],
      });
    };
  }
  render() {
    const { experiences, skills, education, languages, showForm } = this.state;
    return (
      <div className="container-fluid">
        <Header />
        <div className="row body">
          <Form
            toggleForm={this.toggleForm}
            parentState={this.state}
            set={this.set}
            addEducation={this.addEducation}
            addExperience={this.addExperience}
            experiences={experiences}
            skills={skills}
            education={education}
            languages={languages}
          />
          <Template parentState={this.state} />
        </div>
      </div>
    );
  }
}
export default App;

// start cv layoutLanguages
