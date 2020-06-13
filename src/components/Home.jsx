import React from "react";
import { Link } from "react-router-dom";

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
            For information on businesses, click{" "}
            <Link to="/#/businesses">HERE</Link>.
          </li>
          <li>
            For information on the different phases, click{" "}
            <Link to="/#/phases">HERE</Link>.
          </li>
          <li>
            For general information for citizens, click{" "}
            <Link to="/#/citizens">HERE</Link>.
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
