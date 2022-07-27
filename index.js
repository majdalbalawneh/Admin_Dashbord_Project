import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import './index.css';
import store from './store/store'
import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
