import React, {
  useRef,
  useState,
  Fragment,
  useContext,
  useCallback,
  useEffect,
} from "react";
import classes from "./ClientLogin.module.css";
import logo from "../../../assets/iconoPerfil.png";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const endpoint = "http://127.0.0.1:8000/api";
//TODO: verificar cuando son nulos los campos
const ClientLogin = () => {
  const nameInputRef = useRef();
  const correoInputRef = useRef();
  const passwrodInputRef = useRef();
  const phoneInputRef = useRef();
  const dateInputRef = useRef();
  const regionInputRef = useRef();
  const ciudadInputRef = useRef();
  const domicilioInputRef = useRef();
  const postalInputRef = useRef();
  const [userID, setUserID] = useState();
  const [prueba, setPrueba] = useState();
  const checkEmail = localStorage.getItem("email");

  console.log("state " + checkEmail);

  //TODO: checar la ruta
  //!Falta aplicar Redux Toolkit para el manejo de estados
  const getClient = useCallback(async () => {
    const response = await axios.post(`${endpoint}/getDataClient`, {
      correo: checkEmail,
    });
    if (response.data.length > 0) {
      console.log("todo bien");
      nameInputRef.current.value = response.data[0].nombre;
      correoInputRef.current.value = response.data[0].email;
      passwrodInputRef.current.value = response.data[0].password;
      phoneInputRef.current.value = response.data[0].telefono;
      dateInputRef.current.value = response.data[0].fecha_nac;
      regionInputRef.current.value = response.data[0].region;
      ciudadInputRef.current.value = response.data[0].ciudad;
      domicilioInputRef.current.value = response.data[0].domicilio;
      postalInputRef.current.value = response.data[0].codigo_postal;
      setUserID(response.data[0].id);
    } else {
      console.log("no se encontro el usuario");
    }
    console.log(response.data);
  }, [checkEmail]);

  useEffect(() => {
    getClient();
  }, [getClient]);
  console.log("se obtuvo el id del cliente: " + userID);
  const navigate = useNavigate();
  const onSubmitHandler = async () => {
    console.log("buton pressioned");
    const response = await axios.put(`${endpoint}/cliente/${userID}`, {
      email: correoInputRef.current.value,
      password: passwrodInputRef.current.value,
      nombre: nameInputRef.current.value,
      telefono: phoneInputRef.current.value,
      fecha_nac: dateInputRef.current.value,
      region: regionInputRef.current.value,
      ciudad: ciudadInputRef.current.value,
      domicilio: domicilioInputRef.current.value,
      codigo_postal: prueba,
    });
    console.log(response.data);
  };
  const postalcode = (event) => {
    event.preventDefault();
    setPrueba(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.gridPrincipal}>
        <div className={classes.gridIzq}></div>
        <div className={classes.gridDer}>
          <form className={classes.form} onSubmit={onSubmitHandler}>
            <div className={classes.espacio}></div>
            <img className={classes.img} alt="login-icon" src={logo}></img>
            <h2>Informacion de perfil</h2>
            <label className={classes.label}>Nombre</label>
            <div>
              <input
                ref={nameInputRef}
                type="text"
                className={classes.input}
                required
              ></input>
            </div>
            <label className={classes.label}>Correo electronico</label>
            <div>
              <input
                ref={correoInputRef}
                type="email"
                className={classes.input}
                required
              ></input>
            </div>
            <label className={classes.label}>Contraseña</label>
            <div>
              <input
                ref={passwrodInputRef}
                type="password"
                className={classes.input}
                required
              ></input>
            </div>
            <label className={classes.label}>Numero telefonico</label>
            <div>
              <input
                ref={phoneInputRef}
                type="text"
                className={classes.input}
                required
              ></input>
            </div>
            <label className={classes.label}>Fecha de nacimiento</label>
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
            <label className={classes.label}>Ciudad</label>
            <div>
              <input
                ref={ciudadInputRef}
                type="text"
                className={classes.input}
                required
              ></input>
            </div>
            <label className={classes.label}>Domicilio</label>
            <div>
              <input
                ref={domicilioInputRef}
                type="text"
                className={classes.input}
                required
              ></input>
            </div>
            <label className={classes.label}>Codigo Postal</label>
            <div>
              <input
                ref={postalInputRef}
                type="text"
                className={classes.input}
                onChange={postalcode}
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
