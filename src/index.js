import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import thunk from "redux-thunk"
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers/index"
const { worker } = require('./mocks/browser');
worker.start();


const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
    <App /></Provider>, 
    document.getElementById("root")
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.