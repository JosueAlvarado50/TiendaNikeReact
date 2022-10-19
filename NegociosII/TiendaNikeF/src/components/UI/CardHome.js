import classes from "./CardHome.module.css";

const CardHome = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default CardHome;
