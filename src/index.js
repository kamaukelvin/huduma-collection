import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import {ContextProvider} from 'context/Context'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
<Router>
      <ContextProvider>
      <App />
      </ContextProvider>
      </Router>
 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
