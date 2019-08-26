import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Input from "./Input";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className="app-body container">
        <form>
          <Input label="Usuario" id="username" />
          <Input label="Contraseña" id="password" type="password"/>
          <NavLink exact className="btn btn-primary btn-lg btn-block" activeClassName="active" to="/home">
            Ingresar
          </NavLink>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
