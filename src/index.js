import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ConnectedApp from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { productReducer } from "./reducers";

const store = createStore(productReducer, {
  products: [],
  productsAddedToCart: [],
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
