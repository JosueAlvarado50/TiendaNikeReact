import classes from "./ProductsNike.module.css";
import flechaAbajo from "../assets/flechaAbajo.png";

const ProductsNike = () => {
  const onClickHandler = () => {};
  return (
    <div className={classes.backgoundProduct}>
      <div className={classes.descriptionImages}>
        <img
          alt="nike sb Chron 2"
          src="https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/73752503-a046-42ac-a006-b70b54189329/calzado-de-skateboarding-sb-chron-2-zr8R7R.png"
        ></img>
        <video autoPlay loop playsInline muted>
          <source
            src="https://static.nike.com/a/videos/q_90,vc_vp9/916fb268-149e-41f7-8143-f43c1bfb79e8/video.webm"
            type="video/webm"
          ></source>
        </video>
        <img
          alt="nike sb Chron 2"
          src="https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,q_80,w_440/13ced543-ed19-4846-88bb-f2e7790c0898/calzado-de-skateboarding-sb-chron-2-zr8R7R.png"
        ></img>
        <img
          alt="nike sb Chron 2"
          src="https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,q_80,w_440/59282767-819c-4795-a965-8060a3d7d44c/calzado-de-skateboarding-sb-chron-2-zr8R7R.png"
        ></img>
        <img
          alt="nike sb Chron 2"
          src="https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,q_80,w_440/7ad4b422-8d76-4dee-8f7c-371ed39fa8a6/calzado-de-skateboarding-sb-chron-2-zr8R7R.png"
        ></img>
        <img
          alt="nike sb Chron 2"
          src="https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/73752503-a046-42ac-a006-b70b54189329/calzado-de-skateboarding-sb-chron-2-zr8R7R.png"
        ></img>
        <img
          alt="nike sb Chron 2"
          src="https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,q_80,w_440/92bcd32c-8182-4f80-abeb-eed62234f473/calzado-de-skateboarding-sb-chron-2-zr8R7R.png"
        ></img>
        <img
          alt="nike sb Chron 2"
          src="https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,q_80,w_440/18dd7eda-02cb-4adc-a6fd-a85099319479/calzado-de-skateboarding-sb-chron-2-zr8R7R.png"
        ></img>
        <img
          alt="nike sb Chron 2"
          src="https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,q_80,w_440/a83feb71-a03b-4449-8bef-4de9506ba0af/calzado-de-skateboarding-sb-chron-2-zr8R7R.png"
        ></img>
      </div>
      <div className={classes.descriptionProducts}>
        <div>
          <h1>Nike SB Chron 2</h1>
          <p>Calzado de skateboarding</p>
          <p>$1,749</p>
        </div>
        <div>
          <fieldset className={classes.fieldSetImg}>
            <button>
              <img
                alt="example-1"
                src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/459ba93d-4e55-4a37-8cc6-46b9a4f6ce19/calzado-de-skateboarding-sb-chron-2-zr8R7R.png"
              ></img>
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
          <button className={classes.blackButton}>
            Agregar a la bolsa de compra
          </button>
          <button className={classes.whiteButton}>favoritos ♥</button>
          <div className={classes.textDescriptionProduct}>
            <p>
              El Nike SB Chron 2, flexible y transpirable, es una versión a la
              altura de sus predecesoras.La actualización del diseño incluye un
              cuello y un talón renovados para ofrecer un ajuste mejorado y
              mantener la comodidad y el rendimiento que esperas de Nike SB.
            </p>
            <ul>
              <li>
                Color que se muestra: Negro/Negro/Marrón claro goma/Blanco
              </li>
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
