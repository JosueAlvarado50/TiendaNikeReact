import React, { useRef, useState, Fragment } from "react";
import classes from "./ClientLogin.module.css";
import logo from "../../../assets/iconoPerfil.png";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const ClientLogin = () => {
  const correoInputRef = useRef();
  const passwrodInputRef = useRef();
  const phoneInputRef = useRef();
  const dateInputRef = useRef();
  const regionInputRef = useRef();
  const ciudadInputRef = useRef();
  const postalInputRef = useRef();
  const navigate = useNavigate();

  const onSubmitHandler = () => {
    console.log("buton pressioned");
  };

  return (
    <Fragment>
      <div className={classes.gridPrincipal}>
        <div className={classes.gridIzq}></div>
        <div className={classes.gridDer}>
          <form className={classes.form} onSubmit={onSubmitHandler}>
            <div className={classes.espacio}></div>
            <img className={classes.img} alt="login-icon" src={logo}></img>
            <h2>Account Details</h2>
            <label className={classes.label}>Email</label>
            <div>
              <input
                ref={correoInputRef}
                type="email"
                className={classes.input}
                required
              ></input>
            </div>
            <label className={classes.label}>Password</label>
            <div>
              <input
                ref={passwrodInputRef}
                type="password"
                className={classes.input}
                required
              ></input>
            </div>
            <label className={classes.label}>phone Number</label>
            <div>
              <input
                ref={phoneInputRef}
                type="text"
                className={classes.input}
                required
              ></input>
            </div>
            <label className={classes.label}>Date of Birth</label>
            <div>
              <input
                ref={dateInputRef}
                type="date"
                className={classes.input}
                required
              ></input>
            </div>

            <h2>Location</h2>
            <label className={classes.label}>Region</label>
            <div>
              <input
                ref={regionInputRef}
                type="text"
                className={classes.input}
                required
              ></input>
            </div>
            <label className={classes.label}>City</label>
            <div>
              <input
                ref={ciudadInputRef}
                type="text"
                className={classes.input}
                required
              ></input>
            </div>
            <label className={classes.label}>Postcode</label>
            <div>
              <input
                ref={postalInputRef}
                type="text"
                className={classes.input}
                required
              ></input>
            </div>

            <div>
              <button onClick={onSubmitHandler} className={classes.button}>
                Añadir informacion
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default ClientLogin;
