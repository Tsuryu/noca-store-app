import React from "react";
import { connect } from "react-redux";
import { handleInputChange } from "../actions.js";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  
  handleChange = (event) => {
    const value = event.target.value;

    this.setState({
      value
    });

    this.props.handleChangeLocal(value, this.props.id, this.props.stateObject);
  }

  render() {
    return (
      <div className="form-group">
        <label for={this.props.id}>{this.props.label}</label>
        <input type={this.props.type} className="form-control" id={this.props.id} value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
  
const mapDispatchToProps = dispatch => {
  return {
    handleChangeLocal: (text, field, stateObject) => {
      const object = {};
      object[stateObject] = {};
      object[stateObject][field] = text;
      return dispatch(handleInputChange(object));
    }
  };
};


Input.defaultProps = {
    type: "text"
};
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
  