import { useCallback, useContext, useEffect, useRef, useState } from "react";
import classes from "./Checkout.module.css";
import axios from "axios";
import AuthContext from "../store/Auth-context";

const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().lenght !== 5;
const endpoint = "http://127.0.0.1:8000/api";

const Checkout = (props) => {
  const autCtx = useContext(AuthContext);
  console.log(autCtx["email"]);
  console.log(autCtx["password"]);
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

  const [name, setName] = useState();
  const [street, setStreet] = useState();
  const [postal, setPostal] = useState();
  const [city, setCity] = useState();
  const [region, setRegion] = useState();
  const [phone, setphone] = useState();

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
      newClientHandler();
    }

    //submit cart data
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
      region: enteredRegion,
      fecha: enteredFecha,
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

  const newClientHandler = useCallback(async () => {
    await axios.post(`${endpoint}/cliente`, {
      email: autCtx.getEmail(),
      password: autCtx.getPass(),
      name: nameInputRef.current.value,
      telefono: phoneInputRef.current.value,
      fecha_nac: fecha_nacInputRef.current.value,
      region: regionInputRef.current.value,
      ciudad: cityInputRef.current.value,
      street: streetInputRef.current.value,
      codigo_postal: PostalCodeInputRef.current.value,
    });
  }, [autCtx]);

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name"> Your name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputsValidity.name && <p>please enter valid Name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street"> Street </label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formInputsValidity.street && <p>please enter valid street!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street"> fecha de Nacimiento </label>
        <input type="date" id="street" ref={fecha_nacInputRef}></input>
        {!formInputsValidity.street && <p>please enter valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal"> Postal Code</label>
        <input type="text" id="postal" ref={PostalCodeInputRef}></input>
        {!formInputsValidity.postalCode && (
          <p>please enter valid postal code!</p>
        )}
      </div>
      <div className={phoneControlClasses}>
        <label htmlFor="city"> Phone number</label>
        <input type="text" id="city" ref={phoneInputRef}></input>
        {!formInputsValidity.city && <p>please enter valid city!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city"> Region</label>
        <input type="text" id="city" ref={regionInputRef}></input>
        {!formInputsValidity.city && <p>please enter valid city!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city"> City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formInputsValidity.city && <p>please enter valid city!</p>}
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
  );
};
export default Checkout;
