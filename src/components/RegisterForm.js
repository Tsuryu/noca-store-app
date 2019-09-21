import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import { showMessage } from "../actions.js";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.props.showMessageLocal();
  }

  handleClick = (e) => {
    e.preventDefault();
    
    if(!this.props.signupFormUser.name) return this.props.showMessageLocal('danger', 'El nombre es requerido');
    if(!this.props.signupFormUser.lastname) return this.props.showMessageLocal('danger', 'El apellido es requerido');
    if(!this.props.signupFormUser.dni) return this.props.showMessageLocal('danger', 'El dni es requerido');
    if(!this.props.signupFormUser.cellphone) return this.props.showMessageLocal('danger', 'El celular es requerido');
    if(!this.props.signupFormUser.address) return this.props.showMessageLocal('danger', 'La direccion es requerida');
    if(!this.props.signupFormUser.username) return this.props.showMessageLocal('danger', 'El usuario es requerido');
    if(!this.props.signupFormUser.password) return this.props.showMessageLocal('danger', 'La contraseña es requerida');

    axios.get(`https://noca-store-mongo-web-services.herokuapp.com/user/`, { headers: {"Content-Type": "application/json"}, body: this.props.signupFormUser})
    .then(response => {
      this.props.history.push('/login');
      this.props.showMessageLocal("success", "Registracion exitosa");
    })
    .catch(e => {
        debugger;
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
            <Input label="Nombre" id="name" stateObject="signupFormUser"/>
            <Input label="Apellido" id="lastname" stateObject="signupFormUser"/>
            <Input label="Dni" id="dni" stateObject="signupFormUser"/>
            <Input label="Celular" id="cellphone" stateObject="signupFormUser"/>
            <Input label="Direccion" id="address" stateObject="signupFormUser"/>

            <Input label="Usuario" id="username" stateObject="signupFormUser"/>
            <Input label="Contraseña" id="password" type="password" stateObject="signupFormUser"/>

            <div class="form-row">
                <div class="col-6">
                    <NavLink exact className="btn btn-secondary btn-lg btn-block" activeClassName="active" to="/login" >
                        Volver
                    </NavLink>
                </div>
                <div class="col-6">
                    <NavLink exact className="btn btn-dark btn-lg btn-block" activeClassName="active" to="/login" onClick={this.handleClick} >
                        Registrar
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
    signupFormUser: state.signupFormUser
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
)(RegisterForm);
