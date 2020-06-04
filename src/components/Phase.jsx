import React from "react";

class Phase extends React.Component {
  constructor(props) {
    super(props);
    this.updateInfo = this.updateInfo.bind(this);
    this.state = {
      active: "businesses",
    };
  }

  updateInfo(topic) {
    this.setState({ active: topic });
  }

  render() {
    const phase = this.props.phase;

    if (Object.keys(phase).length === 0) {
      return <div></div>;
    } else {
      const activeInfo = phase[this.state.active];
      return (
        <div>
          <h2>
            Starts: {phase.start_date}, Ends: {phase.end_date}
          </h2>
          <div>
            <button
              id="businesses"
              onClick={(e) => this.updateInfo(e.target.id)}
            >
              Business
            </button>
            <button
              id="healthcare"
              onClick={(e) => this.updateInfo(e.target.id)}
            >
              Healthcare
            </button>
            <button id="advisory" onClick={(e) => this.updateInfo(e.target.id)}>
              Advisory
            </button>
            <button id="outdoor" onClick={(e) => this.updateInfo(e.target.id)}>
              Outdoor
            </button>
          </div>
          <h3>{this.state.active}</h3>
          <ul>
            {activeInfo.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Phase;
