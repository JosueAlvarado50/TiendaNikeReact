import classes from "./UserRegister.module.css";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const nombreInputRef = useRef();
  const telefonoInputRef = useRef();
  const emailInputRef = useRef();
  const contraseñaInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8U7yQYzoTPcrRx4PziX92j-3NRzpEJD8";

  const endpoint = "http://127.0.0.1:8000/api";
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nombreInputRef.current.value;
    const enteredTelefono = telefonoInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = contraseñaInputRef.current.value;

    setIsLoading(true);

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      setIsLoading(false);

      if (res.ok) {
        //..
        console.log("User registered succesfully");
        const responseUser = axios.post(`${endpoint}/cliente`, {
          email: enteredEmail,
          password: enteredPassword,
          nombre: enteredName,
          telefono: enteredTelefono,
        });
        console.log(responseUser.data);
        //!poner el navigate que mande a home
        navigate("../login", { replace: true });
        fetch(URL, {
          method: "POST",
          body: JSON.stringify({
            idToken: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
      } else {
        return res.json().then((data) => {
          //show a error modal
          let errorMessage = "Authentication failed!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }

          alert(errorMessage);
        });
      }
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.espacio}></div>
      <img
        className={classes.img}
        alt="login-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1024px-Logo_NIKE.svg.png"
      ></img>
      <label>Nombre</label>
      <div>
        <input
          ref={nombreInputRef}
          type="name"
          className={classes.input}
        ></input>
      </div>
      <label>Telefono</label>
      <div>
        <input
          ref={telefonoInputRef}
          type="text"
          className={classes.input}
        ></input>
      </div>
      <label>Email</label>
      <div>
        <input
          ref={emailInputRef}
          type="email"
          className={classes.input}
        ></input>
      </div>
      <label>Contraseña</label>
      <div>
        <input
          ref={contraseñaInputRef}
          type="password"
          className={classes.input}
        ></input>
      </div>
      <div>
        <button className={classes.button}>Registrar</button>
      </div>
    </form>
  );
};

export default UserRegister;
