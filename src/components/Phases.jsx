import React from "react";
import "../assets/styles/components.css";
import Phase from "./Phase";

const phaseInfo = require("../assets/json/phases/phase_info.json");
const phase1 = require("../assets/json/phases/phase_1.json");
const phase2 = require("../assets/json/phases/phase_2.json");
const phase3 = require("../assets/json/phases/phase_3.json");
const phase4 = require("../assets/json/phases/phase_4.json");

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
        <h1>We are currently in {phaseInfo.current}</h1>
        <h3>
          {phaseInfo.next.name} is projected to start on {phaseInfo.next.start}.
        </h3>
        <p>Click a button below for more information on the specific phases:</p>
        <div class="button-container">
          <button onClick={() => this.setPhaseInfo(phase1)}>Phase 1</button>
          <button onClick={() => this.setPhaseInfo(phase2)}>Phase 2</button>
          <button onClick={() => this.setPhaseInfo(phase3)}>Phase 3</button>
          <button onClick={() => this.setPhaseInfo(phase4)}>Phase 4</button>
        </div>
        <br />
        <br />
        <Phase phase={this.state.phase} />
      </div>
    );
  }
}

export default Phases;
