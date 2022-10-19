import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={classes.tarjeta}>
      <div className={classes.cuerpo}>
        <img src={props.url} alt="muestra"></img>
      </div>

      <ul>
        <li>
          <p className={classes.productName}>Nike AF1 Yellow</p>
          <p className={classes.productDescription}>
            Calzado de entrenamiento para mujer
          </p>
        </li>

        <li className={classes.productPrice}>$1,959</li>
      </ul>
    </div>
  );
};
export default ProductCard;
