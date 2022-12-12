import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  idCarrito: "",
  setId: (idCarrito) => {},
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  showCart: false,
});
export default CartContext;
