import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { createHistory } from 'history/createBrowserHistory'

ReactDOM.render(
   <BrowserRouter >
       <App />
   </BrowserRouter>
 , document.getElementById('root'));

registerServiceWorker();