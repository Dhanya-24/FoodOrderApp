import React from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};

const CartContext = React.createContext(defaultState);

export default CartContext;
