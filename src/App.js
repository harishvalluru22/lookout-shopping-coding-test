import { createStore } from "redux";
import { connect } from "react-redux";
import { productReducer } from "./reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import { NavHeader } from "./components";
import ConnectedCartSummary from "./components/CartSummary";
import ConnectedProductListView from "./components/ProductListView";
import React from "react";
import * as Action from "./actions";

const App = ({ onGetProducts }) => {
  const getStoreData = async () => {
    const responseData = await fetch("https://fakestoreapi.com/products");
    const products = await responseData.json();
    onGetProducts(products);
  };

  React.useEffect(() => {
    getStoreData();
  }, []);

  return (
    <Router>
      <NavHeader />
      <Route path="/" exact component={ConnectedProductListView} />
      <Route path="/product-cart" component={ConnectedCartSummary} />
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProducts: (products) => {
      dispatch(Action.addProductToStoreAction(products));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
