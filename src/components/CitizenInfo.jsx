import React from "react";
import ListItem from "./ListItem";
import "../assets/styles/components.css";

class CitizenInfo extends React.Component {
  constructor(props) {
    super(props);

    this.updateInfo = this.updateInfo.bind(this);
    this.state = {
      active: "",
    };
  }

  updateInfo(topic) {
    this.setState({ active: topic });
  }

  render() {
    const info = this.props.info;

    if (Object.keys(info).length === 0) {
      return <div></div>;
    } else {
      const activeInfo = info[this.state.active];
      return (
        <div class="flex-parent">
          <div class="button-container">
            <button
              id="Safer at Home Advisory"
              onClick={(e) => this.updateInfo(e.target.id)}
            >
              Safer at Home
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

export default CitizenInfo;
