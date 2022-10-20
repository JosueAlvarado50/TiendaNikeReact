import React, { Fragment, useState } from "react";
import classes from "../UserUI/MenuHamburguesa.module.css";
import menuh from "../../../assets/menuHam.png";
import logoNike from "../../../assets/logonike.png";

export default function MenuHamburguesa() {
  const [isShowMenu, setIsShowMenu] = useState(true);

  const showMenuHandler = (event) => {
    event.preventDefault();

    console.log("button pressed");
    setIsShowMenu(!isShowMenu);
    console.log(isShowMenu);
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logoheader}>
          <a href="#">
            <img alt="logo menu ham" src={logoNike}></img>
          </a>
        </div>
        <div className={classes.navMenu}>
          <button onClick={showMenuHandler} id="check">
            <i className={classes.menuicon}>
              <img alt="logo" src={menuh}></img>
            </i>
          </button>
          {isShowMenu === true && (
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
          )}
        </div>
      </header>
    </Fragment>
  );
}
