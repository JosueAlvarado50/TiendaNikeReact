import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./loginNavigation.module.css";
import logoPerfil from "../../../assets/iconoPerfil.png";

const loginNavigation = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <img alt="logo-home" src={logoPerfil}></img>
              <NavLink
                to="/perfil"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                <p>perfil </p>
              </NavLink>
            </li>
            <li>
              <img alt="logo-home" src={logoPerfil}></img>
              <NavLink
                to="/perfil"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                <p>test </p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default loginNavigation;
