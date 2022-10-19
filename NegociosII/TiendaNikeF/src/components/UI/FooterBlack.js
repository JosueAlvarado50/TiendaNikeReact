import classes from "./FooterBlack.module.css";

const FooterBlack = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.grupoPrincipal}>
        <div className={classes.grupo1}>
          <p>BUSCAR TIENDA</p>
          <p>REGÍSTRATE PARA RECIBIR CORREOS</p>
          <p>ELECTRÓNICOS</p>
          <p>HAZTE MIEMBRO</p>
          <p>ENVÍANOS TUS COMENTARIOS</p>
        </div>
        <div className={classes.grupo2}>
          <p className={classes.p1}>OBTENER AYUDA</p>
          <p className={classes.p2}>Envio y entrega</p>
          <p className={classes.p2}>Devoluciones</p>
          <p className={classes.p2}>Opciones de pago</p>
          <p className={classes.p2}>Comunicate con nosotros</p>
        </div>
        <div className={classes.grupo2}>
          <p className={classes.p1}>ACERCA DE NIKE</p>
          <p className={classes.p2}>Noticias</p>
          <p className={classes.p2}>Empleo</p>
          <p className={classes.p2}>Inversionistas</p>
          <p className={classes.p2}>Sostenibilidad</p>
        </div>
        <div className={classes.grupo3}>
          <img
            alt="logo-twitter"
            src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png"
          ></img>
          <img
            alt="logo-face"
            src="https://i.pinimg.com/originals/57/98/53/5798533bb3f2a08ee3514f9c6f6e03be.png"
          ></img>
          <img
            alt="logo-Youtu"
            src="https://cdn-icons-png.flaticon.com/512/1383/1383260.png"
          ></img>
          <img
            alt="logo-insta"
            src="https://i.pinimg.com/originals/3b/21/c7/3b21c7efd2ba9c119fb8d361acacc31d.png"
          ></img>
        </div>
      </div>
      <div>
        <div className={classes.grupo4}>
          <ul>
            <li>
              <p> Ubicacion Mexico </p>
              <p>© 2022 Nike, Inc. Todos los derechos reservados.</p>
            </li>
          </ul>
        </div>
        <div className={classes.grupo5}>
          <ul>
            <li>
              <p> Guias</p>
            </li>
            <li>
              <p> Terminos de uso</p>
            </li>
            <li>
              <p> Terminos de venta</p>
            </li>
            <li>
              <p> Detalles de la empresa</p>
            </li>
            <li>
              <p> Politica de privacidad y cookies</p>
            </li>{" "}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlack;
