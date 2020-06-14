import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Organized Notes on Reopening MA</h1>
        <p>
          Click on one of the links to the side to learn more about the
          Massachusetts reopening efforts
        </p>
      </div>
    );
  }
}

export default Home;
