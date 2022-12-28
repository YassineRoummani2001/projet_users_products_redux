import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";

import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { contactReducer } from "./redux/reducers/contactReducer";
import { productsReducer } from "./redux/reducers/productsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const storeContact = createStore(contactReducer, composeWithDevTools());
const storeProduct = createStore(productsReducer, composeWithDevTools());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={storeProduct} >
  <Provider store={storeContact} >
    <Router>
      <App />
    </Router>
  </Provider>
  </Provider>,
  rootElement
);


