import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div className={classes.descrpcion}>
        <img alt="modelo" src={props.url}></img>

        <div className={classes.summary}>
          <h2>{props.name}</h2>
          <span className={classes.color}>
            <p>color: {props.color}</p>
          </span>

          <span className={classes.price}>
            <p>Precio: ${props.price}</p>
          </span>
          <div className={classes.cantidad}>
            <p>cantidad:</p>
            <span className={classes.amount}>x{props.amount}</span>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
