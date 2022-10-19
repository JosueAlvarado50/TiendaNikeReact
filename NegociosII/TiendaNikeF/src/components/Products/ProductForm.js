import { Fragment, useRef, useState } from "react";
// import { Prompt } from 'react-router-dom';

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./ProductForm.module.css";

const ProductForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    "https://www.odoo.com/web/image/res.users/1405482/image_1024?unique=3b42ac7"
  );

  const authorInputRef = useRef();
  const textInputRef = useRef();
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();
  const urlInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    //const enteredAuthor = authorInputRef.current.value;
    //const enteredText = textInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const entederUrl = urlInputRef.current.value;

    // optional: Could validate here

    // props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };
  const urlChangeHandler = (event) => {
    event.preventDefault();
    setImageUrl(urlInputRef.current.value);
  };

  return (
    <Fragment>
      {/* Prompt is currently not supported yet by v6 */}
      {/* <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure you want to leave? All your entered data will be lost!'
        }
      /> */}
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div className={classes.background}>
            <div className={classes.control}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" ref={nameInputRef} />
              <label htmlFor="description">Description</label>
              <input
                id="description"
                rows="5"
                ref={descriptionInputRef}
              ></input>
              <label htmlFor="price">Price</label>
              <input id="price" type="number" ref={priceInputRef}></input>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="file"
                ref={urlInputRef}
                placeholder="url image"
                onChange={urlChangeHandler}
              ></input>
              <div className={classes.actions}>
                <button onClick={finishEnteringHandler} className="btn">
                  Add product
                </button>
              </div>
            </div>
            <img
              alt="Error al cargar la imagen favor de verificar la url!"
              src={imageUrl}
            ></img>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default ProductForm;
