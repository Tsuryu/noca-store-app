import React from 'react';
import { connect } from 'react-redux';

class AppMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    const paramClases = `alert alert-${this.props.type}`;
    return (
      this.props.text ?
        <div className={paramClases} role="alert">
          {this.props.text}
        </div>
        :
        <div />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.appMessage.type,
    text: state.appMessage.text
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMessage);
