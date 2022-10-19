import classes from "./HomeButton.module.css";
const HomeButton = (props) => {
  return (
    <div>
      <button className={classes.button}>{props.children} </button>
    </div>
  );
};
export default HomeButton;
