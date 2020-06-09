import React from "react";

class Businesses extends React.Component {
  constructor(props) {
    super(props);

    this.setBusinessInfo = this.setBusinessInfo.bind(this);

    this.state = {
      business: {},
    };
  }

  setBusinessInfo(file) {
    this.setState({ business: file });
  }

  render() {
    return (
      <div>
        <h1>Businesses</h1>
      </div>
    );
  }
}

export default Businesses;
