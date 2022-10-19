import classes from "./PrevFooter.module.css";

const PrevFooter = () => {
  return (
    <div className={classes.prevFooter}>
      <img
        alt="mini-logo-nike"
        src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/26a6f275-9ac1-44e5-bf22-7db1d900bb3b/sitio-web-oficial-de-nike.jpg"
      ></img>
      <button>Registrate</button>
      <button>Conoce los beneficios</button>
    </div>
  );
};

export default PrevFooter;
