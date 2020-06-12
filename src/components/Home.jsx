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
        <ul>
          <li>
            For information on businesses, click <a href="/businesses">HERE</a>.
          </li>
          <li>
            For information on the different phases, click{" "}
            <a href="/phases">HERE</a>.
          </li>
          <li>
            For general information for citizens, click{" "}
            <a href="/citizens">HERE</a>.
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
