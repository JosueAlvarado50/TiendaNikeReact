import classes from "./UserRegister.module.css";
import { useRef, useState } from "react";

const UserRegister = () => {
  const nombreInputRef = useRef();
  const apellidosInputRef = useRef();
  const emailInputRef = useRef();
  const contraseñaInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8U7yQYzoTPcrRx4PziX92j-3NRzpEJD8";

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nombreInputRef.current.value;
    const enteredApellidos = apellidosInputRef.current.value;
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
  const cleanInputsHandler = () => {};

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
      <label>Apellidos</label>
      <div>
        <input
          ref={apellidosInputRef}
          type="apellidos"
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
        <button onClick={cleanInputsHandler} className={classes.button}>
          Registrar
        </button>
      </div>
    </form>
  );
};

export default UserRegister;
