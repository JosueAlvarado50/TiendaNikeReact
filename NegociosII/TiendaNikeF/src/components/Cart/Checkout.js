import { useCallback, useContext, useEffect, useRef, useState } from "react";
import classes from "./Checkout.module.css";
import CartContext from "../store/cart-context";
import AuthContext from "../store/Auth-context";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import emailjs from "@emailjs/browser";
import axios from "axios";
const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().lenght !== 5;

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);
  const autCtx = useContext(AuthContext);

  const endpoint = "http://127.0.0.1:8000/api";
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
    phone: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const PostalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const phoneInputRef = useRef();
  const fecha_nacInputRef = useRef();
  const regionInputRef = useRef();
  const form = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = PostalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredRegion = regionInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredFecha = fecha_nacInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid =
      !isEmpty(enteredPostalCode) && isNotFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
      region: enteredRegion,
      phone: enteredPhone,
      fecha: enteredFecha,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
    if (formIsValid) {
      console.log("los datos son validados correctamente");
      console.log(localStorage.getItem("idRandom"));
      cartCtx.items.forEach(async (item) => {
        try {
          const response = await axios.post(`${endpoint}/productocart`, {
            producto_id: item.id,
            cantidad: item.amount,
            precio: item.price,
            carrito_id: localStorage.getItem("idRandom"),
            descuento: 199,
          });
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      });

      localStorage.removeItem("email");

      const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

      try {
        const response = axios.post(`${endpoint}/venta`, {
          cliente_id: 1,
          carrito_id: 6411,
          metodo_Pagos_id: 1,
          Monto_total: totalAmount,
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }

      emailjs
        .sendForm(
          "service_faiuj69",
          "template_66w2vqq",
          form.current,
          "J8kBll7XnFJ0848RA"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    //submit cart data
    props.onConfirm({
      email: autCtx.getEmail(),
      password: autCtx.getPass(),
      name: enteredName,
      telefono: enteredPhone,
      fecha_nac: enteredFecha,
      street: enteredStreet,
      codigo_postal: enteredPostalCode,
      ciudad: enteredCity,
      region: enteredRegion,
      fecha: enteredFecha,
      id_carrito: 20,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;
  const phoneControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;
  const arrayItems = [];
  const crearItems = () => {
    cartCtx.items.map((item) =>
      arrayItems.push({
        sku: "142",
        name: item.name,
        price: item.price,
        quantity: item.amount,
        currency: "MXN",
      })
    );

    console.log(arrayItems);
  };

  const order = {
    customer: "el chino",
    total: "25.00",
    items: arrayItems,
  };

  return (
    <div>
      <div>
        <button onClick={crearItems}>Crear Items</button>
      </div>
      <form ref={form} className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
          <label htmlFor="name"> Your name</label>
          <input type="text" id="name" name="nombre" ref={nameInputRef}></input>
          {!formInputsValidity.name && <p>please enter valid Name!</p>}
        </div>
        <div className={streetControlClasses}>
          <label htmlFor="street"> Domicilio </label>
          <input
            name="domicilio"
            type="text"
            id="street"
            ref={streetInputRef}
          ></input>
          {!formInputsValidity.street && <p>please enter valid street!</p>}
        </div>
        <div className={streetControlClasses}>
          <label htmlFor="street"> Fecha de Nacimiento </label>
          <input
            name="fecha de nacimiento"
            type="date"
            id="street"
            ref={fecha_nacInputRef}
          ></input>
          {!formInputsValidity.street && <p>please enter valid street!</p>}
        </div>
        <div className={postalCodeControlClasses}>
          <label htmlFor="postal"> Codigo Postal</label>
          <input
            name="Codigo postal"
            type="text"
            id="postal"
            ref={PostalCodeInputRef}
          ></input>
          {!formInputsValidity.postalCode && (
            <p>please enter valid postal code!</p>
          )}
        </div>
        <div className={phoneControlClasses}>
          <label htmlFor="city"> Numero telefonico</label>
          <input
            name="numero telefonico"
            type="text"
            id="city"
            ref={phoneInputRef}
          ></input>
          {!formInputsValidity.city && <p>please enter valid city!</p>}
        </div>
        <div className={cityControlClasses}>
          <label htmlFor="city"> Region</label>
          <input
            name="region"
            type="text"
            id="city"
            ref={regionInputRef}
          ></input>
          {!formInputsValidity.city && <p>please enter valid city!</p>}
        </div>
        <div className={cityControlClasses}>
          <label htmlFor="city"> Ciudad</label>
          <input name="ciudad" type="text" id="city" ref={cityInputRef}></input>
          {!formInputsValidity.city && <p>please enter valid city!</p>}
        </div>

        <div>
          <PaypalCheckoutButton order={order}></PaypalCheckoutButton>
        </div>

        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit} onSubmit={confirmHandler}>
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};
export default Checkout;
