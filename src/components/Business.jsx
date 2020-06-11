import React from "react";
import ListItem from "./ListItem.jsx";

import "../assets/styles/components.css";

class Business extends React.Component {
  constructor(props) {
    super(props);

    this.updateInfo = this.updateInfo.bind(this);

    this.state = {
      active: "Social Distancing",
    };
  }

  updateInfo(topic) {
    this.setState({ active: topic });
  }

  render() {
    const business = this.props.business;

    if (Object.keys(business).length === 0) {
      return <div></div>;
    } else {
      const activeInfo = business[this.state.active];
      return (
        <div class="flex-parent">
          <h2>{this.props.business.Name}</h2>
          <div class="button-container">
            <button
              id="Social Distancing"
              onClick={(e) => this.updateInfo(e.target.id)}
            >
              Social Distancing
            </button>
            <button
              id="Hygiene Protocols"
              onClick={(e) => this.updateInfo(e.target.id)}
            >
              Hygiene Protocols
            </button>
            <button
              id="Staffing and Operations"
              onClick={(e) => this.updateInfo(e.target.id)}
            >
              Staffing and Operations
            </button>
            <button
              id="Cleaning and Disinfecting"
              onClick={(e) => this.updateInfo(e.target.id)}
            >
              Cleaning and Disinfecting
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

export default Business;
