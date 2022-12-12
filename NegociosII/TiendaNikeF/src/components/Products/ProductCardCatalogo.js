import classes from "./ProductCardCatalogo.module.css";
import React from "react";
import { Fragment } from "react/cjs/react.development";
import { NavLink } from "react-router-dom";

const ProductCardCatalogo = (props) => {
  //!falta agregar funcionalidad al button para mandar a los detalles
  return (
    <Fragment>
      <div className={classes.tarjeta}>
        <div className={classes.cuerpo}>
          <img src={props.url} alt="1"></img>
        </div>
        <div className={classes.productName}>
          <p>{props.modelo}</p>
        </div>
        <ul>
          <li>
            <p className={classes.productDescription}>{props.tipo}</p>
          </li>
          <li className={classes.productPrice}>${props.precio}</li>
          <li>
            <NavLink to={`/catalogo/${props.id}`}>
              <button className={classes.blackButton}>Ver Detalles</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default ProductCardCatalogo;
