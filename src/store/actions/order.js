import * as actionTypes from "../actions/action";
export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};
export const purchaseBurgerfail = (err) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: err,
  };
};
export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};
export const purchaseinit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};
export const purchaseBurger = (orderData,token) => {
  return{
    type: actionTypes.PURCHASE_BURGER_SAGA,
    orderData:orderData,
    token:token
  }
};
export const fetchOrderSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};
export const fetchOrderfail = (err) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: err,
  };
};
export const fetchOrderStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = (token,userId) => {
  return {
    type:actionTypes.FETCH_ORDERS_SAGA,
    token:token,
    userId:userId
  };
};
