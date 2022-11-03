import classes from "./ProductsNike.module.css";
import flechaAbajo from "../assets/flechaAbajo.png";
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CartContext from "../components/store/cart-context";

const ProductsNike = () => {
  const params = useParams();
  const [producto, setProducto] = useState([]);
  const endpoint = "http://127.0.0.1:8000/api";
  const cartCtx = useContext(CartContext);

  const getProductById = useCallback(async () => {
    const response = await axios.get(`${endpoint}/product/${params.productId}`);
    setProducto(response.data);

    console.log(response.data);
  }, [params.productId]);

  useEffect(() => {
    getProductById();
  }, [getProductById]);

  const onClickHandler = () => {
    console.log("prueba de agregar producto");
  };
  const addToCartHandler = () => {
    cartCtx.addItem({
      id: producto.id,
      name: producto.modelo,
      amount: 1,
      color: producto.color,
      price: producto.precio,
      url: producto.img_model_1,
    });
  };
  return (
    <div className={classes.backgoundProduct}>
      <div className={classes.descriptionImages}>
        <img alt={producto.modelo} src={producto.img_1}></img>
        <video autoPlay loop playsInline muted>
          <source
            src="https://static.nike.com/a/videos/q_90,vc_vp9/d58e9afa-e042-497c-917d-d625c432b72b/video.webm"
            type="video/webm"
          ></source>
        </video>
        <img alt="nike sb Chron 2" src={producto.img_3}></img>
        <img alt="nike sb Chron 2" src={producto.img_4}></img>
        <img alt="nike sb Chron 2" src={producto.img_5}></img>
        <img alt="nike sb Chron 2" src={producto.img_6}></img>
        <img alt="nike sb Chron 2" src={producto.img_7}></img>
        <img alt="nike sb Chron 2" src={producto.img_8}></img>
        <img alt="nike sb Chron 2" src={producto.img_9}></img>
      </div>
      <div className={classes.descriptionProducts}>
        <div>
          <h1>{producto.modelo}</h1>
          <p>{producto.tipo}</p>
          <p>${producto.precio}</p>
        </div>
        <div>
          <fieldset className={classes.fieldSetImg}>
            <button>
              <img alt="example-1" src={producto.img_model_1}></img>
            </button>
            <button>
              <img
                alt="example-2"
                src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/8e0136ab-8a5a-46c8-9e71-428615d698f4/calzado-de-skateboarding-sb-chron-2-zr8R7R.png"
              ></img>
            </button>
            <button onClick={onClickHandler}>
              <img
                alt="example-3"
                src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/8e226efb-8c30-455a-a68c-45cc812d6323/calzado-de-skateboarding-sb-chron-2-zr8R7R.png"
              ></img>
            </button>
          </fieldset>
        </div>
        <div className={classes.tallasStorage}>
          <p>Selecciona tu talla</p>
          <p className={classes.tallasStoragePD}>Guia de tallas</p>
        </div>
        <div className={classes.gridLayout}>
          <div className={classes.cajaIzq}>
            <button>CM 23</button>
            <button>CM 23.5 (US 5)</button>
            <button>CM 24 (US 6)</button>
            <button>CM 25</button>
            <button>CM 26</button>
            <button>CM 27</button>
            <button>CM 28</button>
            <button>CM 29</button>
            <button>CM 30</button>
            <button>CM 32</button>
          </div>
          <div className={classes.cajaDer}>
            <button>CM 23.5 (US 4.5)</button>
            <button>CM 24 (US 5.5)</button>
            <button>CM 24.5</button>
            <button>CM 25.5</button>
            <button>CM 26.5</button>
            <button>CM 27.5</button>
            <button>CM 28.5</button>
            <button>CM 29.5</button>
            <button>CM 31</button>
          </div>
        </div>
        <div>
          <button onClick={addToCartHandler} className={classes.blackButton}>
            Agregar a la bolsa de compra
          </button>
          <button className={classes.whiteButton}>favoritos ♥</button>
          <div className={classes.textDescriptionProduct}>
            <p>{producto.descripcion}</p>
            <ul>
              <li>Color que se muestra: {producto.color}</li>
              <li>Estilo: DM3493-002</li>
            </ul>
          </div>
          <div className={classes.enviosButton}>
            <button>
              <p>Envios y devoluciones gratis</p>{" "}
              <img alt=" logo" src={flechaAbajo}></img>
            </button>
            <p>
              Envíos gratuitos en compras superiores a $999. Debido a las
              medidas actuales para proteger la seguridad de los empleados de
              nuestro centro de distribución con motivo del COVID-19, las
              entregas pueden presentar un retraso. Puedes consultar el estatus
              de tu pedido aquí. Envíos y devoluciones gratis para miembros de
              Nike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsNike;
/*
<button>CM 23.5 (US 5)</button>
          <button>CM 24 (US 5.5)</button>
          <button>CM 24 (US 6)</button>
          <button>CM 25</button>
          <button>CM 25.5</button>
          <button>CM 26</button>
          <button>CM 26.5</button>
          <button>CM 27</button>
          <button>CM 27.5</button>
          <button>CM 28</button>
          <button>CM 28.5</button>
          <button>CM 29</button>
          <button>CM 29.5</button>
          <button>CM 30</button>
          <button>CM 31</button>
          <button>CM 32</button>


*/
