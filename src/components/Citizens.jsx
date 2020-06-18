import React from "react";
import CitizenInfo from "./CitizenInfo";
import ListItem from "./ListItem";
import "../assets/styles/components.css";

const safer = require("../assets/json/citizens/safer_at_home.json");
const guidance = require("../assets/json/citizens/guidance.json");
const mask = require("../assets/json/citizens/mask.json");

class Citizens extends React.Component {
  constructor(props) {
    super(props);

    this.setInfo = this.setInfo.bind(this);

    this.state = {
      info: safer,
      active: "Safer at Home",
    };
  }

  setInfo(file, topic) {
    this.setState({
      info: file,
      active: topic,
    });
  }

  render() {
    const activeInfo = this.state.info;
    return (
      <div class="flex-parent">
        <h2>Information for Individuals</h2>
        <p>
          Click a button below for more information on things individuals can
          and should be doing:
        </p>
        <div class="button-container">
          <button
            id="Safer at Home"
            onClick={(e) => this.setInfo(safer, e.target.id)}
          >
            Safer at Home
          </button>

          <button
            id="Social Guidance"
            onClick={(e) => this.setInfo(guidance, e.target.id)}
          >
            Social Guidance
          </button>
          <button
            id="Mask Order"
            onClick={(e) => this.setInfo(mask, e.target.id)}
          >
            Mask Order
          </button>
        </div>
        <br />
        <br />
        <h3>{this.state.active}</h3>
        <div class="list-container">
          {activeInfo.info.map((item, i) => (
            <ListItem statement={item} />
          ))}
        </div>
        <p>More information can be found at:</p>
        {activeInfo.links.map((item, i) => (
          <a href={item.link}>{item.text}</a>
        ))}
      </div>
    );
  }
}

export default Citizens;
