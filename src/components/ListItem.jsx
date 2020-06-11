import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="list-item">
        <p>{this.props.statement}</p>
      </div>
    );
  }
}

export default ListItem;
