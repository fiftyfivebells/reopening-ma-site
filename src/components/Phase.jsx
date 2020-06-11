import React from "react";
import "../assets/styles/components.css";
import ListItem from "./ListItem";

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
        <div class="flex-parent">
          <h2>
            Starts: {phase.start_date}, Ends: {phase.end_date}
          </h2>
          <div class="button-container">
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
          <div class="list-container">
            {activeInfo.map((item, i) => (
              <ListItem statement={item} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Phase;
