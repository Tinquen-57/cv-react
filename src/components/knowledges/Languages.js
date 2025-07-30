import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "JavaScript", xp: 1 },
      { id: 2, value: "C#", xp: 0.2 },
      { id: 3, value: "CSS", xp: 1 },
      { id: 4, value: "PHP", xp: 0.5 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.8 },
      { id: 2, value: "Bootstrap", xp: 1 },
      { id: 3, value: "Sass", xp: 0.5 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="Langages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="Frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
