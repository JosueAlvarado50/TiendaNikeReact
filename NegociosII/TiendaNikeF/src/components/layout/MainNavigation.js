import { NavLink } from "react-router-dom";
import logonike from "../../assets/logonike.png";
import classes from "./MainNavigation.module.css";
import LogoHome from "../../assets/logoHome.png";
import HeaderCartButton from "../layout/HeaderCartButton";
import { useContext } from "react";
import AuthContext from "../store/Auth-context";
import logoutLogo from "../../assets/logout.png";
import logoLogin from "../../assets/logo_login.png";

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
        <p> Yoshua Store</p>
      </div>

      <nav className={classes.nav}>
        <ul>
          <li>
            <img alt="logo-home" src={LogoHome}></img>
            <NavLink
              to="/homePage"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              <p>home </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              <p>Products </p>
            </NavLink>
          </li>
          <li>
            {isLoggedIn && (
              <NavLink
                to="/add-product"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                <p> add Products </p>
              </NavLink>
            )}
          </li>
          <li>
            {" "}
            {isLoggedIn && (
              <NavLink
                to="/cart"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
              </NavLink>
            )}
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
                to="/cart"
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
