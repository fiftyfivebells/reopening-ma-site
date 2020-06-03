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
    return <div></div>;
  }
}
