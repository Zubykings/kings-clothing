import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { UserProvider } from "./context/user.context";
import { CategoriesProvider } from "./context/categories-context";
import { CartProvider } from "./context/cart.context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// The CartProvider is needs the User and the Product Provider, hence, it is placed inside of them.

reportWebVitals();
