import React from "react";
import Phase from "./Phase";

const phase1 = require("../assets/json/phase_1.json");

class Phases extends React.Component {
  constructor(props) {
    super(props);
    this.setPhaseInfo = this.setPhaseInfo.bind(this);
    this.state = {
      phase: {},
    };
  }

  setPhaseInfo(file) {
    this.setState({ phase: file });
  }

  render() {
    return (
      <div>
        <h1>We are currently in Phase 1.</h1>
        <h3>Phase 2 is projected to start on June 8th.</h3>
        <p>Click a button below for more information on the specific phases:</p>
        <div>
          <button onClick={() => this.setPhaseInfo(phase1)}>Phase 1</button>
          <button>Phase 2</button>
          <button>Phase 3</button>
          <button>Phase 4</button>
        </div>
        <Phase phase={this.state.phase} />
      </div>
    );
  }
}

export default Phases;
