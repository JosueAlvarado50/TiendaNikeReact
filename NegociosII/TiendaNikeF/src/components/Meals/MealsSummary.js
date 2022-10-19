import classes from "./MealsSummary.module.css";
import PrevFooter from "../UI/PrevFooter";
import Caroussel from "../UI/Caroussel";

const MealsSummary = () => {
  return (
    <div className={classes.background}>
      <section className={classes.summary}>
        <img
          alt="fondo-Nike"
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/47b8ccba-046a-47ad-86f9-a4676e736635/sitio-web-oficial-de-nike.png"
        ></img>

        <button className={classes.blackButton}>Comprar</button>
      </section>
      <section className={classes.summary2}>
        <img
          alt="fondo2-Nike"
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/2bd8c280-3a80-4f1a-bfcf-11cc5588fe15/sitio-web-oficial-de-nike.jpg"
        ></img>
        <p>Calzado de fútbol</p>
        <h2>AIR ZOOM MERCURIAL</h2>
        <p>Acceso anticipado para miembros.</p>
        <button className={classes.blackButton}>Comprar</button>

        <div className={classes.parrafo}>
          <p>Novedades</p>
          <ul>
            <li className={classes.liIzqImage}>
              <p>
                Nike Running:<br></br>Preparate para correr maratón<br></br>
              </p>
              <button> Comprar</button>
            </li>
            <li className={classes.liDerImage}>
              <p>
                Nike Golf:<br></br>Listos para el torneo<br></br>
              </p>
              <button> Comprar</button>
            </li>
          </ul>
        </div>
      </section>
      <div className={classes.parrafoSegmento}>
        <p>Lo mejor Nike en calzado para niños</p>
      </div>
      <Caroussel></Caroussel>
      <PrevFooter></PrevFooter>
    </div>
  );
};

export default MealsSummary;
/* 
 {" "}
              <img
                alt="imagen-izq"
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/63f8e505-2c41-4a99-a09d-16fb44a2cb74/sitio-web-oficial-de-nike.png"
              ></img>{" "}

 <img
                alt="imagen-der"
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/0dcdd7d4-1d33-47ab-94ba-f8dcc0553588/sitio-web-oficial-de-nike.png"
              ></img>


 
 */
