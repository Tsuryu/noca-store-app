import React from "react";
import "./alert.css";

class Alert extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
    }

  render() {
    return (
        <div class="customAlert alert alert-danger alert-dismissible fade show" role="alert">
          <strong>{this.props.text}</strong>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
    );
  }
}

export default Alert;