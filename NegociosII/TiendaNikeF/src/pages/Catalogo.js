import React, { useEffect } from "react";
import { Fragment } from "react/cjs/react.development";
import Card from "../components/UI/Card";
import ProductCard from "../components/UI/ProductCard";

const Catalogo = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Fragment>
      <Card>
        <ProductCard></ProductCard>
      </Card>
    </Fragment>
  );
};
export default Catalogo;
