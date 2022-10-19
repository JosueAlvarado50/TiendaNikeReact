import classes from "./UserLogin.module.css";
import logo from "../../../assets/logoLogin.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import AuthContext from "../../store/Auth-context";

const UserLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const correoInputRef = useRef();
  const passwrodInputRef = useRef();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const swtichAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = correoInputRef.current.value;
    const enteredPassword = passwrodInputRef.current.value;
    //TODO: hacer validacion!!!!
    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8U7yQYzoTPcrRx4PziX92j-3NRzpEJD8Entorno
    setIsLoading(true);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8U7yQYzoTPcrRx4PziX92j-3NRzpEJD8 ",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => {
        setIsLoading(false);

        if (response.ok) {
          return response.json();

          //..
        } else {
          return response.json().then((data) => {
            //show a error modal
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        console.log("Inicio de sesion exitoso");
        console.log(data);
        correoInputRef.current.value = "";
        passwrodInputRef.current.value = "";
        navigate("../homePage", { replace: true }); //TODO: con los dos puntos se retrocede una carpeta en el link, ya que sino se agrega el homePage al link existente y no encontrara esa ruta.
        //!Creo que es Location en vez de eso
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.espacio}></div>
      <img className={classes.img} alt="login-icon" src={logo}></img>
      <label className={classes.label}>Correo Electronico</label>
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
          minLength="8"
        ></input>
      </div>
      <div>
        <button className={classes.button}>Login</button>
      </div>
      <div>
        <NavLink
          to="/new-account"
          className={(navData) => (navData.isActive ? classes.active : "")}
        >
          <p>Create New Account </p>
        </NavLink>
      </div>
    </form>
  );
};

export default UserLogin;
