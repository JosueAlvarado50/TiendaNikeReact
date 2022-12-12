import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react/cjs/react.development";

import ProductCardCatalogo from "../components/Products/ProductCardCatalogo";
import classes from "./Catalogo.module.css";

const Catalogo = () => {
  const [productos, setProductos] = useState([]);
  const endpoint = "http://127.0.0.1:8000/api";

  const getAllProducts = useCallback(async () => {
    const response = await axios.get(`${endpoint}/products`);
    setProductos(response.data);
    console.log(response.data);
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <Fragment>
      <div className={classes.catalogo}>
        <div className={classes.grid_iz}>hoola</div>
        <div className={classes.grid_der}>
          {productos.map((product) => (
            <ProductCardCatalogo
              url={product.img_1}
              modelo={product.modelo}
              tipo={product.tipo}
              precio={product.precio}
              id={product.id}
            ></ProductCardCatalogo>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default Catalogo;
