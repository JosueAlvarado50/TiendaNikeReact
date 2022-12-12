import React, { useCallback, useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";
import AuthContext from "../store/Auth-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import axios from "axios";
const endpoint = "http://127.0.0.1:8000/api";
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const [FinishOrder, setFinishOrder] = useState(false);
  const idRandom = parseInt(Math.random() * 10000);
  const getIdClient = useCallback(async () => {
    try {
      const response = await axios.post(`${endpoint}/getDataClient`, {
        correo: localStorage.getItem("email"),
      });
      console.log(response.data[0].id);
      localStorage.setItem("client_id", response.data[0].id);
    } catch (error) {}
  }, []);

  const buscarCarrito = useCallback(async () => {
    if (FinishOrder === true) {
      let control = true;
      let res;

      while (control === true) {
        res = await axios.post(`${endpoint}/existinCart`, {
          id: idRandom,
        });
        console.log("numero random: " + idRandom);

        console.log(res.data);
        if (res.data === 0) {
          control = false;
        }
      }

      if (res.data === 0) {
        console.log("Ya se asigno el carrito");
        const addcartToDB = await axios.post(`${endpoint}/carrito`, {
          id: idRandom,
          cliente_id: localStorage.getItem("client_id"),
        });
        console.log("random en cart" + idRandom);
        localStorage.setItem("idRandom", idRandom);

        console.log(addcartToDB.data);
        setFinishOrder(false);
      }
    }
  }, [FinishOrder, idRandom]);

  useEffect(() => {
    buscarCarrito();
    getIdClient();
  }, [buscarCarrito, getIdClient]);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    //!validar si el carrito existe en la base de datos pero con useCallback !!
    setIsSubmitting(true);
    console.log(userData);
    setIsSubmitting(false);
    setDidSubmit(true);
    setFinishOrder(true);
    buscarCarrito();
    //?aqui se crea el carrito en la base de datos!!....--><------
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <div>
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            color={item.color}
            url={item.url}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          ></CartItem>
        </div>
      ))}
    </ul>
  );
  const modalAction = (
    <div className={classes.actions}>
      <button onClick={props.onHideCart} className={classes["button--alt"]}>
        close
      </button>
      {hasItems && !isCheckout && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>{totalAmount} </span>
      </div>
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={props.onHideCart}
          carrito_id={idRandom}
        ></Checkout>
      )}
      {!isCheckout && modalAction}
    </React.Fragment>
  );

  const isSumbittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>that order was Succesfully!!</p>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSumbittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
