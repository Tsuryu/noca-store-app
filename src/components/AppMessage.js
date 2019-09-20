import React from "react";
import { connect } from "react-redux";

class AppMessage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
    }

    render() {
        return (
            this.props.text ?
            <div class="alert alert-danger" role="alert">
                {this.props.text}
            </div>
            :
            <div></div>
        );
    }
}

const mapStateToProps = state => {
  return {
    type: state.appMessage.type,
    text: state.appMessage.text
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMessage);
