import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./store/cart-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartContextProvider>
);
