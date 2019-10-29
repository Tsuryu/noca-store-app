import React from 'react';
import { connect } from 'react-redux';
import './product.css';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (<div className="wrapper">
      <img className="image" src={`data:image/jpeg;base64,${this.props.image}`} />
      <div className="content">
        <h3>{this.props.title}</h3>
        <span>{this.props.soldAmount} vendidos</span>
        <p>$ {this.props.price}</p>
        <p>Hasta {this.props.freeTaxInstallmentsAmount} cuotas sin interes</p>
        <p className="bold-text">{this.props.deliveringPrice ? this.props.deliveringPrice : 'Envio gratis'}</p>
        <p></p>
      </div>
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
)(Product);
