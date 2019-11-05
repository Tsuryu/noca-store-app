import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import './productList.css';
import axios from "axios";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  async componentDidMount() {
    try{
      const response = await axios.get(`http://localhost:3005/product`);
      this.setState({...this.state, products: response.data.products});
    } catch (e){
      console.log(e);
    }
  }

  render() {
    let productList = [];
    if(this.state.products){
    productList = this.state.products.map((p, index) =>  <Product key={index} image={p.image} title={p.title} price={p.price} 
      freeTaxInstallmentsAmount={p.freeTaxInstallmentsAmount} deliveringPrice={p.deliveringPrice} soldAmount={p.soldAmount}/>);
    }
    return <div className="productList">
        {productList}
      </div>;
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
)(ProductList);
