import React from 'react';
import { connect } from 'react-redux';
import ProductList from './products/ProductList';
import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (<div>
      <h1 className="title">Bienvenido {this.props.username}</h1>
      <ProductList />
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
