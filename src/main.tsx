import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import App from './App'
import axios from 'axios';
import {configureStore} from "./redux/configureStore";
import {Provider} from "react-redux";

axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.withCredentials = true;
//set Redux store
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
