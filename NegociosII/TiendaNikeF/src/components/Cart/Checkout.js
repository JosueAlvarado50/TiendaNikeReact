import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().lenght !== 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const PostalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = PostalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

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
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
    if(formIsValid){
        console.log('los datos son validados correctamente');
    }

    //submit cart data
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,
        city: enteredCity
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
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal"> Postal Code</label>
        <input type="text" id="postal" ref={PostalCodeInputRef}></input>
        {!formInputsValidity.postalCode && (
          <p>please enter valid postal code!</p>
        )}
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
