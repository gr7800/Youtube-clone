import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./_base.scss"
import { BrowserRouter as Router } from 'react-router-dom';
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Provider store={store}>
    <Router >
      <App />
    </Router>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
