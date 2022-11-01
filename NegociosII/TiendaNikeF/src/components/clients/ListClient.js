import React, { Fragment } from "react";
import classes from "./ListClient.module.css";

const ListClient = () => {
  return (
    <Fragment>
      <table className={classes.body}>
        <thead>
          <tr>
            <th>id </th>
            <th>User name </th>
            <th>Lastname </th>
            <th>Email </th>
            <th>phone number </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Josue</td>
            <td>alvarado</td>
            <td>Josue_alvarado_ar@outlook.com</td>
            <td>4491234567</td>
          </tr>
          <tr>
            <td>2</td>
            <td>leo</td>
            <td>alvarado</td>
            <td>leo@outlook.com</td>
            <td>4491234567</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};
export default ListClient;
