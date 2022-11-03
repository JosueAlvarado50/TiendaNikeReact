import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={classes.tarjeta}>
      <div className={classes.cuerpo}>
        <img src={props.url} alt="muestra"></img>
      </div>

      <ul>
        <li>
          <p className={classes.productName}>
            <p>{props.modelo}</p>
          </p>
          <p className={classes.productDescription}>{props.tipo}</p>
        </li>

        <li className={classes.productPrice}>${props.precio}</li>
      </ul>
    </div>
  );
};
export default ProductCard;
