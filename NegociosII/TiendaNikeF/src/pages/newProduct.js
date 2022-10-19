import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import ProductForm from "../components/Products/ProductForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/productsApi";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);
  //TODO aqui viene toda la data... falta adaptarlo a nombre, price y description etc..
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <ProductForm
      isLoading={status === "pending"}
      onAddQuote={addQuoteHandler}
    />
  );
};

export default NewQuote;
