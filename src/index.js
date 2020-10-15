import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App.jsx";
import AuthProvider from "./Components/auth/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./Components/CartContext/CartProvider";
import ProductProvider from "./Components/Products/ProductProvider";

ReactDOM.render(
    <Router>
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CartProvider>
      </AuthProvider>
    </Router>,
  document.getElementById("root")
);
