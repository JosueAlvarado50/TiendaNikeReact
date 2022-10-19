import classes from "../UI/HomePage.module.css";
import MealsSummary from "../Meals/MealsSummary";

const HomePage = (props) => {
  return (
    <div className={classes.main}>
      <main>
        <MealsSummary></MealsSummary>
      </main>
    </div>
  );
};
export default HomePage;
//TODO quite Meals para unos cambios // <Meals onShowCart={props.onShowCart}></Meals>
