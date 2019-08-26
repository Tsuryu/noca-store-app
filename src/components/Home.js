import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return <h1>Bienvenido {this.props.username}</h1>;
  }
}

const mapStateToProps = state => {
    return {
        username: state.user.username
    };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
