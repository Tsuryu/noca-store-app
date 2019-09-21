import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import { showMessage } from "../actions.js";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.showMessageLocal();

    if(!this.props.username) return this.props.showMessageLocal('danger', 'El usuario es requerido');
    if(!this.props.password) return this.props.showMessageLocal('danger', 'La contraseña es requerida');

    axios.get(`https://noca-store-mongo-web-services.herokuapp.com/user/${this.props.username}`, { headers: {"password": this.props.password}})
    .then(response => {
      this.props.history.push('/home');
    })
    .catch(e => {
      if(e.response.status === 404){
        this.props.showMessageLocal('danger', 'El usuario o contraseña es incorrecto');
      } else {
        this.props.showMessageLocal('danger', 'Error interno del servidor');
      }
    });
  }

  render() {
    return (
      <div className="app-body container">
        <form>
          <Input label="Usuario" id="username" stateObject="user" />
          <Input label="Contraseña" id="password" type="password" stateObject="user" />
          <div class="form-row">
            <div class="col-6">
              <NavLink exact className="btn btn-secondary btn-lg btn-block" activeClassName="active" to="/signup" >
                Registrarse
              </NavLink>
            </div>
            <div class="col-6">
              <NavLink exact className="btn btn-dark btn-lg btn-block" activeClassName="active" to="/home" onClick={this.handleClick} >
                Ingresar
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.user.username,
    password: state.user.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showMessageLocal: (type, text) => {
      return dispatch(showMessage({type, text}));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
