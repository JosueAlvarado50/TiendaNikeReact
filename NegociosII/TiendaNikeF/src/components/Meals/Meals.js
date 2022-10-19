import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";

import classes from "./Meals.module.css";

const Meals = (props) => {
  return (
    <Fragment>
      <div className={classes}>
        <AvailableMeals onShowCart={props.onShowCart}></AvailableMeals>
      </div>
    </Fragment>
  );
};

export default Meals;
