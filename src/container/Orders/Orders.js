import React, { Component } from "react";
import Order from "../../components/Order/Order";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as Actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }
  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.order.map((order) => {
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        );
      });
    }
    return <div>{orders}</div>;
  }
}
const mapToProps = (state) => {
  return {
    order: state.order.orders,
    loading: state.order.loading,
    token:state.auth.token,
    userId: state.auth.userId
  };
};
const mapDispatch = (dispatch) => {
  return {
    onFetchOrders: (token,userId) => dispatch(Actions.fetchOrders(token,userId)),
  };
};
export default connect(
  mapToProps,
  mapDispatch
)(withErrorHandler(Orders, axios));
