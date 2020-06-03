import React from "react";
import Phase from "./Phase.jsx";

class Phases extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phase: {},
    };
  }

  setPhaseInfo(file) {}

  render() {
    return (
      <div>
        <h1>We are currently in Phase 1.</h1>
        <h3>Phase 2 is projected to start on June 8th.</h3>
        <div>
          <button>Phase 1</button>
          <button>Phase 2</button>
          <button>Phase 3</button>
          <button>Phase 4</button>
        </div>
      </div>
    );
  }
}

export default Phases;
