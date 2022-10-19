import React, { Fragment } from "react";
import classes from "../UserUI/MenuHamburguesa.module.css";
import menuh from "../../../assets/menuHam.png";

export default function MenuHamburguesa() {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logoheader}>
          <a href="#">
            <img alt="logo menu ham" src={menuh}></img>
          </a>
        </div>
        <div className={classes.navMenu}>
          <input type="checkbox" id="check"></input>
          <ul>
            <li>
              <a href="#">inicio</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">logout</a>
            </li>
            <li>
              <a href="#">cart</a>
            </li>
          </ul>
        </div>
      </header>
      <section className={classes.content}></section>
    </Fragment>
  );
}
