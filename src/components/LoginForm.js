import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Input from "./Input";
import axios from "axios";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    if(!this.props.username || !this.props.password){
      return;
    }

    axios.get(`https://noca-store-mongo-web-services.herokuapp.com/user/${this.props.username}`, { headers: {"password": this.props.password}})
    .then(response => {
      this.props.history.push('/home');
    })
    .catch(e => {
      console.log('error');
      console.log(e);
    });
  }

  render() {
    return (
      <div className="app-body container">
        <form>
          <Input label="Usuario" id="username" />
          <Input label="Contraseña" id="password" type="password"/>
          <NavLink exact className="btn btn-dark btn-lg btn-block" activeClassName="active" to="/home" onClick={this.handleClick} >
            Ingresar
          </NavLink>
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
