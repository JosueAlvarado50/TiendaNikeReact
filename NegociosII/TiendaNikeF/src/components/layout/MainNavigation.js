import { NavLink } from "react-router-dom";
import logonike from "../../assets/logonike.png";
import classes from "./MainNavigation.module.css";
import LogoHome from "../../assets/logoHome.png";
import HeaderCartButton from "../layout/HeaderCartButton";
import { useContext } from "react";
import AuthContext from "../store/Auth-context";
import logoutLogo from "../../assets/logout.png";
import logoLogin from "../../assets/logo_login.png";
import iconoPerfil from "../../assets/iconoPerfil.png";

const MainNavigation = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img alt="nike Snickers" src={logonike}></img>
        <p> Nike Store</p>
      </div>

      <nav className={classes.nav}>
        <ul>
          <li>
            <img alt="logo-home" src={LogoHome}></img>
            <NavLink
              to="/homePage"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              <p>Home </p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/catalogo"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              <p>Catalogo </p>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/products"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              <p>Products </p>
            </NavLink>
          </li>*/}

          <li>
            {isLoggedIn && (
              <NavLink
                to="/perfil"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                <div className={classes.logoPerfil}>
                  <img alt="logo-logout" src={iconoPerfil}></img>
                  <p> Perfil </p>
                </div>
              </NavLink>
            )}
          </li>
          <li>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>)
          </li>
          <li>
            {" "}
            {!isLoggedIn && (
              <NavLink
                to="/login"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                <div className={classes.logo2}>
                  <img alt="logo-logout" src={logoLogin}></img>
                  <button>Login</button>
                </div>
              </NavLink>
            )}
          </li>
          <li>
            {isLoggedIn && (
              <NavLink
                to="/homePage"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                <div className={classes.logo2}>
                  <img alt="logo-logout" src={logoutLogo}></img>
                  <button onClick={logoutHandler}>
                    <p>Logout</p>
                  </button>
                </div>
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
