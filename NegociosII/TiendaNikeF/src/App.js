import { Route, Routes, Navigate, Link } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import HomePage from "./components/UI/HomePage";
import Cart from "./components/Cart/Cart";
import FooterBlack from "./components/UI/FooterBlack";
import React, { useState, Fragment, useContext, useEffect } from "react";
import AuthContext from "./components/store/Auth-context";
import MainNavigation from "./components/layout/MainNavigation";
import CartProvier from "./components/store/CartProvider";
import UserLogin from "./components/layout/UserUI/UserLogin";
import UserRegister from "./components/layout/UserUI/UserRegister";
import ProductsNike from "./pages/ProductsNike";
import NewProduct from "./pages/newProduct";
import MenuHamburguesa from "../src/components/layout/UserUI/MenuHamburguesa";
import ListClient from "./components/clients/ListClient";
import Catalogo from "./pages/Catalogo";
import ClientLogin from "./components/layout/UserUI/ClientLogin";
import loginNavigation from "./components/layout/UserUI/loginNavigation";

//!Falta corregir mostrar el card
function App() {
  const [menu, setmenu] = useState(false);
  const [cartIsShowCart, setCardIsShowCart] = useState(false);
  const authCtx = useContext(AuthContext);
  const [widthBrowser, setWidthBrowser] = useState(window.outerWidth);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const changeSize = () => {
    console.log("la pantalla cambio de tamaño");
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);

  console.log(widthBrowser);
  const showCartHandler = () => {
    setCardIsShowCart(true);
  };
  const hideCartHandler = () => {
    setCardIsShowCart(false);
  };

  //TODO:tengo que mandarle props desde homepage a meals  [  onShowCart  ] y meals le pasa props a availableMeals
  //TODO:tambien cart necesita props
  return (
    <Fragment>
      <CartProvier>
        {cartIsShowCart && <Cart onHideCart={hideCartHandler}></Cart>}
        {width > 770 ? (
          <div>
            <loginNavigation></loginNavigation>
            <MainNavigation onShowCart={showCartHandler}></MainNavigation>
          </div>
        ) : (
          <MenuHamburguesa></MenuHamburguesa>
        )}
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate replace to="/homePage" />} />
            <Route
              path="/homePage"
              element={<HomePage onShowCart={showCartHandler}></HomePage>}
            />
            <Route path="/quotes" element={<AllQuotes />} />
            <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
              <Route
                path=""
                element={
                  <div className="centered">
                    <Link className="btn--flat" to={`comments`}>
                      Load Comments
                    </Link>
                  </div>
                }
              />
              <Route path={`comments`} element={<Comments />} />
            </Route>
            {authCtx.isLoggedIn && (
              <Route path="/new-quote" element={<NewQuote />} />
            )}
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/new-account" element={<UserRegister />} />
            <Route path="/list-client" element={<ListClient />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route
              path="/catalogo/:productId"
              element={<ProductsNike></ProductsNike>}
            ></Route>

            <Route path="/products" element={<ProductsNike />}></Route>

            {authCtx.isLoggedIn && (
              <Route path="/add-product" element={<NewProduct />}></Route>
            )}
            {authCtx.isLoggedIn && (
              <Route path="/perfil" element={<ClientLogin />}></Route>
            )}
          </Routes>
        </Layout>
        <FooterBlack></FooterBlack>
      </CartProvier>
    </Fragment>
  );
}

export default App;
